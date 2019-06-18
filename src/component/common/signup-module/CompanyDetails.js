/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import {FormControl, FormGroup} from "react-bootstrap";
import FormLabel from "react-bootstrap/FormLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker/es";
import Button from "react-bootstrap/Button";
import ModalBody from "react-bootstrap/ModalBody";
import ApiAction from "../../../actions/ApiAction";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

class CompanyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            cin: "",
            city: "",
            state: "",
            website: "",
            contact: "",
            password: "",
            cnfPassword: "",
            errors: []
        }

    }

    render() {
        let {name, contact, cin, password, cnfPassword, city, state, website} = this.state;
        return (
            <div>
                {/*<ModalHeader style={{borderBottom: "none", paddingLeft: "10%", paddingRight: "10%", paddingTop: "8%"}}*/}
                {/*             closeButton>*/}
                {/*    <ModalTitle>Company Details</ModalTitle>*/}
                {/*</ModalHeader>*/}
                {/*<ModalBody style={{paddingLeft: "10%", paddingRight: "10%"}}>*/}
                {/*    {this.state.errors.length > 0 ? this.renderError() : ""}*/}
                <div className="pt-3 pb-3">
                    <h4>Company Details</h4>
                </div>
                <Form>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <FormGroup>
                                <FormLabel className="">CIN</FormLabel>
                                <FormControl type="text" name="cin" placeholder="CIN" value={cin}
                                             onChange={this.updateCIN} required/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className="required">Company Name</FormLabel>
                                <Form.Control type="text" name="name" placeholder="Name" value={name}
                                              onChange={this.updateName}
                                              required/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Contact Number</FormLabel>
                                <Form.Control type="number" name="contact" placeholder="Contact" value={contact}
                                              onChange={this.updateContact}
                                              required/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Website</FormLabel>
                                <Form.Control type="text" name="website" placeholder="www.company.com"
                                              value={website}
                                              onChange={this.updateWebsite}/>
                            </FormGroup>

                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/*<FormGroup>*/}
                            {/*    <FormLabel>Course</FormLabel>*/}
                            {/*    <FormControl type="text" name="course" placeholder="ex. BTech, BSc, B.Com"*/}
                            {/*                 value={course} onChange={this.updateCourse}/>*/}
                            {/*</FormGroup>*/}
                            {/*<FormGroup>*/}
                            {/*    <FormLabel>University/College</FormLabel>*/}
                            {/*    <FormControl type="text" name="college" placeholder="University/College"*/}
                            {/*                 value={college} onChange={this.updateCollege}/>*/}
                            {/*</FormGroup>*/}
                            <FormGroup>
                                <FormLabel>City</FormLabel>
                                <FormControl type="text" name="city" placeholder="City" value={city}
                                             onChange={this.updateCity}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>State</FormLabel>
                                <FormControl type="text" name="state" placeholder="State" value={state}
                                             onChange={this.updateState}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className="required">Password</FormLabel>
                                <FormControl type="password" name="password" placeholder="Password"
                                             value={password} onChange={this.updatePassword}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className="required">Confirm Password</FormLabel>
                                <FormControl type="password" name="confirm-password" placeholder="Confirm Password"
                                             value={cnfPassword} onChange={this.updateConfPassword}/>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <FormGroup className="submit-button-wrapper">
                                <Button className="border-dark" onClick={this.submitDetails}>Submit Details</Button>
                            </FormGroup>
                        </div>
                    </div>
                </Form>
                {/*</ModalBody>*/}
            </div>
        );
    }

    renderError() {
        const errors = this.state.errors.map((error, key) => {
            return (
                <li key={key}>{error}</li>
            );
        });
        return (
            <div className="error-wrapper" style={{color: "red"}}>
                <ul>
                    {errors}
                </ul>
            </div>
        );
    }

    updateName = (event) => {
        if (event.target.name == "name") {
            this.setState({name: event.target.value});
        }
    }

    updateCIN = (event) => {
        if (event.target.name == "cin") {
            this.setState({cin: event.target.value});
        }
    }

    updateContact = (event) => {
        if (event.target.name == "contact") {
            this.setState({contact: event.target.value});
        }
    }

    updateWebsite = (event) => {
        if (event.target.name == "website") {
            this.setState({website: event.target.value});
        }
    }

    updateCity = (event) => {
        if (event.target.name == "city") {
            this.setState({city: event.target.value});
        }
    }

    updateState = (event) => {
        if (event.target.name == "state") {
            this.setState({state: event.target.value});
        }
    }

    updatePassword = (event) => {
        if (event.target.name == "password") {
            this.setState({password: event.target.value});
        }
    }

    updateConfPassword = (event) => {
        if (event.target.name == "confirm-password") {
            this.setState({cnfPassword: event.target.value});
        }
    }

    checkFormValidity() {
        let result = true;
        let message = [];
        // if (this.state.cin.length < 1) {
        //     result = false;
        //     message.push("CIN required!");
        // }
        if (this.state.name.length < 1) {
            result = false;
            message.push("Name required!");
        }
        if (this.state.password.length < 1) {
            result = false;
            message.push("Password should be more than 6 character!");
        }
        if (this.state.cnfPassword != this.state.password) {
            result = false;
            message.push("Password didn't match!");
        }
        this.setState({errors: message});
        return result;
    }

    submitDetails = () => {
        if (this.checkFormValidity()) {
            let company = {
                cin: this.state.cin,
                name: this.state.name,
                contact: {
                    email: this.props.email,
                    mobile: this.state.contact,
                    address: {
                        street: "",
                        city: this.state.city,
                        state: this.state.state,
                        country: ""
                    }
                },
                password: this.state.password,
            };
            ApiAction.businessRegistration(company)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}

export default CompanyDetails;