import React from 'react';
import './booking.css';
import './carTransfer.css'
import {InputField, TextArea} from './inputField';
import SelectBox from './selectBoxes';
import { CarGroup } from './booking';
import ButtonStyled from './buttons/ColorButton';
import '../index.css';

function PageHeader() {
    return (
        <div className="header">
            <div className="title">
                <h1>Car Transfer</h1>
            </div>
        </div>
    )
}

function SelectTransferType() {
    return (
        <div className="rowLayout">
            <h5>Select Action</h5>
            <div className="attribute3">
                <SelectBox className="radioButton" type="radio" buttonText="Request Car"/>
                <SelectBox className="radioButton" type="radio" buttonText="Release Car"/>
            </div>
        </div>
    )
}


function LocationAndDate() {
    return (
        <div className="columnLayout">
            <div className="rowLayout">
                <h5>Location</h5>
                <InputField className="inputField" placeHolder="Select Location"/>
            </div>
            <div className="rowLayout">
                <h5>Date</h5>
                <InputField className="inputField"  placeHolder="Select Date"/>
            </div>
        </div>
    )
}

function Comments() {
    return (
        <div className="rowLayout">
        <h5>Comments:</h5>
        <TextArea className="comments" placeHolder="Comments about the car state"/> 
        </div>
    )
}

function TransferButtons(props) {
    return (
        <div className="finishBtn">
            <ButtonStyled title="Send Request" color="DarkBlueBtn" primary="true" className="buttonLarge"/>

        </div>
       
    )
}

function CarTransfer() {
    return (
        <div className="transfer">
            <PageHeader/>
            <SelectTransferType/>
            <CarGroup/>
            <LocationAndDate/>
            <Comments/>
            <TransferButtons/>
        </div>
    )
}

export default CarTransfer;