import React, { Component } from 'react'
import Vote from './Vote';
import Form from './Form';
import Radio from './Validation';
import Counts from './Counts';
export class App extends Component {
  render() {
    return (
      <div>
        <h1>Vote</h1>
        <Vote title="C"/>
        <Vote title="C++"/>
        <Vote title="Java"/>
        <Vote title="Python"/>
        <Form/>
        <Radio/>
        <Counts/>
      </div>
    )
  }
}

export default App