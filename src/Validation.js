import React, { Component } from 'react'

export class Validation extends Component {
    state = {
        name: "",
        age: "",
        gender: "",
        source: "",
        destination: "",
        submit: false
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleRegister = () => {
        if(this.state.destination)
        this.setState({ submit: true })
        else
        alert('Destination should not be empty')
    }
    render() {
        return (
            <div className='d-flex'>
                <div>{!this.state.submit && (
                    <div className='border border-4 border-dark m-5 p-5'>
                        <form>
                            <div className='col-12'>
                                <label className='form-label'>Name of Passengers:</label>
                                <input type="text" className='form-control' name="name" onChange={this.handleChange} value={this.state.name}></input>
                            </div>
                            <div className='col-12'>
                                <label className='form-label'>Age:</label>
                                <input type="number" className='form-control' name="age" onChange={this.handleChange} value={this.state.age}></input>
                            </div>

                            <div name='gender' onChange={this.handleChange} value={this.state.gender}>
                                <label value={this.state.name}>Gender:</label>
                                <div className='form-check'>
                                    <input class="form-check-input" type="radio" names="flexRadioDefault" id="flexRadioDefault1" name='gender' onChange={this.handleChange} value="male"></input>
                                    <label class="form-check-label" for="flexRadioDefault1">Male</label>
                                </div>

                                <div className='form-check'>
                                    <input class="form-check-input" type="radio" names="flexRadioDefault" id="flexRadioDefault2" name='gender' onChange={this.handleChange} value="female"></input>
                                    <label class="form-check-label" for="flexRadioDefault2">Female</label>
                                </div>

                                <div className='form-check'>
                                    <input class="form-check-input" type="radio" names="flexRadioDefault" id="flexRadioDefault3" name='gender' onChange={this.handleChange} value="others"></input>
                                    <label class="form-check-label" for="flexRadioDefault3">Others</label>
                                </div>
                            </div>


                            <div className='col-12'><label>Source</label>
                                <select className='form-select' name="source" onChange={this.handleChange} value={this.state.source}>
                                    <option></option>
                                    <option>Chennai</option>
                                    <option>Bangalore</option>
                                    <option>Hyderabad</option>
                                </select>
                            </div>
                            <div className='col-12'><label>Destination</label>
                                <select className='form-select' name="destination" onChange={this.handleChange} value={this.state.destination}>
                                    <option></option>
                                    <option>Delhi</option>
                                    <option>Kolkata</option>
                                    <option>Simla</option>
                                </select>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">I Agree all Terms and Conditions</label>
                            </div>
                            <button className='btn btn-success col-5' onClick={this.handleRegister}>Submit</button>
                        </form>
                    </div>)}
                    {this.state.submit && (
                        <div className='border border-4 border-dark m-5 p-5'>
                            <div>Name: {this.state.name}</div>
                            <div>Age: {this.state.age}</div>
                            <div>Gender:{this.state.gender}</div>
                            <div>Source: {this.state.source}</div>
                            <div>Destination:{this.state.destination}</div>
                        </div>)}
                </div>
            </div>

        )
    }
}

export default Validation