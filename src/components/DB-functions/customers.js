import Parse from "parse";

async function addCustomer(name, address, phone, email, licenseID, birthday) {
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

/* async function updateCustomer(customerId, name,
  address,
  phone,
  email,
  licenseID,
  birthday) {
  // Create a new Todo parse object instance and set todo id
  let customer = new Parse.Object("Customers");
  Todo.set('objectId', customerId);
  // Set new done value and save Parse Object changes
  customer.set("name", name);
  customer.set("address", address);
  customer.set("phone", phone);
  customer.set("email", email);
  customer.set("license", licenseID);
  customer.set("born", birthday);
  try {
    await customer.save();
    // Success
    alert('Success! Customer updated!');
    // Refresh to-dos list
    readCustomers();
    return true;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(`Error! ${error.message}`);
    return false;
  };
}; */

/* async function readBookings(props) {
  // Reading parse objects is done by using Parse.Query
  const parseQuery = new Parse.Query("Bookings");
  try {
    let bookings = await parseQuery.find();
    // Be aware that empty or invalid queries return as an empty array
    // Set results to state variable
    setReadResults(bookings);

    return true;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(`Error! ${error.message}`);
    return false;
  }
}

async function deleteBooking(bookingId) {
  // Create a new Todo parse object instance and set todo id
  const Booking = new Parse.Object("Bookings");
  Booking.set("objectId", bookingId);
  // .destroy should be called to delete a parse object
  try {
    await Booking.destroy();
    alert("Success! To-do deleted!");
    // Refresh to-dos list to remove this one
    readBookings();
    return true;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(`Error ${error.message}`);
    return false;
  }
} */

export { addCustomer };
