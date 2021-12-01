import React from 'react';
import './pickupAndReturn.css';
import './booking.css';
import './buttons/buttons.css';
import {InputField, TextArea} from './inputField';
import { SelectCarGroup } from './dropDowns';
import ButtonStyled from './buttons/ColorButton';
import FeatherIcon from 'feather-icons-react';

function PickupHeader() {
    return (
        <div className="header">
            <div className="title">
                <h1>Pickup</h1>
            </div>
            <div className="bookingNumber">
                <p>Booking ID:</p>
            </div>
        </div>
    )
}

function CheckCustomerInfo(props) {
    return (
        <div className="info">
            <h5>Customer Information</h5>
            <div className="attribute">
                <ButtonStyled title="Check Information" color="PurpleBtn" primary="true" className="buttonLarge"/>
            </div>
        </div>
    )
}

function BookedCar(props) {
    return (
        <div className="carInfo">
            <div className="selectedCar">
                <h5>Selected Car</h5>
                <div className="attribute">
                    <div className="attribute2">
                        Selected car will show up here
                    </div>
                    
                    <FeatherIcon icon="edit" className="icon"/> 
                    
                </div>
            </div>
            <div className="carGroup">
            <h5>Car Group</h5>
                <div className="attribute">
                    Car group shows up here when car is selected
                </div>
            </div>
            <div className="fuelType">
                <h5>Fuel Type</h5>
                <div className="attribute">
                    Fuel type shows up here when car is selected
                </div>
            </div>

        </div>
    )
}

export { BookedCar }

function BillCarAs(props) {
    return (
        <div className="carGroup">
            <h5>Bill car as</h5>
            <div className="attribute">
                <SelectCarGroup/>
            </div>
        </div>
    )
}

function StartingFuelAndMileage(props) {
    return (
        <div className="fuelAndMileageFields">
            <div className="startingLevel">
                <h5>Starting Mileage</h5>
                <InputField className="attribute" placeHolder="Starting Mileage Level in km"/>
            </div>
            <div className="startingLevel">
                <h5>Starting Fuel</h5>
                <InputField className="attribute" placeHolder="Starting Fuel Level in %"/>
            </div>
            <div className="startingLevel">
                <h5>Comments</h5>
                <TextArea className="attribute" placeHolder="Comments about the car's state"/> 
            </div>
        </div>
    )
}


function PickupReturnButtons(props) {
    return (
        <div className="pickupAndReturnButtons">
            <ButtonStyled title="Cancel" color="PurpleBtn" primary="false" className="buttonSmall"/>
            <ButtonStyled title="Save & Start" color="DarkBlueBtn" primary="true" className=""/>
        </div>
    )
}

export {PickupReturnButtons} 

function PickupComponent(props) {
    return (
        <div className="pickup">
            <PickupHeader/>
            <CheckCustomerInfo/>
            <BookedCar/>
            <BillCarAs/>
            <StartingFuelAndMileage/>
            <PickupReturnButtons/>
        </div>
    )
}


export default PickupComponent;