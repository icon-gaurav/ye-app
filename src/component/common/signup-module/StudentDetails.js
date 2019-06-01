import React from "react";
import ModalBody from "react-bootstrap/ModalBody";
import Form from "react-bootstrap/Form";
import {FormControl, FormGroup} from "react-bootstrap";
import FormLabel from "react-bootstrap/FormLabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import "../../../assets/stylesheet/UserDetails.css";
import ApiAction from "../../../actions/ApiAction";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";


class StudentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            email: "",
            dob: new Date(),
            gender: "",
            college: "",
            course: "",
            city: "",
            state: "",
            password: "",
            cnfPassword: "",
            errors: []
        };
        console.log(props);
    }

    render() {
        let {fName, lName, email, dob, college, course, city, state, password, cnfPassword} = this.state;
        return (
            <>
                <ModalHeader style={{borderBottom: "none", paddingLeft: "10%", paddingRight: "10%", paddingTop: "8%"}}
                             closeButton>
                    <ModalTitle>Student Details</ModalTitle>
                </ModalHeader>
                <ModalBody style={{paddingLeft: "10%", paddingRight: "10%"}}>
                    {this.state.errors.length > 0 ? this.renderError() : ""}
                    <Form>
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <FormGroup>
                                    <FormLabel className="required">Full name</FormLabel>
                                    <Row>
                                        <Col>
                                            <Form.Control type="text" name="firstName" placeholder="First name"
                                                          value={fName}
                                                          onChange={this.updateName}
                                                          required/>
                                        </Col>
                                        <Col>
                                            <Form.Control type="text" name="lastName" placeholder="Last Name"
                                                          value={lName}
                                                          onChange={this.updateName}
                                                          required/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel className="required">Email</FormLabel>
                                    <FormControl type="text" name="email" placeholder="abc@xyz.com" value={email}
                                                 onChange={this.updateEmail} required/>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>D.O.B.</FormLabel>
                                    <DatePicker placeholderText="Click to select a date (mm/dd/yyyy)"
                                                maxDate={new Date()} onChange={this.updateDOB} selected={dob}/>
                                    {/*<FormControl type="date" value={dob} onChange={this.updateDOB} required/>*/}
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Gender</FormLabel>
                                    <br/>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <FormControl type="radio" className="custom-control-input" id="customRadio"
                                                     name="gender"
                                                     value="Male" onChange={this.updateGender}/>
                                        <FormLabel className="custom-control-label"
                                                   htmlFor="customRadio">Male </FormLabel>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <FormControl type="radio" className="custom-control-input" id="customRadio1"
                                                     name="gender"
                                                     value="Female"
                                                     onChange={this.updateGender}/>
                                        <FormLabel className="custom-control-label"
                                                   htmlFor="customRadio1">Female </FormLabel>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <FormControl type="radio" className="custom-control-input" id="customRadio2"
                                                     name="gender"
                                                     value="Other"
                                                     onChange={this.updateGender}/>
                                        <FormLabel className="custom-control-label"
                                                   htmlFor="customRadio2">Other </FormLabel>
                                    </div>
                                </FormGroup>
                            </div>
                            <div className="col-md-6 col-xs-12">
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
                </ModalBody>
            </>
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
        if (event.target.name == "firstName") {
            this.setState({fName: event.target.value});
        } else if (event.target.name == "lastName") {
            this.setState({lName: event.target.value});
        }
    }

    updateEmail = (event) => {
        if (event.target.name == "email") {
            this.setState({email: event.target.value});
        }
    }

    updateDOB = (date) => {
        this.setState({dob: date});
    }

    updateGender = (event) => {
        if (event.target.name == "gender") {
            this.setState({gender: event.target.value});
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
        if (this.state.fName.length < 1) {
            result = false;
            message.push("First Name required!");
        }
        if (this.state.lName.length < 1) {
            result = false;
            message.push("Last Name required!");
        }
        if (this.state.email.length < 1) {
            result = false;
            message.push("Email required!");
        }
        if (this.state.password.length < 6) {
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
            let student = {
                name: {
                    first: this.state.fName,
                    last: this.state.lName
                },
                profilePic: this.state.profilePic,
                dob: this.state.dob,
                gender: this.state.gender,
                contact: {
                    email: this.state.email,
                    mobile: parseInt(this.props.mobile, 10),
                    address: {
                        street: "",
                        city: this.state.city,
                        state: this.state.state,
                        country: ""
                    }
                },
                password:this.state.password
            };
            ApiAction.studentRegistration(student)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}

export default StudentDetails;