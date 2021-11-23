import React from 'react';
import './booking.css';
import '../../index.css';
import InputField from './inputField';
import SelectBox from './selectBoxes';
import { SelectCarGroup, SelectPaymentMethod } from './dropDowns';
import { PopupOneButton, PopupTwoButtons} from './popup';
import { useState } from 'react';
import './popup.css'

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
                    <InputField className="inputField" placeHolder="Select Location"/>
                    <SelectBox className="radioButton" type="radio" buttonText="Walk-in"/>
                </div>
                <div className="dateAndTime">
                    <InputField className="inputField"  placeHolder="Select Date"/>
                    <InputField className="inputField"  placeHolder="Select Time"/>
                </div>
            </div>
            <div className="rowLayout">
                <h5>Return</h5>
                <div className="location">
                    <InputField className="inputField" placeHolder="Select Location"/>
                </div>
                <div className="dateAndTime">
                    <InputField className="inputField" placeHolder="Select Date"/>
                    <InputField className="inputField" placeHolder="Select Time"/>
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
                    <div className="AddDriverBtn"> ADD DRIVER BTN </div>
                </div>
                <div className="extraMileageSelect">
                    <SelectBox className="selectBox" type="checkbox" buttonText="Extra Mileage"/>
                    <InputField className="inputField" placeHolder="Enter Extra Mileage"/>
                </div>
            </div>
        </div>
    )
}

function CustomerInformation(props) {
    return (
        <div className="rowLayout">
            <h5>Customer Information</h5>
            <div className="customerInfoFields">
                    <div className="searchBox">
                        <InputField className="inputField" placeHolder="Search Existing Customers"/>
                    </div>
                    <div className="customerInfoInput">
                    <div className="info">
                        <div className="infoType">
                        Name:
                        </div>
                        <InputField className="inputField" placeHolder="Driver's Name"/>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Address:
                        </div>
                        <InputField className="inputField" placeHolder="Driver's Address"/>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Phone:
                        </div>
                        <InputField className="inputField" placeHolder="Driver's Phone Number"/>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Email:
                        </div>
                        <InputField className="inputField" placeHolder="Driver's Email Address"/>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Date of Birth:
                        </div>
                        <InputField className="inputField" placeHolder="dd/mm/yy"/>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        License ID:
                        </div>
                        <InputField className="inputField" placeHolder="Driver's License ID"/>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        License Issued:
                        </div>
                        <InputField className="inputField" placeHolder="dd/mm/yy"/>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        License Expiration:
                        </div>
                        <InputField className="inputField" placeHolder="dd/mm/yy"/>
                    </div>
                </div>
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

function Buttons(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className="buttons">
            <button onClick={() => setButtonPopup(true)}>I'm a button</button>
            <PopupOneButton className="popupRed" buttonCenter="OK" trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <p>here's the icon</p>
                    <h3>here's some text about what you just did</h3>
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
            <Buttons/>

            </div>
    );
  }

export default Booking;

