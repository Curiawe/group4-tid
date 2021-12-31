import React from "react";
import "./inputFieldsAndDropdown.css";

/* Inputfields for input forms.*/
/**
 * InputField creates an <input> element with the type specified under "type".
 * For a smaller variant, use "InputFieldSmall", instead.
 * 
 * For type time: Min and Max values have been set to 08:00 and 20:00, respectively.
 * For type date: Please ensure that the "value" props is a valid Date object.
 * 
 * @param {*} props 
 * @returns 
 */
const InputField = (props) => {
  let step
  let min = props.min
  let max = props.max
  let value = props.value

  if (props.type === "time"){
    step = 7200
    min = "08:00"
    max = "20:00"
  }

  if (props.type === "date") {
    value = new Date(props.value).toLocaleDateString("fr-CA")
  }

  return (
    <div className="inputField">
      <input
        type={props.type}
        onChange={props.onChange}
        name={props.placeHolder}
        step={step}
        min={min}
        max={max}
        permitted={props.permitted}
        value={value}
        list={props.list}
        required
        value={value}
      />

      <label> {props.placeHolder}</label>
    </div>
  );
};

const InputFieldSmall = (props) => {
  let step
  let min = props.min
  let max = props.max
  let value = props.value

  if (props.type === "time"){
    step = 7200
    min = "08:00"
    max = "20:00"
  }

  if (props.type === "date") {
    value = new Date(props.value).toLocaleDateString("fr-CA")
  }

  return (
    <div className="inputField">
      <input
        type={props.type}
        onChange={props.onChange}
        name={props.placeHolder}
        step={step}
        min={min}
        max={max}
        permitted={props.permitted}
        value={value}
        list={props.list}
        required
        value={value}
      />

      <label> {props.placeHolder}</label>
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
