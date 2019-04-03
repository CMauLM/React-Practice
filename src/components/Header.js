import React from 'react'
import Button from './Button'
import Input from './Input'

const Header = (props) => {
    let {inputHandler, clickHandler, taskValue} = props
    return(
        <div className='card'>
            <h1>To Do List</h1>
            <Input
                inputHandler={inputHandler}
                taskValue={taskValue}
            />
            <Button 
                clickHandler={clickHandler}>
                    Add
            </Button>
        </div>
    )
}

export default Header