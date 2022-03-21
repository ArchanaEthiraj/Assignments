import React, { Component } from 'react'

export class Hide extends Component {
    state={
        fname:"",
        lname:"",
        age:"",
        submit:false,
        showage:false
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleChange=()=>{
        this.setState({submit:true})
    }
    handleClick=()=>{
        this.setState({showage:true})
    }
    handleSet=()=>{
        this.setState({fname:'',lname:'',age:''})
    }
  render() {
    return (
      <div>{!this.state.submit&&(
          <div className='border border-5 m-5 p-5 w-50 border-dark'>
          <form>
              <div className='col-12'>
                  <label>First Name: </label>
              <input type="text" className='form-control' name="fname" onChange={this.onChange} value={this.state.fname}></input>
              </div>
              <div className='col-12'>
                  <label>Last Name: </label>
                  <input type="text" className='form-control' name="lname" onChange={this.onChange} value={this.state.lname}></input>
              </div>
              <div className='col-12'>
                  <label>Age: </label>
                  <input type="number" className='form-control' name="age" onChange={this.onChange} value={this.state.age}></input>
              </div>
              <button className='btn btn-primary' onClick={this.handleChange}>Submit</button>
              <button className='btn btn-secondary' onClick={this.handleSet}>Reset</button>
          </form>
      </div>)}
      {this.state.submit &&(
        <div className='border border-4 border-dark m-5 p-5'>
        <div>Name: {this.state.fname}{this.state.lname}</div>
        <div>Age: {this.state.age}</div>
        <button className='btn btn-primary' onClick={this.handleClick}>Show Age</button>
      </div>)}
      {this.state.showage &&(
          <div className='border border-4 border-dark m-5 p-5'>
              <div>Age: {this.state.age}</div>
              </div>)}
      </div>
      
    )
  }
}

export default Hide