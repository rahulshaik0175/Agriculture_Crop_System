
import React, { Component } from 'react'
import axios from 'axios'
export class FarmerSignup extends Component {
   
    constructor(props){
        super(props)

        this.state = {
            userName: '',
            emailId: '',
            password:'',
            isFarmerCreated: false
    }
    }

    userNameHandler=(e) =>{
        const userName = document.getElementById("userName").value
        this.setState({
            userName: e.target.value
        })
        console.log("userName: "+userName)
    }
    emailIdHandler=(e) =>{
        const  emailId = document.getElementById(" emailId").value
        this.setState({
            emailId: e.target.value
        })
        console.log("emailId: "+emailId)
    }

    passwordHandler=(e) => {
        const  password = document.getElementById("password").value
        this.setState({
            password: e.target.value
        })
        console.log(" password: "+password)
    }
    
    registerHandler=(event) => {
        event.preventDefault();

    const newFarmer = {
        userName: this.state.userName,
        email: this.state.emailId,
        password:this.state.password,
        roles:["farmer"]
    };

    console.log(newFarmer)

       axios.post('http://localhost:8094/addfarmer', newFarmer)
       .then(response => response)
       .catch(error => console.log(error));

            window.alert("Your registration is confirmed.");
           {/*} this.setState({
            userName: '',
            emailId: '',
            password: '',
            isFarmerCreated: true
        });*/}
        
    };
    
    render() {
        return (
            <div className="container">
                <div className="app-wrapper">
                    <div>
               <h1 className="title">Farmer Registration</h1>
               </div>
             
               <div className="name">
                <label > UserName: 
                <input type="text" name="userName" id="userName"
                value={this.state.userName} onChange={this.userNameHandler}></input></label>
                 <br></br> <br></br>

                <label> emailId: 
                <input  type="text" name="" id="emailId"
                value={this.state.emailId} onChange={this.emailIdHandler}></input></label>
                 <br></br> <br></br>

                <label > Password: 
                <input  type="password" name="password" id="password"
                value={this.state.password} onChange={this.passwordHandler}></input></label>
                <br></br> 
                </div>
                    <button onClick={this.registerHandler}>
                        Register
                    </button> 
            </div>
            </div>
        )
    }
}

export default FarmerSignup





