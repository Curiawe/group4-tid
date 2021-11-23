import React from "react";
import './popup.css'

/* Popups. Set them by choosing a style, either popupBlue, popupPurple, 
or popupRed when calling the function. Text is added to popup when called */


/* Popup with one button. */
function Popup(props) {
    return (props.trigger) ? (
        <div className="overlay">
            <div className={props.className}>
                <button className="buttonOne" onClick={() => props.setTrigger(false)}>{props.buttonOne}</button>
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
                <button className="buttonOne" onClick={() => props.setTrigger(false)}>{props.buttonOne}</button>
                <button className="buttonTwo" onClick={() => props.setTrigger(false)}>{props.buttonTwo}</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export { Popup, PopupTwoButtons };