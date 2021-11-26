import React from 'react';
import './booking.css';
import {InputField} from './inputField';
import SelectBox from './selectBoxes';
import { SelectCarGroup, SelectPaymentMethod } from './dropDowns';
import { PopupOneButton } from './popup';
import { useState } from 'react';
import './popup.css'
import ButtonStyled from './buttons/ColorButton';
import { COLORS } from '../values/colors';


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

function BookingLogistics(props) {
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
            <div className="rowLayout">
                <h5>Return</h5>
                <div className="location">
                    <InputField className="inputField" type="text" placeHolder="Select Location"/>
                </div>
                <div className="columnLayout">
                    <InputField className="inputField" type="date" placeHolder="Select Date"/>
                    <InputField className="inputField" type="time" placeHolder="Select Time"/>
                </div>
              
            </div>
        </div>
    )
}


function HorizontalLine() {
    return (
        <hr/>
    )
}

function CarGroup() {
    return (
        <div className="rowLayout">
            <h5>Car Group</h5>
            <SelectCarGroup/>
        </div>
    )
}

export {CarGroup}

function ExtraServices(props) {
    return (
        <div className="rowLayout">
            <h5>Extra Services</h5>
            <div className="extraServicesSelect">
                <div className="extraDriverSelect">
                    <SelectBox className="selectBox" type="checkbox" buttonText="Extra Driver"/>
                    <ButtonStyled title="Add Driver" className="buttonSmall"/>
                </div>
                <div className="extraMileageSelect">
                    <SelectBox className="selectBox" type="checkbox" buttonText="Extra Mileage"/>
                    <InputField className="inputField" type="text" placeHolder="Enter Extra Mileage"/>
                </div>
            </div>
        </div>
    )
}

function CustomerInformation(props) {
    return (
        <div className="rowLayout">
            <h5>Customer Information</h5>
  
            <div className="columnLayout">
                        <InputField className="inputField" type="text" placeHolder="Search Existing Customers"/>
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

function PaymentMethod(props) {
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
                            {props.deposit}
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Total:
                        </div>
                        <div className="inputField">
                            {props.totalAmount}
                        </div>
                    </div>
                </div>
        </div>
    )
}

function BookingButtons(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <ButtonStyled title="Delete Booking" className="buttonSmall"/>
            <ButtonStyled title="Cancel Booking" className="buttonSmall"/>
            <ButtonStyled title="Confirm Booking" onClick={() => setButtonPopup(true)}/>
            <PopupOneButton className="popupRed" buttonCenter="OK" trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <p>here's the icon</p>
                    <p>here's some text about what you just did</p>
                    <p>here's how to move on</p>
            </PopupOneButton>
        </div>
       
    )
}

function Booking(props) {
    return (
        <div className = "booking">
            
            <BookingHeader />
            <BookingLogistics />
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

