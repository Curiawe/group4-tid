import React from 'react';
import { BookedCar } from './pickup';
import './booking.css';
import './pickupAndReturn.css';
import SelectBox from './selectBoxes.js';
import {InputField, TextArea} from './inputField.js';
import { PickupReturnButtons } from './pickup.js';

/* This is the page header */ 
function ReturnHeader() {
    return (
        <div className="header">
            <div className="title">
                <h1>Return</h1>
            </div>
            <div className="bookingNumber">
                <p>Booking ID:</p>
            </div>
        </div>
    )
}

/* Here, the car state is selected */
function CarState() {
    return (
        <div className="carState">
            <h5>Car State</h5>
            <div className="attribute">
                <div className="dropDown">
                    <select required>
                        <option value="Ready">Ready</option>
                        <option value="Rented">Rented</option>
                        <option value="Returned" selected>Returned</option>
                        <option value="Transfer">Transfer</option>
                        <option value="Unaivailable">Unaivailable</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

/* The time of the return is entered here */
function ReturnTime() {
    return (
        <div className="returnTime">
            <h5>Arrival Time</h5>
            <div className="attribute3">
                <SelectBox type="checkbox" buttonText="On Time"/>
                <div className="lateBy">
                    <SelectBox className="btnWithBox" type="checkbox" buttonText="Late by"/>
                    <InputField className="inputFieldSmall" placeHolder="min"/>
                </div>
            </div>
        </div>
    )
}

/* The values for fuel and mileage upon car return are noted here */
function ReturnFuelAndMileage() {
    return (
        <div className="returnLevel">
            <h5>Mileage</h5>
                <div className="attribute4">
                    <InputField className="inputFieldSmall" placeHolder="km"/>
                    <SelectBox className="selectBox" type="checkbox" buttonText="Above Limit"/>
                </div>
            <h5>Fuel Level</h5>
            
            <div className="attribute4">
                <InputField className="inputFieldSmall" placeHolder="%"/>
                <SelectBox className="selectBox" type="checkbox" buttonText="Below Limit"/>
            </div>
            <h5>Comments</h5>
            <TextArea className="attribute" placeHolder="Comments about the car's state"/> 
            
        </div>

    )
}

/* The return component */ 
function ReturnComponent() {
    return (
        <div className="return">
            <ReturnHeader/>
            <BookedCar/>
            <CarState/>
            <ReturnTime/>
            <ReturnFuelAndMileage/>
            <PickupReturnButtons/>
        </div>
    )
}


export default ReturnComponent;