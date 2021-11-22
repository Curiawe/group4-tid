import React from 'react';
import './pickupAndReturn.css';
import './booking.css';
import '../../index.css';
import InputField from './inputField';
import SelectBox from './selectBoxes';

function PickupHeader(props) {
    return (
        <div className="pickupHeader">
            <div className="title">
                <h1>Booking ID:</h1>
            </div>
        </div>
    )
}

function CheckCustomerInfo(props) {
    return (
        <div className="info">
            <div className="attributeType">
            Customer Information:
            </div>
            <div className="attribute">
                BUTTON HERE
            </div>
        </div>
    )
}

function BookedCar(props) {
    return (
        <div className="carInfo">
            <div className="selectedCar">
                <div className="attributeType">
                Selected Car:
                </div>
                <div className="attribute">
                    <div className="attribute2">
                        Selected car will show up here
                    </div>
                    <div className="icon">
                    Icon here
                    </div>
                </div>
            </div>
            <div className="carGroup">
                <div className="attributeType">
                Car Group:
                </div>
                <div className="attribute">
                    Car group shows up here when car is selected
                </div>
            </div>
            <div className="fuelType">
                <div className="attributeType">
                Fuel Type:
                </div>
                <div className="attribute">
                    Fuel type shows up here when car is selected
                </div>
            </div>

        </div>
    )
}

export { BookedCar }

function StartingFuelAndMileage(props) {
    return (
        <div className="fuelAndMileageFields">
            <div className="startingLevel">
                <div className="attributeType">
                Starting Mileage:
                </div>
                <InputField className="attribute" placeHolder="Starting Mileage Level in km"/>
            </div>
            <div className="startingLevel">
                <div className="attributeType">
                Starting Fuel:
                </div>
                <InputField className="attribute" placeHolder="Starting Fuel Level in %"/>
            </div>
            <div className="startingLevel">
                <div className="attributeType">
                Comments:
                </div>
                <div className="attribute">
                    <form>
                        <textarea placeholder="Write any comments about the car's state here"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

function BillCarAs(props) {
    return (
        <div className="carGroup">
            <div className="attributeType">
            Bill car as:
            </div>
            <div className="attribute">
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

function Pickup(props) {
    return (
        <div className="pickup">
            <PickupHeader/>
            <CheckCustomerInfo/>
            <BookedCar/>
            <BillCarAs/>
            <StartingFuelAndMileage/>
            <Buttons/>
        </div>
    )
}


export default Pickup;