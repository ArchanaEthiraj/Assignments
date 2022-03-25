import React, { Component } from "react"; 
 
class Counts extends Component { 
  state = { 
    count: 0,
    count1:0 
  }; 
 
  handleChange = (e) => { 
    this.setState({ [e.target.name]: e.target.value }); 
  }; 
  handleIncrement = () => { 
    this.setState({count: Number(this.state.count) + Number(this.state.count1)}) 
  }
  handleDecrement = () => { 
    this.setState({count: Number(this.state.count) - Number(this.state.count1)}) 
  } 
  render() { 
    return ( 
      <div> 
        <label>Count : </label> 
        <span> {this.state.count} </span> 
        <div> 
          <input type="number" name="count1" value={this.state.count1} onChange={this.handleChange}></input> 
        </div> 
        <button class="btn btn-primary" onClick={this.handleIncrement}>Increament</button> 
        <button class="btn btn-warning" onClick={this.handleDecrement}>Decreament </button> 
      </div> 
    )
  } 
} 
 
export default Counts;