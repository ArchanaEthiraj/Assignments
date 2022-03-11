import React, {Component} from 'react';
import './Contact.css'
class Contact extends Component{
    state={
        fname:'', lname:'', email:'', bnum:'', cname:'', jname:'', street:'', city:'', pstate:'', zip:'', country:'', topic:''
    }
    render(){
        return(
            <div className="act">
                <h1><center>Contact Us</center></h1>
                <div className='fl'>
                <div><label>First Name </label><br/>
                <input type = "text" value={this.state.fname}></input></div>
                <div><label>Last Name </label><br/>
                <input type = "text" value={this.state.lname}></input><br/></div>
                </div>
                <div className="f">
                    <div><label>Email </label><br/>
                <input type = "text" value={this.state.email}></input></div>
                <div><label>Business Phone </label><br/>
                <input type = "text" value={this.state.bnum}></input></div>
                </div>
                <div className='d'>
                <div><label>Company Name </label><br/>
                <input type = "text" value={this.state.cname}></input></div>
                <div><label>Job Title </label><br/>
                <input type = "text" value={this.state.jname}></input></div>
                </div>
                <div className='bb'><label>Street1</label><br/>
                <input type = "text" value={this.state.street}></input><br/></div>
                <div className='h'>
                    <div><label>City </label><br/>
                <input type = "text" value={this.state.city}></input></div>
                <div><label>State/Province </label><br/>
                <input type = "text" value={this.state.pstate}></input></div>
                </div>
                <div className='s'>
                    <div>
                <label>ZIP/Poastal code </label><br/>
                <input type = "text" value={this.state.zip}></input></div>
                <div><label>Country/Region </label><br/>
                <input type = "text" value={this.state.country}></input></div>
                </div>
                <div className='aa'><label>Topic </label><br/>
                <input type = "text" value={this.state.topic}></input></div>
                </div>
        )
    }
}
export default Contact;