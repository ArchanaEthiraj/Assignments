import React, { Component } from 'react'

export class Vote extends Component {
  state={
    count:0,
  }
  handleC=()=>{this.setState({count:this.state.count+1})}
   render() {
    return (
      <div className='m-3 p-3 justify-content-center'>
      {this.props.title}
      <span>{this.state.count}</span>
      <button className='btn btn-primary' onClick={this.handleC}>Count</button>
      </div>
    )
  }
}

export default Vote