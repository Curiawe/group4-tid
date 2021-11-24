import React from 'react';

const SelectCarGroup = () => {

    return (
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
    )
}

const SelectPaymentMethod = () => {
    return (
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
    )
}

export { SelectCarGroup, SelectPaymentMethod }