import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        // //setState has 2 parameters, second is a callback
        // this.setState({
        //     count: this.state.count + 1
        // },
        // //callback function
        // () => {console.log("callback value", this.state.count)}
        // )

        // // is bein called before the state is updated
        // console.log(this.state.count)
        
        
        // To update state on top of the previous
        // pass a func as an argument istead of passing an object
        //second param of this function is props
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        
        console.log(this.state.count)
    }
    
    
    render() {
        return (
            <div>
                count - {this.state.count}

                <button onClick={() =>  this.increment()} >Increment</button>
            </div>
        )
    }
}
