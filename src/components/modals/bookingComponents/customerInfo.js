import "../modal.css";
import { BookingComponent } from "./skeleton";
import { InputField } from "../../inputfields+dropdowns/inputFields";

function BookingCustomerInfo(props) {
  return (
    <BookingComponent title="Customer Info">
      <InputField
        className="inputField"
        type="text"
        onChange={(e) => props.onChangeName(e.target.value)}
        placeHolder="Name"
      />
      <InputField
        className="inputField"
        type="address"
        onChange={(e) => props.onChangeAddress(e.target.value)}
        placeHolder="Address"
      />
      <InputField
        className="inputField"
        type="tel"
        onChange={(e) => props.onChangePhone(e.target.value)}
        placeHolder="Phone Number"
      />
      <InputField
        className="inputField"
        type="email"
        onChange={(e) => props.onChangeEmail(e.target.value)}
        placeHolder="Email Address"
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeBirthday(e.target.value)}
        placeHolder="Date of Birth"
      />
      <InputField
        className="inputField"
        type="text"
        onChange={(e) => props.onChangeLicenseID(e.target.value)}
        placeHolder="License ID"
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeIssueDate(e.target.value)}
        placeHolder="Licence Issue Date"
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeExpirationDate(e.target.value)}
        placeHolder="License Expiration Date"
      />
    </BookingComponent>
  );
}

export { BookingCustomerInfo };
