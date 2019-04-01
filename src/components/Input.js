import React from 'react';

const Input = (props) => {
    return(
        <input type='text' onChange={props.inputHandler} value={props.inputValue}/>
    )
}

export default Input