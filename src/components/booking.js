import React from 'react';
import './booking.css';
import {InputField} from './inputField';
import SelectBox from './selectBoxes';
import { SelectCarGroup, SelectPaymentMethod } from './dropDowns';
import { PopupOneButton } from './popup';
import { useState } from 'react';
import './popup.css'
import ButtonStyled from './buttons/ColorButton';
import Pages from '../pages/Pages';
import Popup from 'reactjs-popup';

/* This is the page header */ 
function BookingHeader() {
    return (
        <div className="header">
            <div className="title">
                <h1>New Booking</h1>
            </div>
            <div className="bookingNumber">
                <p>Booking ID:</p>
            </div>
        </div>
    )
}

/* Pickup information */
function Pickup() {
    return (
        <div>
            <div className="rowLayout">
                <h5>Pick-up</h5>
             
                <div className="location">
                    <InputField className="inputField" type="text" placeHolder="Select Location"/>
                    <SelectBox className="selectBox" type="checkbox" buttonText="Walk-in"/>
                </div>
                <div className=".columnLayout">
                    <InputField className="inputField" type="date" placeHolder="Select Date"/>
                    <InputField className="inputField" type="time" placeHolder="Select Time"/>
                </div>
            
            </div>
        </div>
    )
}

/* Return information */
function Return() {
    return (
        <div>
            <div className="rowLayout">
                <h5>Return</h5>
             
                <div className="location">
                    <InputField className="inputField" type="text" placeHolder="Select Location"/>
                    
                </div>
                <div className=".columnLayout">
                    <InputField className="inputField" type="date" placeHolder="Select Date"/>
                    <InputField className="inputField" type="time" placeHolder="Select Time"/>
                </div>
            
            </div>
        </div>
    )
}

/* Horizontal line that divides the components */
function HorizontalLine() {
    return (
        <hr/>
    )
}

/* This is where the car group is selected */
function CarGroup() {
    return (
        <div className="rowLayout">
            <h5>Car Group</h5>
            <SelectCarGroup/>
        </div>
    )
}

export {CarGroup}

/* Here, the extra services is selected */
function ExtraServices(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    
    return (
        <div className="rowLayout">
            <h5>Extra Services</h5>
            <div className="extraServicesSelect">
                <div className="extraDriverSelect">
                    <SelectBox className="selectBox" type="checkbox" buttonText="Extra Driver"/>
                    <ButtonStyled link = {Pages.Home} title="Add Extra Driver" color="LightBlueBtn" primary="true" className="buttonSmall"/>
                    
                </div>
                <div className="extraMileageSelect">
                    <SelectBox className="selectBox" type="checkbox" buttonText="Extra Mileage"/>
                    <InputField className="inputField" type="text" placeHolder="Enter Extra Mileage"/>
                </div>
            </div>
        </div>
    )
}

/* This is where the information about the customer is registered */
function CustomerInformation() {
    return (
        <div className="rowLayout">
            <h5>Customer Information</h5>
            <div className="searchExisting">
            <ButtonStyled link = {Pages.Schedule} title="Search Existing" color="LightBlueBtn" primary="true" className="buttonSmall"/>
            </div>
            <div className="driverInfo">
                <InputField className="inputField" type="text" placeHolder="Driver's Name"/>
                <InputField className="inputField" type="address" placeHolder="Driver's Address"/>
                <InputField className="inputField" type="tel" placeHolder="Driver's Phone Number"/>
                <InputField className="inputField" type="email" placeHolder="Driver's Email Address"/>
                <InputField className="inputField" type="date" placeHolder="Driver's Date of Birth"/>
                <InputField className="inputField" type="text" placeHolder="Driver's License ID"/>
                <InputField className="inputField" type="date" placeHolder="Licence Issue Date"/>
                <InputField className="inputField" type="date" placeHolder="License Expiration Date"/>
            </div>
        </div>
    
    )
}

/* This is where the payment method is selected */
function PaymentMethod() {
    return (
        <div className="rowLayout">
            <h5>Payment</h5>
                <div className="payment">
                    <div className="info">
                        <div className="infoType">
                        Payment Method:
                        </div>
                        <SelectPaymentMethod/>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Deposit:
                        </div>
                        <div className="inputField">
                            deposit
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Total:
                        </div>
                        <div className="inputField">
                            total
                        </div>
                    </div>
                </div>
        </div>
    )
}

/* These are the buttons to either cancel, delete or confirm the booking */
function BookingButtons() {
    return (
        <div className="threeBtns">
            <div className="stackedBtns">
            <ButtonStyled link = {Pages.Schedule} title="Delete Booking" color="DarkRedBtn" primary="false" className="buttonSmall"/>
            <ButtonStyled link = {Pages.BookingLandingPage} title="Cancel Booking" color="PurpleBtn" primary="false" className="buttonSmall"/>
            </div>
            <div className="finishBtn">
            <ButtonStyled link = {Pages.Schedule} title="Confirm Booking" color="DarkBlueBtn" primary="true" className="buttonLarge" />
            </div>
            
        </div>
       
    )
}

/* This is the final booking component */
function Booking() {
    return (
        <div className = "booking">
            
            <BookingHeader />
            <Pickup />
            <Return/>
            <HorizontalLine/>
            <CarGroup/>
            <ExtraServices/>
            <HorizontalLine/>
            <CustomerInformation/>
            <HorizontalLine/>
            <PaymentMethod/>
            <BookingButtons/>

            </div>
    );
  }

export default Booking;

