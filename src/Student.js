import React, {Component} from 'react';
import './Student.css';
class Student extends Component{
    state={
        name : "Raj",
        age : 31
    }
    render(){
        return(
            <div>
                  <h2>The Name is : <span class = "name">{this.state.name}</span></h2>
                <h2>The Age is : <span class = "age">{this.state.age}</span></h2>
            </div>
        )
    }
}
export default Student;