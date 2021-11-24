import React from 'react';
import './booking.css';

/* Inputfields for input forms. Set className for the right styling and the placeHolder text */
const InputField = (props) => {
    
    return ( 
        <div className={props.className}>
            <form>
                <input placeHolder={props.placeHolder}/>
            </form>
        </div>
    )

}

export default InputField;