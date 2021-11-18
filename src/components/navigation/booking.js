import React from 'react';
import './booking.css';
import '../../index.css';

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
                        <div className="inputField">
                            <form>
                                <input placeholder="Select Location" />
                            </form>
                        </div>
                    </div>
                    <div className="radioButton">
                        <form>
                            <label>
                                <input type="radio" value="Walk-in" checked={false}/>
                                Walk-in
                            </label>
                        </form>
                    </div>

                </div>
                <div className="dateAndTime">
                    <div className="inputField">
                        <form>
                            <input placeholder="Select Date" />
                            <input placeholder="Select Time" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="return">
                <h5>Return</h5>
                <div className="location">
                    <div className="inputField">
                        <form>
                            <input placeholder="Select Location" />
                        </form>
                    </div>
                </div>
                <div className="dateAndTime">
                    <div className="inputField">
                        <form>
                            <input placeholder="Select Date" />
                            <input placeholder="Select Time" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HorizontalLine(props) {
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
                    <div className="selectBox">
                        <form>
                            <label>
                                <input type="checkbox" value="Extra Driver" checked={false}/>
                                Extra Driver
                            </label>
                        </form>
                    </div>
                    <div className="AddDriverBtn"> ADD DRIVER BTN </div>
                </div>
                <div className="extraMileageSelect">
                    <div className="selectBox">
                        <form>
                            <label>
                                <input type="checkbox" value="Extra Mileage" checked={false}/>
                                Extra Mileage
                            </label>
                        </form>
                    </div>
                    <div className="inputField">
                        <form>
                            <input placeholder="Extra Mileage" />
                        </form>
                    </div>
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
                        <form>
                            <input placeholder="Search Existing" />
                        </form>
                    </div>
                    <div className="customerInfoInput">
                    <div className="info">
                        <div className="infoType">
                        Name:
                        </div>
                        <div className="inputField">
                            <form>
                                <input placeholder="Driver name"/>
                            </form>
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Address:
                        </div>
                        <div className="inputField">
                            <form>
                                <input placeholder="Driver address"/>
                            </form>
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Phone:
                        </div>
                        <div className="inputField">
                            <form>
                                <input placeholder="Driver phone"/>
                            </form>
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Email:
                        </div>
                        <div className="inputField">
                            <form>
                                <input placeholder="Driver email"/>
                            </form>
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Date of Birth:
                        </div>
                        <div className="inputField">
                            <form>
                                <input placeholder="Select Date"/>
                            </form>
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        License ID:
                        </div>
                        <div className="inputField">
                            <form>
                                <input placeholder="Driver License ID"/>
                            </form>
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        License Issued:
                        </div>
                        <div className="inputField">
                            <form>
                                <input placeholder="Select Date"/>
                            </form>
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        License Expiration:
                        </div>
                        <div className="inputField">
                            <form>
                                <input placeholder="Select Date"/>
                            </form>
                        </div>
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
                            deposit here
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoType">
                        Total:
                        </div>
                        <div className="inputField">
                            total amount here
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

