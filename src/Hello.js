import React, { Component } from 'react'

export class Hello extends Component {
  state={
    name:"Welcome"
  }
  handleChange=()=>{
    if(this.state.name === 'Welcome'){
      this.setState({name:"Hello World!"})
    }
    else{
    this.setState({name:'Welcome'})
  }}
  render() {
    return (
      <div>{this.state.name}
       <button onClick={this.handleChange}>Change</button>
       </div>
    )
  }
}

export default Hello