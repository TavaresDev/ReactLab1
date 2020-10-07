import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Greeting  = (props) => {
    const {name} = props
    // const {state1, state2} = 
    //descontructing, force the props to exist
    // const [name, setName] = useState({});
    
    return (
        <div>
            
            <h3> Hey {name}, Welcome to my page  </h3>

        </div>
    )
}



export default Greeting 
