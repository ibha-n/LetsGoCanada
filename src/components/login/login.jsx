
import React from "react";
import axios from "axios";
import {ReactComponent as Logo} from './img.svg';
import { BrowserRouter as Router,Switch,Route, Link} from "react-router-dom"
import {Dashboard} from '../Dashboard/dashboard'

export default class Login extends React.Component {

    state = {
        username: "",
        password: "",
        accessToken: "",
    }

    handleInputValues = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = () => {
        let loginObject = {};
        loginObject.username = this.state.username;
        loginObject.password = this.state.password;
        axios.post('https://lgcgatewayapi-stage.azurewebsites.net/api/Authorization/authenticate',loginObject)
            .then((response) => {
                const authData = response.data;
                const status = response.status;
                if(authData.message == "Ok" && authData.data.token != null && status == "200"){
                    console.log(" Logged in !")
                    this.setState({
                        accessToken: authData.data.token
                    })
                    //console.log(this.state.accessToken)
                    // <Register username={this.state.username}/>
                }
            })
        
        // logic to make that request to end point
        // sre those detials somewhere once i get a success message
 



        //access to username and password - YES
        // verify username and password
        // if success ? -> /dashboard
        // if !success ? -> display error message
    }
render(){
    return <div className="Main">
        <div className="header"> Login </div>
        <div className="content"> </div>
        <div className="image"> </div>
        <div><Logo /></div>
        
        
        <div className="form"></div>
        <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.handleInputValues} />
        </div>
        <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleInputValues}/>
        </div>
        <div className="footer">
            <button type="button" className="button" onClick={this.handleLogin}>Login</button>
        </div>
    </div>
    }
}