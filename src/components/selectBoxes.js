import React from 'react';
import './booking.css';

/* Selectboxes for input forms. Set className for the right styling and both the type (either radio or checkbox) and the 
that describes what the button does*/


const SelectBox = (props) => {
    return (
        <div className={props.className}>
            <input id={props.buttonText} type={props.type} value={props.buttonText} />
            {props.buttonText}
        </div>
    )

}

export default SelectBox;