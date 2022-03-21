 import React, { Component } from 'react'

class Form extends Component {
  state={
    title:"",
    fname:"",
    lname:"",
    date:"",
    email:"",
    submit:false,
    password:"",
    confirmPassword:""
}
handleChange=(e)=>{
this.setState({[e.target.name]:e.target.value})
}
handleRegister=()=>{
  if(this.state.password === this.state.confirmPassword)
  this.setState({submit:true})
  else 
alert('Password should match')
}
handleReset=(e)=>{
this.setState({title:'',fname:'',lname:'',date:'',email:'',password:'',confirmPassword:''})
}
  render() {
    return (
      <div className='d-flex'>
        <div>{!this.state.submit && (
      <div className='w-50 m-3 p-3 rounded border border-5 border-dark'>
        <form className='row'>
          <div className='col-2'>
            <label className='form-label'>Title</label>
          <select className='form-select' name="title" onChange={this.handleChange} value={this.state.title}>
            <option></option>
            <option>Mr.</option>
            <option>Ms.</option>
          </select>
         </div>
          <div className='col-5'>
            <label className='form-label'>First Name</label>
            <input type="text" class="form-control" name="fname" onChange={this.handleChange} value={this.state.fname}></input>
          </div>
          <div className='col-5'>
            <label className='form-label'>Last Name</label>
            <input type="text" class="form-control" name="lname" onChange={this.handleChange} value={this.state.lname}></input>
          </div>
        <div className='col-6'>
              <label class="form-label">Date</label>
              <input type="date" class="form-control" name="date" onChange={this.handleChange} value={this.state.date}>
              </input></div>
            <div className="col-6">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" name="email" onChange={this.handleChange} value={this.state.email}></input>
          </div>
          <div class="col-6">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" name="password" onChange={this.handleChange} value={this.state.password}></input>
          </div>
          <div class="col-6">
            <label class="form-label">Confirm Password</label>
            <input type="password" class="form-control" name="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword}></input>
          </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label class="form-check-label" for="flexCheckDefault">Accept Terms and Conditions</label>
        </div>
        <button class="col-2 btn btn-primary" onClick={this.handleRegister}>Register</button>
        <button class="col-2 btn btn-secondary" onClick={this.handleReset}>Reset</button>
        </form></div>)}
        {this.state.submit &&(
        <div className='border border-4 border-dark m-5 p-5'>
        <div>Name: {this.state.title} {this.state.fname} {this.state.lname}</div>
        <div>Born Date: {this.state.date}</div>
        <div>Email ID: {this.state.email}</div>
      </div>)}
     </div>
     </div>
    )
  }
}

export default Form