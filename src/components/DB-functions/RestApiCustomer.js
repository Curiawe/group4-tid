postData = {
  license: {
    id: 12353,
  },
  address: "Hesselparken 1, 3660 Stenløse",
  name: "Hanne Hansen",
  phone: "48 18 56 99",
  email: "hanne@hesselparken.dk",
  born: {
    __type: "Date",
    iso: "1962-03-25T01:00:00.000Z",
  },
}(async () => {
  try {
    const result = await fetch("https://parseapi.back4app.com/customers/", {
      method: "PUT",
      headers: {
        "X-Parse-Application-Id": "MLAXgFc5A2NSu1Tuf049yDS0NOdublxP1vHr1hVK",
        " X-Parse-REST-API-Key": "HtRDr5PWrW3T1tMZ7GE6rAC1d3Ze3YDZ2cqVdZO2",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!result.ok) {
      const message = "Erorr with Status Code: " + response.status;
      throw new Error(message);
    }

    const data = await response.json();
    console.log("Customers created", data);
  } catch (error) {
    console.error("Error while creating Customers: ", error);
  }
})();
