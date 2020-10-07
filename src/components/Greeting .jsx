import React from 'react'

const Greeting  = props => {
    const {name} = props

    return (
        <div>
        
            <h1 className="my-5"> Hey {name}, Welcome to my page  </h1>

        </div>
    )
}


export default Greeting 

