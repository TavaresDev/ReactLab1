import React, {useState} from 'react'
import Greeting from './components/Greeting ';

const App = () => {
  //Hooks - allow use of states in functional components
  const [name = 'you', setName] = useState();


  return (
    <div>
      <input 
        type="text"
        onChange={({target: {value}}) => setName(value)}
        placeholder="Enter your Name"
      />

      <Greeting name={name}/>

    </div>
  )
}

export default App
