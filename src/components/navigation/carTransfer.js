import React from 'react';
import './booking.css';
import './carTransfer.css'
import '../../index.css';
import InputField from './inputField';
import SelectBox from './selectBoxes';
import { CarGroup } from './booking';

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
        
        <div className="comments">
            <form>
                <textarea placeholder="Write any comments about the car's state here"/>
            </form>
        </div>
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
        </div>
    )
}

export default CarTransfer;