import React from 'react';
import './navigationButtons.css';
import '../../index.css';


function NavigationButtons(props) {
    return (
        <div className="navButtons">
            <div className="button">
                <h4>Rental Operations</h4>
            </div>
            <div className="button">
                <h4>Rental Management</h4>
            </div>
            <div className="button">
                <h4>Group Management</h4>
            </div>
        </div>
    )
}

export default NavigationButtons;