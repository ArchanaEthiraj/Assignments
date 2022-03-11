import React, {Component} from "react";
import './sachin.css';
class Sachin extends Component{
    state={
        age:31,
        favourite_food:"noodles"
    }
    handleIncrementAge=()=>{
        this.setState({age:this.state.age+1})
    }
    handleDecrement=()=>{
        this.setState({age:this.state.age-1})
    }
    render(){
        return(
            <div>
                <h2 className='school'>Sachin</h2>
                <h2>The Age is {this.state.age}
                </h2>
                <p>Age: {this.state.age} my favourite food is {this.state.favourite_food}</p>
                <button onClick={this.handleIncrementAge}>Increment Age</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}
export default Sachin;