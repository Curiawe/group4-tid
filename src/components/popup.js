import React from "react";
import './popup.css'
import ButtonStyled from "./buttons/ColorButton";

/* Popups. Set them by choosing a style, either popupBlue, popupPurple, 
or popupRed when calling the function. Text is added to popup AND buttons on the 
popup when called */


/* Popup with one button. */
function PopupOneButton(props) {
    return (props.trigger) ? (
        <div className="overlay">
            <div className={props.className}>
                <button className="buttonSmall" onClick={() => props.setTrigger(false)}>{props.buttonCenter}</button>
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
                <div className="buttonRight">
                <ButtonStyled title={props.buttonRight} color="DarkBlueBtn" primary="true"className="buttonLarge" onClick={() => props.setTrigger(false)}/>
                </div>
                <div className="buttonLeft">
                <ButtonStyled title={props.buttonLeft} color="DarkBlueBtn" primary="false"className="buttonSmall" onClick={() => props.setTrigger(false)}/>
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export { PopupOneButton, PopupTwoButtons };