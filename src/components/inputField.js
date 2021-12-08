import React from 'react';
import './booking.css';

/* Inputfields for input forms. Set className for the right styling and the placeHolder text */
const InputField = (props) => {
    
    return ( 
        <div className={props.className}>
            <input type={props.type} onChange={props.onChange} name={props.placeHolder} required/> 
            <label> {props.placeHolder} </label>
        </div>
    )

}

const TextArea = (props) => {
    
    return ( 
        <div className={props.className}>
            <textarea name={props.placeHolder} onChange={props.onChange} required /> 
            <label> {props.placeHolder} </label>
        </div>
    )

}

export { InputField, TextArea };