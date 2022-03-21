import React, { Component } from 'react'
class Welcome extends Component {
  render() {
    return (
      <div class="text-center m-3 p-3 "> 
          <div class="text-center"><h1>WELCOME!</h1></div>
          <div class="d-flex justify-content-center">
            <div>
          <div className='m-2'><h3>ALREADY REGISTERED?</h3><br/></div>
          <div className='m-2'><input type="text" placeholder='Email Address'></input><br/></div>
          <div className='m-2'><input type="text" placeholder='Password'></input><br/></div>
          <button class="btn btn-primary">SIGN IN</button>
          </div>
          <div className='border boder-4 border-solid border-dark'></div>
          <div>
          <div className='m-2'><h3>NEW CUSTOMER?</h3><br/></div>
          <div  className='m-2'><input type="text" placeholder='Email Address'></input><br/></div>
          <div  className='m-2'><input type="text" placeholder='Password'></input><br/></div>
          <button class="btn btn-warning">CREATE ACCOUNT</button>
          </div>
         </div>     
         </div>
    )
  }
}
export default Welcome