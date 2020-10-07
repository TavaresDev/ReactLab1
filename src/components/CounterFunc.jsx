import React, {useState} from 'react'

const CounterFunc = () => {
    //hooks are functions
    const [count, setCount] = useState(0) 

    // only call hooks on the top level - dont call inside loops or nested functions
    // only call hooks from react functions - dont call it from regular JS functions 

    return (
        <div>
            {/* <button onClick={setCount(count + 1)}> Count {count} </button> */}
            {/* //arrou version */}
            <button onClick={() => setCount(count + 1)}> Count {count} </button>
        </div>
    )
}

export default CounterFunc
