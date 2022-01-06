import { React } from "react";
import "./selectionBoxes.css";

/* Selectboxes for input forms. Set className for the right styling and both the type (either radio or checkbox) and the 
that describes what the button does*/

function CheckBox(props) {
  return (
    <div className="checkBox">
      <input
        type="checkbox"
        name={props.name}
        value={props.buttonText}
        checked={props.checked}
        onChange={props.onChange}
        checked={props.checked}
      />
      <label>{props.buttonText}</label>
    </div>
  );
}

function TwoRadioButtons(props) {
  return (
    <form>
      <div className="radioButton">
        <label>
          <input
            type="radio"
            name={props.name}
            value={props.buttonOne}
            checked={props.checkedOne}
            onChange={props.onChange}
          />
          {props.buttonOne}
        </label>
      </div>
      <div className="radioButton">
        <label>
          <input
            type="radio"
            name={props.name}
            value={props.buttonTwo}
            checked={props.checkedTwo}
            onChange={props.onChange}
          />
          {props.buttonTwo}
        </label>
      </div>
    </form>
  );
}

export { CheckBox, TwoRadioButtons };
