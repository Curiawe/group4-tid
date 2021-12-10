import React from 'react';
import './booking.css';
import { CARGROUPS } from '../data/carGroups'; 
import { LOCATIONS } from '../data/locations';

const SelectCarGroup = (props) => {
    const groups = [
        CARGROUPS[0][0],
        CARGROUPS[1][0],
        CARGROUPS[2][0],
        CARGROUPS[3][0],
        CARGROUPS[4][0],
        CARGROUPS[5][0],
        CARGROUPS[6][0],
        CARGROUPS[7][0],
        CARGROUPS[8][0]  
    ]

    return (
        <div className="dropDown">
            <select defaultValue={'Select Car Group'} onChange={props.onChange}>
                <option value="Select Car Group" disabled>Select Car Group</option>
                <option value={groups[0]}>{groups[0]}</option>
                <option value={groups[1]}>{groups[1]}</option>
                <option value={groups[2]}>{groups[2]}</option>
                <option value={groups[3]}>{groups[3]}</option>
                <option value={groups[4]}>{groups[4]}</option>
                <option value={groups[5]}>{groups[5]}</option>
                <option value={groups[6]}>{groups[6]}</option>
                <option value={groups[7]}>{groups[7]}</option>
                <option value={groups[8]}>{groups[8]}</option>
            </select>
        </div>
    )
}

const SelectPaymentMethod = (props) => {
    return (
        <div className="dropDown">
            <select defaultValue={'Select Payment Method'} onChange={props.onChange}>
                <option value="Select Payment Method" disabled>Select Payment Method</option>
                <option value="Apple Pay">Apple Pay</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="MobilePay">MobilePay</option>
                <option value="PayPal">PayPal</option>
            </select>
        </div>
    )
}

const SelectLocation = (props) => {

    const locations = LOCATIONS

    return (
        <div className="dropDown">
            <select defaultValue={'Select Location'} onChange={props.onChange}>
                <option value="Select Location" disabled>Select Location</option>
                <option value={locations[0].Location}>{locations[0].Location}</option>
                <option value={locations[1].Location}>{locations[1].Location}</option>
                <option value={locations[2].Location}>{locations[2].Location}</option>
                <option value={locations[3].Location}>{locations[3].Location}</option>
                <option value={locations[4].Location}>{locations[4].Location}</option>
                <option value={locations[5].Location}>{locations[5].Location}</option>
                <option value={locations[6].Location}>{locations[6].Location}</option>
                <option value={locations[7].Location}>{locations[7].Location}</option>
            </select>
        </div>
    )
}

const CarState = (props) => {

    return (
        <div className="dropDown">
            <select defaultValue={'Select Car State'} onChange={props.onChange}>
                <option value="Select Car State" disabled>Select Car State</option>
                <option value="Ready">Ready</option>
                <option value="Rented">Rented</option>
                <option value="Returned">Returned</option>
                <option value="Transfer">Transfer</option>
                <option value="Unaivailable">Unaivailable</option>
            </select>
        </div>
    )
}

export { SelectCarGroup, SelectPaymentMethod, SelectLocation, CarState }