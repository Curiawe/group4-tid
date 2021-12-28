import "../modal.css";
import { BookingComponent } from "./skeleton";
import { InputField } from "../../inputfields+dropdowns/inputFields";

function BookingCustomerInfo(props) {
  let nameString = props.name;
  let addressString = props.address;
  let phoneString = props.phone;
  let emailString = props.email;
  let bornString = new Date(props.birthday).toLocaleDateString("da-DA");
  let licenseIDString = props.licenseID;
  let licenseIssueString = new Date(props.licenseIssueDate).toLocaleDateString(
    "da-DA"
  );
  let licenseExpireString = new Date(
    props.licenseExpirationDate
  ).toLocaleDateString("da-DA");

  return (
    <BookingComponent title="Customer Info">
      <InputField
        className="inputField"
        type="text"
        onChange={(e) => props.onChangeName(e.target.value)}
        placeHolder="Name"
        value={nameString}
      />
      <InputField
        className="inputField"
        type="address"
        onChange={(e) => props.onChangeAddress(e.target.value)}
        placeHolder="Address"
        value={addressString}
      />
      <InputField
        className="inputField"
        type="tel"
        onChange={(e) => props.onChangePhone(e.target.value)}
        placeHolder="Phone Number"
        value={phoneString}
      />
      <InputField
        className="inputField"
        type="email"
        onChange={(e) => props.onChangeEmail(e.target.value)}
        placeHolder="Email Address"
        value={emailString}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeBirthday(e.target.value)}
        placeHolder="Date of Birth"
        value={bornString}
      />
      <InputField
        className="inputField"
        type="text"
        onChange={(e) => props.onChangeLicenseID(e.target.value)}
        placeHolder="License ID"
        value={licenseIDString}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeIssueDate(e.target.value)}
        placeHolder="License Issued"
        value={licenseIssueString}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeExpirationDate(e.target.value)}
        placeHolder="License Expires"
        value={licenseExpireString}
      />
    </BookingComponent>
  );
}

export { BookingCustomerInfo };
