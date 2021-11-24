import React from 'react';
import './navigationButtons.css';
import '../../index.css';

const NavButtons = (props) => {

    return ( 
        <div className="navButtons">
            <div className="button">
                <h4> { props.navButtonOne } </h4>
            </div>
            <div className="button">
                <h4> { props.navButtonTwo } </h4>
            </div>
            <div className="button">
                <h4> { props.navButtonThree } </h4>
            </div>
        </div>
    )
};

export default NavButtons;