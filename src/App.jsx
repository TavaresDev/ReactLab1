import React, { useState } from 'react'
import Greeting from './components/Greeting ';
import { Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  //Hooks - allow use of states in functional components
  const [name = 'you', setName] = useState();


  return (
    <Jumbotron className="text-center">
      <Container className="">
        <input
          type="text"
          onChange={({ target: { value } }) => setName(value)}
          placeholder="Enter your Name"
        />
      </Container>

      <Container>
        <Greeting name={name} />
      </Container>

    </Jumbotron>
  )
}

export default App
