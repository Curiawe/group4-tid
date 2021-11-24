import React from 'react';
import './navigationButtons.css';
import { Link } from 'react-router-dom';

const NavButtons = (props) => {

    return ( 
        <div className="navButtons">
            <Link to={props.linkButtonOne} className="button"><h4>{props.textButtonOne}</h4></Link>
            <Link to={props.linkButtonTwo} className="button"><h4>{props.textButtonTwo}</h4></Link>
            <Link to={props.linkButtonThree} className="button"><h4>{props.textButtonThree}</h4></Link>

        </div>
    )
};

export default NavButtons;