import React from 'react';
import { BookedCar } from './pickup.js';
import './booking.css';
import './pickupAndReturn.css';
import SelectBox from './selectBoxes.js';
import {InputField} from './inputField.js';

function ReturnHeader(props) {
    return (
        <div className="returnHeader">
            <div className="title">
                <h1>Booking ID:</h1>
            </div>
        </div>
    )
}

function CarState(props) {
    return (
        <div className="carState">
            <div className="attributeType">
                Car State:
            </div>
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

function ReturnTime(props) {
    return (
        <div className="returnTime">
            <div className="attributeType">
                Arrival Time:
            </div>
            <div className="attribute3">
                <SelectBox className="onTime" type="radio" buttonText="On Time"/>
                <div className="lateBy">
                    <SelectBox type="radio" buttonText="Late by"/>
                    <InputField className="inputFieldSmall" placeHolder="min"/>
                </div>
            </div>
        </div>
    )
}

function ReturnFuelAndMileage(props) {
    return (
        <div className="returnLevel">
            <div className="attributeType">
            Mileage:
            </div>
                <div className="attribute4">
                    <InputField className="inputFieldSmall" placeHolder="km"/>
                    <SelectBox className="selectBox" type="checkbox" buttonText="Above Limit"/>
                </div>
            <div className="attributeType">
            Fuel Level:
            </div>
            <div className="attribute4">
                <InputField className="inputFieldSmall" placeHolder="%"/>
                <SelectBox className="selectBox" type="checkbox" buttonText="Below Limit"/>
            </div>
            <div className="attributeType">
            Comments:
            </div>
            <div className="attribute">
                <form>
                    <textarea placeholder="Write any comments about the car's state here"/>
                </form>
            </div>
        </div>

    )
}

function Buttons(props) {
    return (
        <div>
            buttons go here somewhere
        </div>
    )
}

function ReturnComponent(props) {
    return (
        <div className="pickup">
            <ReturnHeader/>
            <BookedCar/>
            <CarState/>
            <ReturnTime/>
            <ReturnFuelAndMileage/>
            <Buttons/>
        </div>
    )
}


export default ReturnComponent;