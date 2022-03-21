import React, {Component} from 'react';
import './Register.css'
class Register extends Component{
    render(){
        return(
            <div className='reg'>
            <h1 className='fr'><center>Register new Account</center></h1>
            <div className='ab'>
                <div><input type="text" placeholder="First Name"></input></div>
                <div><input type="text" placeholder="Last Name"></input></div>
                </div> 
                <div className='cc'>
                    <input type="text" placeholder="Name"></input></div>
                <div className='dd'>
                    <input type="text" placeholder="City"></input></div>
                <div className='ee'>
                <input type="text" placeholder="Phone Number"></input>
                </div>
                <div className='ff'>
                <input type="email" placeholder="Email"></input></div>
                <button className='cr' onClick="submit">Create Account</button>
            </div>
        )
    }
}
export default Register; 