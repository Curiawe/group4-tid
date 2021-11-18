import React from 'react';
import { BookedCar } from './pickup.js';
import './navigationButtons.css';
import './booking.css';
import '../../index.css';
import './pickupAndReturn.css';

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
                <div className="onTime">
                    <form>
                        <label>
                            <input type="radio" value="On Time" checked={false}/>
                            On Time
                        </label>
                    </form>
                </div>

                
                <div className="lateBy">
                    <form>
                        <label>
                            <input type="radio" value="Late by" checked={false}/>
                            Late by
                        </label>
                    </form>
                    <div className="inputFieldSmall">
                        <form>
                            <input placeholder="km" type="number"/>
                        </form>
                        km
                    </div>
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
                    <div className="inputFieldSmall">
                        <form>
                            <input placeholder="km"/>
                        </form>
                        km
                    </div>
                    <div className="selectBox">
                        <form>
                            <label>
                                <input type="checkbox" value="Above Limit" checked={false}/>
                                Above Limit
                            </label>
                        </form>
                    </div>
                </div>
            <div className="attributeType">
            Fuel Level:
            </div>
            <div className="attribute4">
                <div className="inputFieldSmall">
                    <form>
                        <input placeholder="%" />
                    </form>
                    % 
                </div>
                <div className="selectBox">
                    <form>
                        <label>
                            <input type="checkbox" value="Below Limit" checked={false}/>
                            Below Limit
                        </label>
                    </form>
                </div>
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

function Return(props) {
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


export default Return;