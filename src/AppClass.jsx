import React, { Component } from 'react'
import Counter from './components/Counter'
import CounterFunc from './components/CounterFunc'


//study on classes, to understand state

export default class AppClass extends Component {

    constructor() {
        super()
        this.state = {
            message: 'welcome '
        }
    }

    changeMessage() {
        this.setState({
            message: 'thanks'
        })
    }

    render() {
        return (
            <>
                {/* <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={() => this.changeMessage()}> subscribe</button>
                </div> */}
                <div>
                    <Counter />

                    <CounterFunc/>

                </div>
            </>
        )
    }
}
