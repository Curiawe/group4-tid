import React from 'react';
import './booking.css';

/* Inputfields for input forms. Set className for the right styling and the placeHolder text */
const InputField = (props) => {
    
    return ( 
        <div className={props.className}>
                <input type={props.type} name={props.placeHolder} required/> 
                <label> {props.placeHolder} </label>
        </div>
    )

}

export default InputField;