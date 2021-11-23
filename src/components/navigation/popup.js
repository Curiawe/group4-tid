import React from "react";
import './popup.css'

/* Popups. Set them by choosing a style, either popupBlue, popupPurple, 
or popupRed when calling the function. Text is added to popup AND buttons on the 
popup when called */


/* Popup with one button. */
function PopupOneButton(props) {
    return (props.trigger) ? (
        <div className="overlay">
            <div className={props.className}>
                <button className="buttonCenter" onClick={() => props.setTrigger(false)}>{props.buttonCenter}</button>
                {props.children}
            </div>
        </div>
    ) : "";
};


/* Popup with two buttons */
function PopupTwoButtons(props) {
    return (props.trigger) ? (
        <div className="overlay">
            <div className={props.className}>
                <button className="buttonRight" onClick={() => props.setTrigger(false)}>{props.buttonRight}</button>
                <button className="buttonLeft" onClick={() => props.setTrigger(false)}>{props.buttonLeft}</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export { PopupOneButton, PopupTwoButtons };