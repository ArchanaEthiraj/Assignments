import React, {Component} from "react";
import Props from "./Props";
import Employee from "./Employee";
import Hello from "./Hello";
import Contact from './Contact';
import Count from './Count';
import Print from './Print';
import Register from "./Register";
import Student from './Student';
class App extends Component{
  state={
    title:"Beast"
  }
  render(){
    return(
      <div>
        <Props Song={this.state.title} />
        <Employee name="Raj" salary={21000}/>
        <Hello/>
        <Contact/>
        <Count/>
        <Print/>
        <Register/>
        <Student/>
      </div>
    )
  }
}
export default App;