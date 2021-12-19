import React from "react";
import "./popup.css";
import { ButtonNoLink } from "../buttons/ColorButton";

/* Popups. Set them by choosing a style, either popupBlue, popupPurple, 
or popupRed when calling the function. Text is added to popup AND buttons on the 
popup when called */

/* Popup with one button. */
function PopupOneButton(props) {
  return props.trigger ? (
    <div className="overlay">
      <div className={props.className}>
        <div className="buttonCenter">
          <ButtonNoLink
            title={props.title}
            className="buttonLarge"
            onClick={() => props.setTrigger(false)}
          />
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

/* Popup with two buttons */
function PopupTwoButtons(props) {
  return props.trigger ? (
    <div className="overlay">
      <div className={props.className}>
        <div className="buttonRight">
          <ButtonNoLink
            title={props.buttonRight}
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            onClick={() => props.setTrigger(false)}
          />
        </div>
        <div className="buttonLeft">
          <ButtonNoLink
            title={props.buttonLeft}
            color="DarkBlueBtn"
            primary="false"
            className="buttonSmall"
            onClick={() => props.setTrigger(false)}
          />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export { PopupOneButton, PopupTwoButtons };
