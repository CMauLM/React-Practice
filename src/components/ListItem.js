import React from 'react'
import Button from './Button'

const ListItem = (props) => {

    let {item, removeItemFromList} = props

    return (
        <div className='card'>
            {item}
            <div>
                <Button>
                    Ok
                </Button>
                <Button
                    clickHandler={removeItemFromList}>
                        Del
                </Button>
            </div>
        </div>
    )
}

export default ListItem