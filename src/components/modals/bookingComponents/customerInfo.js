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
      >
        {nameString}
      </InputField>
      <InputField
        className="inputField"
        type="address"
        onChange={(e) => props.onChangeAddress(e.target.value)}
        placeHolder="Address"
      >
        {addressString}
      </InputField>
      <InputField
        className="inputField"
        type="tel"
        onChange={(e) => props.onChangePhone(e.target.value)}
        placeHolder="Phone Number"
      >
        {phoneString}
      </InputField>
      <InputField
        className="inputField"
        type="email"
        onChange={(e) => props.onChangeEmail(e.target.value)}
        placeHolder="Email Address"
      >
        {emailString}
      </InputField>
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeBirthday(e.target.value)}
        placeHolder="Date of Birth"
      >
        {bornString}
      </InputField>
      <InputField
        className="inputField"
        type="text"
        onChange={(e) => props.onChangeLicenseID(e.target.value)}
        placeHolder="License ID"
      >
        {licenseIDString}
      </InputField>
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeIssueDate(e.target.value)}
        placeHolder="License Issued"
      >
        {licenseIssueString}
      </InputField>
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeExpirationDate(e.target.value)}
        placeHolder="License Expires"
      >
        {licenseExpireString}
      </InputField>
    </BookingComponent>
  );
}

export { BookingCustomerInfo };
