import React from 'react';
import './booking.css';
import './carTransfer.css';
import './buttons/buttons.css';
import {InputField, TextArea} from './inputField';
import { CarGroup } from './booking';
import ButtonStyled from './buttons/ColorButton';
import '../index.css';

/* This is the page header */ 
function PageHeader() {
    return (
        <div className="header">
            <div className="title">
                <h1>Car Transfer</h1>
            </div>
        </div>
    )
}

/* Select the type of transfer */ 
function SelectTransferType() {
    
    const handleChange=(event)=> {
        console.log(event.target.value);
        
      };
 
    return (
        <div className="rowLayout">
            <h5>Select Action</h5>
            <div className="selectBox">
                <input type="radio" value="Request" name="Transfer" onClick={handleChange}/> Request Car 
                <input type="radio" value="Release" name="Transfer" onClick={handleChange}/> Release Car
            </div>
        </div>
    )
}

/* Transfer location selection */
function Location() {
    return (
        <div className="rowLayout">
            <h5>Location</h5>
            <InputField className="inputField" placeHolder="Select Location"/>
        </div>
  
    )
}

/* Transfer date selection */
function Date() {
    return (
        <div className="rowLayout">
            <h5>Date</h5>
            <InputField className="inputField"  placeHolder="Select Date"/>
        </div>
  
    )
}

/* Comments area */
function Comments() {
    return (
        <div className="rowLayout">
        <h5>Comments</h5>
        <TextArea className="comments" placeHolder="Comments about the car state"/> 
        </div>
    )
}

/* Buttons to either save or cancel the transfer request */
function TransferButtons(props) {
    return (
        <div className="finishBtn">
            <ButtonStyled title="Send Request" color="DarkBlueBtn" primary="true" className="buttonLarge"/>
        </div>
       
    )
}

/* The transfer component */
function CarTransfer() {
    return (
        <div className="transfer">
            <PageHeader/>
            <SelectTransferType/>
            <CarGroup/>
            <Location/>
            <Date/>
            <Comments/>
            <TransferButtons/>
        </div>
    )
}

export default CarTransfer;