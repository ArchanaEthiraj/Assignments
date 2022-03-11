import React, {Component} from 'react';
import './Count.css'
class Count extends Component{
    state={
        count : 0
    }   
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div>
                <h2>Count is : {this.state.count}</h2>
                <button class ="cnt" onClick={this.handleIncrement}>Increment</button>
                <button class = "ct"onClick={this.handleDecrement}>Decrement</button>
                </div>
        
        )
    }
}
export default Count;