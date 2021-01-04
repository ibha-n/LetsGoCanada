import React from "react";
import axios from "axios";
import {Overview} from "../Overview/overview"
import {Register} from "../Register/register"

export default class Dashboard extends React.Component {
    state={}

    handleDashboardMenu = () =>{
        //Logic to naviagte to Overview & Register component
    }

    render(){
        return <div>
            <div className="footer">
            <button type="button" className="button" onClick={this.handleDashboardMenu}>Register User</button>
            </div>
            <div className="footer">
            <button type="button" className="button" onClick={this.handleDashboardMenu}>User Overview</button>
            </div>
        </div>
    }
}