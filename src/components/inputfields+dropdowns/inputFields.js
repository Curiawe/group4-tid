import React from "react";
import "./inputFieldsAndDropdown.css";

/* Inputfields for input forms. Set className for the right styling and the placeHolder text */
const InputField = (props) => {
  let step
  let min = props.min
  let max = props.max 
  if (props.type === "time"){
    step = 7200
    min = "08:00"
    max = "20:00"
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
        value={props.value}
        list={props.list}
        required
      />
      <label> {props.placeHolder} </label>
    </div>
  );
};

const InputFieldSmall = (props) => {
  let step
  let min = props.min
  let max = props.max 
  if (props.type === "time"){
    step = 7200
    min = "08:00"
    max = "20:00"
  }
  return (
    <div className="inputFieldSmall">
      <input
        type={props.type}
        onChange={props.onChange}
        name={props.placeHolder}
        step={step}
        min={min}
        max={max}
        permitted={props.permitted}
        value={props.value}
        list={props.list}
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
