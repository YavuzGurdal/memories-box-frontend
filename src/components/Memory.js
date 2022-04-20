import React from 'react'

const Memory = ({ memory }) => { // HomeScreen den props la gonderilen memory'yi yakaliyorum
    return (
        <div>
            <h1>{memory.title}</h1>
        </div>
    )
}

export default Memory
