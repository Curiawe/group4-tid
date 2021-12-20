import "../modal.css";
import { BookingComponent } from "./skeleton";
import { InputField } from "../../inputfields+dropdowns/inputFields";

function BookingCustomerInfo(props) {
  let NameString = "Name: " + props.name
  let addressString = "Address: " + props.address
  let phoneString = "Phone Number: " + props.phone
  let emailString = "Email: " + props.email
  let bornString = "Date of Birth: " + new Date(props.birthday).toLocaleDateString("da-DA")
  let licenseIDString = "License ID: " + props.licenseID
  let licenseIssueString = "License Issued: " + new Date(props.licenseIssueDate).toLocaleDateString("da-DA")
  let licenseExpireString = "License Expires: " + new Date(props.licenseExpirationDate).toLocaleDateString("da-DA")
  
  
  return (
    <BookingComponent title="Customer Info">
      <InputField
        className="inputField"
        type="text"
        onChange={(e) => props.onChangeName(e.target.value)}
        placeHolder={NameString}
      />
      <InputField
        className="inputField"
        type="address"
        onChange={(e) => props.onChangeAddress(e.target.value)}
        placeHolder={addressString}
      />
      <InputField
        className="inputField"
        type="tel"
        onChange={(e) => props.onChangePhone(e.target.value)}
        placeHolder={phoneString}
      />
      <InputField
        className="inputField"
        type="email"
        onChange={(e) => props.onChangeEmail(e.target.value)}
        placeHolder={emailString}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeBirthday(e.target.value)}
        placeHolder={bornString}
      />
      <InputField
        className="inputField"
        type="text"
        onChange={(e) => props.onChangeLicenseID(e.target.value)}
        placeHolder={licenseIDString}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeIssueDate(e.target.value)}
        placeHolder={licenseIssueString}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeExpirationDate(e.target.value)}
        placeHolder={licenseExpireString}
      />
    </BookingComponent>
  );
}

export { BookingCustomerInfo };
