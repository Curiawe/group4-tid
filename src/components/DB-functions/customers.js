import Parse from "parse";

export default async function addCustomer(
  name,
  address,
  phone,
  email,
  licenseID,
  birthday
) {
  const customer = new Parse.Object("Customers"); // give us the blueprint for CarGroup Objects

  // Setting our values
  customer.set("name", name);
  customer.set("address", address);
  customer.set("phone", phone);
  customer.set("email", email);
  customer.set("license", licenseID);
  customer.set("born", birthday);

  try {
    // please try to do the things in curly bracket.
    let result = await customer.save();
    alert("New object created with objectId: " + result.id);
  } catch (error) {
    // but if any of this happens...
    alert("Failed to create new object, with error code: " + error.message); // do this instead
  } finally {
    // no matter what, do that when you're done
  }
}
