/* Post request */
async function postcarGroup() {
  const postData = {
    name: "X - Semi Trucks",
    sets: "4",
    baggage: "4",
    price: "400",
  };

  try {
    const result = await fetch("https://parseapi.back4app.com/CarGroups", {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": "MLAXgFc5A2NSu1Tuf049yDS0NOdublxP1vHr1hVK",
        "X-Parse-REST-API-Key": "HtRDr5PWrW3T1tMZ7GE6rAC1d3Ze3YDZ2cqVdZO2",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!result.ok) {
      const message = "Error with Status Code: " + result.status;
      throw new Error(message);
    }

    const data = await result.json();
    console.log("Car group created", data);
  } catch (error) {
    console.error("Error while creating car group: ", error);
  }
}

/* Get request */
async function getCarGroups() {
  const rawResponse = await fetch("https://parseapi.back4app.com/CarGroups", {
    method: "GET",
    headers: {
      "X-Parse-Application-Id": "MLAXgFc5A2NSu1Tuf049yDS0NOdublxP1vHr1hVK",
      "X-Parse-REST-API-Key": "HtRDr5PWrW3T1tMZ7GE6rAC1d3Ze3YDZ2cqVdZO2",
    },
  });
  return await rawResponse.json();
}

export { getCarGroups, postcarGroup };
