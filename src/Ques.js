import React, { Component } from 'react'

export class Ques extends Component {
state={
    showInfo:false 
}
    handleIncrease=(e)=>{
        this.setState({showInfo:!this.state.showInfo})
    }
  render() {
    return (
      <div className='border'>
          <div class="bg-white m-2 p-2 rounded">{this.props.title}
               <button className='button rounded-circle' onClick={this.handleIncrease}>{this.state.showInfo?'-':'+'}
               </button>
               {this.state.showInfo &&
               <div>{this.props.info}</div>}
               </div>
      </div>
    )
  }
}

export default Ques