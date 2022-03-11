import React, {Component} from "react";
import Contact from "./Contact";
import Student from "./Student";
import Register from './Register';
class App extends Component{
  render(){
    return(
      <div>
        <h2>Hello World</h2>
        <Contact/>
        <Register/>
        <Student/>
      </div>
    )
  }
}
export default App;