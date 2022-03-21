import React, { Component } from 'react'
import Welcome from './Welcome';
import Hide from './Hide'
class App extends Component {
  render() {
    return (
      <div>
        <Welcome/>
        <Hide/>
      </div>
    )
  }
}

export default App