import {ReactComponent as img} from './img.svg';
import React from "react";
import axios from "axios";


export class Register extends React.Component {
state = {
    firstName: "",
    middleName: "",
    lastName: "",
    citizenshipId: "",
    dateOfBirth: "",
    addressLine1: "",
    city:"",
    province: "",
    countryId: "",
    postalCode: "",
    phone: "",
    passportNumber: "",
    keyWords: "",
    isCurrentStudent: "",
    email: "",
    firstLanguage: "",
    gender: "",
    maritaStatus: "",
    agentId: "",
    profileComplete: ""
}
handleSubmit = () => {
    let obj = this.state
    axios.post('https://lgcgatewayapi-stage.azurewebsites.net/api/applicant/setNewApplicant',obj)
        .then((response) => {
    const regData = response.data;
    const status = response.status;
    if(regData.message == "Ok" && regData.data.applicantID != null && status == "200"){
        console.log(" submitted")
       
    }  
    
})
}
handleInputValues = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
      

render(){
    return <div className="Main">
        <div className="header"> Register </div>
        <div className="content"> </div>
        <div className="image"> </div>
        <img src={img} />
        <div className="form">
            <div className="form-group">
                <label htmlFor="firstname">firstname</label>
                <input type="text" name="firstname" placeholder="firstname"onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="lastname">lastname</label>
                <input type="text" name="lastname" placeholder="lastname" onChange={this.handleInputValues}  />
            </div>
            <div className="form-group">
                <label htmlFor="middlename">Middlename</label>
                <input type="text" name="middlename" placeholder="middlename" onChange={this.handleInputValues}  />
            </div>
            <div className="form-group">
                <label htmlFor="citizenshipId"> citizenshipId </label>
                <input type="text" name="citizenshipId" placeholder="citizenshipId" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="text" name="dateOfBirth" placeholder="dateOfBirth" onChange={this.handleInputValues} /> 
            </div>
            <div className="form-group">
                <label htmlFor="addressLine1"> Address </label>
                <input type="text" name="addressLine1" placeholder="addressLine1" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="city"> City</label>
                <input type="text" name="city" placeholder="city" onChange={this.handleInputValues}  />
            </div>
            <div className="form-group">
                <label htmlFor="province"> Province</label>
                <input type="text" name="province" placeholder="province" onChange={this.handleInputValues}  />
            </div>
            <div className="form-group">
                <label htmlFor="countryId"> Country ID</label>
                <input type="text" name="countryId" placeholder="countryId" onChange={this.handleInputValues}  />
            </div>
            <div className="form-group">
                <label htmlFor="postalCode"> Postal Code</label>
                <input type="text" name="postalCode" placeholder="postalCode" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="phone"> Phone</label>
                <input type="text" name="phone" placeholder="phone" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="passportNumber"> Passport Number</label>
                <input type="text" name="passportNumber" placeholder="passportNumber" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="keyWords"> Keywords</label>
                <input type="text" name="keyWords" placeholder="keyWords" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="isCurrentStudent"> Current Student?</label>
                <input type="text" name="isCurrentStudent" placeholder="isCurrentStudent" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="email"> Email</label>
                <input type="email" name="email" placeholder="email" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="firstLanguage"> First Language</label>
                <input type="text" name="firstLanguage" placeholder="firstLanguage" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="gender"> Gender </label>
                <input type="text" name="gender" placeholder="gender" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="maritaStatus"> Marital Status</label>
                <input type="text" name="maritaStatus" placeholder="maritaStatus" onChange={this.handleInputValues}  />
            </div>
            <div className="form-group">
                <label htmlFor="agentId"> Agent ID</label>
                <input type="text" name="agentId" placeholder="agentId" onChange={this.handleInputValues} />
            </div>
            <div className="form-group">
                <label htmlFor="profileComplete"> Profile Complete</label>
                <input type="text" name="profileComplete" placeholder="profileComplete" onChange={this.handleInputValues} />
            </div>
            <div className="footer">
                <button type="button" className="button" onClick={this.handleSubmit}>Submit</button>  
            </div>
        </div>
    </div>
    
}}
