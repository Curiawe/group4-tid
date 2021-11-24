import React from 'react';
import './booking.css';
import '../../index.css';

/* Selectboxes for input forms. Set className for the right styling and both the type (either radio or checkbox) and the 
that describes what the button does*/
const SelectBox = (props) => {
    
    return ( 
        <div className={props.className}>
            <form>
                <label>
                    <input type={props.type} value={props.buttonText} checked={false}/>
                    {props.buttonText}
                </label>
            </form>
        </div>

    )

}

export default SelectBox;