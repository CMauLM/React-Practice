import React from 'react'
import Button from './Button'
import Input from './Input'

const Header = (props) => {
    return(
        <div className='card'>
            <h1>To Do List</h1>
            <Input
                inputHandler={props.inputHandler}
                inputValue={props.inputValue}
            />
            <Button 
                clickHandler={props.clickHandler}>
                    Add
            </Button>
        </div>
    )
}

export default Header