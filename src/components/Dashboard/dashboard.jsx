import React from "react";
import axios from "axios";
import {Overview} from "../Overview/overview"
import {Register} from "../Register/register"

export default class Dashboard extends React.Component {
    state={}
    render(){
        return <div>
            <div className="footer">
            <button type="button" className="button" onClick={this.handleLogin}>Register User</button>
            </div>
            <div className="footer">
            <button type="button" className="button" onClick={this.handleLogin}>User Overview</button>
            </div>
        </div>
    }
}