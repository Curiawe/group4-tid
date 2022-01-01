import "../modal.css";
import { BookingComponent } from "./skeleton";
import { InputField } from "../../inputfields+dropdowns/inputFields";

function BookingCustomerInfo(props) {
  let NameString = propsContained(props.name)
  let addressString = propsContained(props.address)
  let phoneString = propsContained(props.phone)
  let emailString = propsContained(props.email)
  let bornString = propsContained(new Date (props.birthday).toLocaleDateString("fr-CA"))
  let licenseIDString = propsContained(props.licenseID)
  let licenseIssueString = propsContained(new Date(props.licenseIssueDate).toLocaleDateString("fr-CA"))
  let licenseExpireString = propsContained(new Date(props.licenseExpirationDate).toLocaleDateString("fr-CA"))
  
  function propsContained(input) {
    if (input) {
      return input
    } else {
      return ""
    }
  }
  
  return (
    <BookingComponent title="Customer Info">
      <InputField
        className="inputField"
        type="text"
        onChange={(e) => props.onChangeName(e.target.value)}
        placeHolder="Name"
        value={NameString}
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
        onChange={(e) => props.onChangeDate(e.target.value)}
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
