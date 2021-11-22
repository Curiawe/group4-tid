import React from 'react';
import './navigationButtons.css';
import '../../index.css';

const NavButtons = (props) => {
    const buttonOne = props.buttonOne;
    const buttonTwo = props.buttonTwo;
    const buttonThree = props.buttonThree;
    
    return ( 
        <div className="navButtons">
            <div className="button">
                <h4> { buttonOne } </h4>
            </div>
            <div className="button">
                <h4> { buttonTwo } </h4>
            </div>
            <div className="button">
                <h4> { buttonThree } </h4>
            </div>
        </div>
    )
};

export default NavButtons;