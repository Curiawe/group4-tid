import React from 'react';
import './booking.css';
import '../../index.css';
import InputField from './inputField';
import SelectBox from './selectBoxes';

function BookingHeader(props) {
    return (
        <div className="bookingHeader">
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
            <div className="pick-up">
                <h5>Pick-up</h5>
                <div className="location">
                    <div className="locationForm">
                        <InputField className="inputField" placeHolder="Select Location"/>
                    </div>
    
                    <SelectBox className="radioButton" type="radio" buttonText="Walk-in"/>
                  
                </div>
                <div className="dateAndTime">
                    <InputField className="inputField"  placeHolder="Select Date"/>
                    <InputField className="inputField"  placeHolder="Select Time"/>
                </div>
            </div>
            <div className="return">
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

function SelectCarGroup(props) {
    return (
        <div className="carGroup">
            <h5>Car Group</h5>
            <div className="dropDown">
                <select>
                    <option value="A – Small">A – Small</option>
                    <option value="B – Medium">B – Medium</option>
                    <option value="C – Large">C – Large</option>
                    <option value="D – X-Large">D – X-Large</option>
                    <option value="E – Family">E – Family</option>
                    <option value="F – Business">F – Business</option>
                    <option value="G – Station">G – Station</option>
                    <option value="H – Automatic">H – Automatic</option>
                    <option value="I – Small Automatic">I – Small Automatic</option>
                </select>
            </div>
        </div>
    )
}

function ExtraServices(props) {
    return (
        <div className="extraServices">
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
        <div className="customerInfo">
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
        <div className="paymentMethod">
            <h5>Payment</h5>
                <div className="payment">
                    <div className="info">
                        <div className="infoType">
                        Payment Method:
                        </div>
                        <div className="dropDown">
                        <select>
                            <option value="Select Payment Method">Select Payment Method</option>
                            <option value="Apple Pay">Apple Pay</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="MobilePay">MobilePay</option>
                            <option value="PayPal">PayPal</option>
                        </select>
                        </div>
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
    return (
        <div>
            buttons go here somewhere
        </div>
    )
}


function Booking(props) {
    return (
        <div className = "booking">
            <BookingHeader />
            <BookingLogistics />
            <HorizontalLine/>
            <SelectCarGroup/>
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

