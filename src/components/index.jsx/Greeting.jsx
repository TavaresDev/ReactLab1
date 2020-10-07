import React from 'react'

const Greeting  = props => {
    const {name} = props

    return (
        <div>
        
            <h1 className="my-5"> Hey {name}! </h1>
            <h2> Welcome to my page!</h2>

        </div>
    )
}


export default Greeting 

