/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import ModalHeader from "react-bootstrap/ModalHeader";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import Form from "react-bootstrap/Form";
import {FormControl, FormGroup} from "react-bootstrap";
import FormLabel from "react-bootstrap/FormLabel";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import ApiAction from "../../../../actions/ApiAction";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker/es";

class PersonalDetailModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            file: {},
            fName: "",
            lName: "",
            email: "",
            dob: new Date(),
            gender: "",
            college: "",
            course: "",
            city: "",
            state: "",
            mobile: "",
            twitter: "",
            linkedIn: "",
            facebook: "",
            github: "",
            aboutMe: "",
            website: "",
            errors: []
        }
    }

    render() {
        let {image, fName, lName, email, mobile, dob, college, course, city, state, twitter, linkedIn, facebook, github, aboutMe, website} = this.state;
        return (
            <Modal show={this.props.show}
                   onHide={this.props.onHide}
                   animation={true}>
                <ModalHeader>
                    <Modal.Title>Edit Personal Details</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <div className="row">
                            <div className="col-12 text-align-center">
                                <FormGroup>
                                    <img src={require("../../../../assets/images/random.jpg")}
                                         style={{width: "400px"}}/>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <FormGroup>
                                    <FormLabel className="">Full name</FormLabel>
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
                                    <FormLabel className="">Email</FormLabel>
                                    <FormControl type="text" name="email" placeholder="abc@xyz.com" value={email}
                                                 onChange={this.updateEmail} required/>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>D.O.B.</FormLabel>
                                    <DatePicker placeholderText="Click to select a date (mm/dd/yyyy)"
                                                maxDate={new Date()} onChange={this.updateDOB} selected={dob}/>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Mobile</FormLabel>
                                    <FormControl type="number" name="mobile" placeholder="Mobile number"
                                                 onChange={this.updateMobile} selected={mobile}/>
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
                                    <FormLabel className="">Social Profile</FormLabel>
                                    <FormControl type="input" name="twitter" placeholder="twitter account url"
                                                 value={twitter} onChange={this.updateTwitter}/>
                                    <FormControl type="input" name="linkedIn" placeholder="linkedIn account url"
                                                 value={linkedIn} onChange={this.updateLinkedIn}/>
                                    <FormControl type="input" name="facebook" placeholder="facebook account url"
                                                 value={facebook} onChange={this.updateFacebook}/>
                                    <FormControl type="input" name="github" placeholder="github account url"
                                                 value={github} onChange={this.updateGithub}/>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel className="">Website</FormLabel>
                                    <FormControl type="url" name="website" placeholder="Confirm Password"
                                                 value={website} onChange={this.updateWebsite}/>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel className="">About Me</FormLabel>
                                    <FormControl type="text" as="textarea" name="aboutMe" placeholder="About Me"
                                                 value={aboutMe} onChange={this.updateAboutMe}/>
                                </FormGroup>
                            </div>
                        </div>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" className="btn btn-success" onClick={this.submitDetails}>Save</Button>
                </ModalFooter>
            </Modal>
        );
    }

    updateProfilePic = (event) => {
        if (event.target.name == "profilePic") {
            this.setState({image: URL.createObjectURL(event.target.files[0]), file: event.target.files[0]});
        }
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

    updateMobile = (event) => {
        if (event.target.name == "mobile") {
            this.setState({mobile: event.target.value});
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
    updateTwitter = (event) => {
        if (event.target.name == "twitter") {
            this.setState({twitter: event.target.value});
        }
    }

    updateLinkedIn = (event) => {
        if (event.target.name == "linkedIn") {
            this.setState({linkedIn: event.target.value});
        }
    }

    updateFacebook = (event) => {
        if (event.target.name == "facebook") {
            this.setState({facebook: event.target.value});
        }
    }

    updateGithub = (event) => {
        if (event.target.name == "github") {
            this.setState({github: event.target.value});
        }
    }

    updateWebsite = (event) => {
        if (event.target.name == "website") {
            this.setState({website: event.target.value});
        }
    }

    updateAboutMe = (event) => {
        if (event.target.name == "aboutMe") {
            this.setState({aboutMe: event.target.value});
        }
    }

    submitDetails = () => {
        let reader = new FileReader();
        let base64 = "";
        reader.onload = function (event) {
            let binary = event.target.result;
            base64 = window.btoa(binary);
            // ApiAction.uploadProfilePic(base64)
            //     .then((response) => {
            //         console.log(response);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
        }
        reader.readAsBinaryString(this.state.file);
        console.log(base64);
    }
}

export default PersonalDetailModal;