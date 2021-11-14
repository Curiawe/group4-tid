import React from 'react';
import FeatherIcon from 'feather-icons-react';
import '../index.css';
import './booking.css';


function BookingHeader(props) {
    return (
        <div className="bookingHeader">
            <div className="title"><h1>
                New Booking
            </h1>
            </div>
            <div className="bookingNumber"><p>Booking ID:</p>
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
                    <form>
                        <input placeholder="Select Location" />
                    </form>
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
                    <form>
                        <input placeholder="Select Date" />
                        <input placeholder="Select Time" />
                    </form>
                </div>
            </div>
            <div className="return">
                <h5>Return</h5>
                <div className="location">
                    <div className="locationForm">
                        <form>
                            <input placeholder="Select Location" />
                        </form>
                </div>
                </div>
                <div className="dateAndTime">
                    <form>
                        <input placeholder="Select Date" />
                        <input placeholder="Select Time" />
                    </form>
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
            <div className="carGroupDropDown">
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

function Booking(props) {
    return (
        <div className = "booking">
            <BookingHeader />
            <BookingLogistics />
            <HorizontalLine/>
            <SelectCarGroup/>
            </div>
    );
  }

export default Booking;

