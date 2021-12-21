import React from "react";
import "./inputFieldsAndDropdown.css";

/* Inputfields for input forms. Set className for the right styling and the placeHolder text */
const InputField = (props) => {
  return (
    <div className="inputField">
      <input
        type={props.type}
        onChange={props.onChange}
        name={props.placeHolder}
        min={props.min}
        max={props.max}
        value={props.value}
        required
      />
      <label> {props.placeHolder} </label>
    </div>
  );
};

const InputFieldSmall = (props) => {
  return (
    <div className="inputFieldSmall">
      <input
        type={props.type}
        onChange={props.onChange}
        name={props.placeHolder}
        required
      />
      <label> {props.placeHolder} </label>
    </div>
  );
};

const TextArea = (props) => {
  return (
    <div className="inputText">
      <textarea name={props.placeHolder} onChange={props.onChange} required />
      <label> {props.placeHolder} </label>
    </div>
  );
};

export { InputField, InputFieldSmall, TextArea };
