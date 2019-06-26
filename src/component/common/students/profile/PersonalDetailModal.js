/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import ModalHeader from "react-bootstrap/ModalHeader";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import Form from "react-bootstrap/Form";
import {FormControl, FormGroup, Image} from "react-bootstrap";
import FormLabel from "react-bootstrap/FormLabel";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import ApiAction from "../../../../actions/ApiAction";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker/es";
import Converter from "../../../utilities/Converter";

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

    componentWillMount() {
        let {user} = this.props;
        this.setState({
            image: Converter.bufferToBase64(user.profilePic),
            fName: user.name.first,
            lName: user.name.last,
            email: user.contact.email,
            dob: user.dob,
            gender: user.gender,
            college: "",
            course: "",
            city: user.contact.address.city,
            state: user.contact.address.state,
            mobile: user.contact.mobile,
            twitter: user.social ? user.social.twitter : "",
            linkedIn: user.social ? user.social.linkedIn : "",
            facebook: user.social ? user.social.facebook : "",
            github: user.social ? user.social.github : "",
            aboutMe: user.summary ? user.summary.aboutMe : "",
            website: user.summary ? user.summary.website : "",
        });
    }

    render() {
        let {image, fName, lName, email, mobile, dob, college, course, city, state, twitter, linkedIn, facebook, github, aboutMe, website} = this.state;
        return (
            <Modal show={this.props.show}
                   onHide={this.props.onHide}
                   animation={true}>
                <ModalHeader closeButton>
                    <Modal.Title>Edit Personal Details</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="scrollable-modal-div w-100">
                        <Form>
                            <div className="row">
                                <div className="col-12 text-align-center">
                                    <FormGroup>
                                        <Image src={image}
                                               style={{width: "400px"}}/>
                                        <FormControl type="file" name="profilePic" onChange={this.updateProfilePic}/>
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
                                                    maxDate={new Date()} onChange={this.updateDOB}
                                                    selected={new Date(dob)}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Mobile</FormLabel>
                                        <FormControl type="number" name="mobile" placeholder="Mobile number"
                                                     onChange={this.updateMobile} value={mobile}/>
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
                                        <FormControl type="url" name="website" placeholder="https://"
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
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" className="btn btn-success" onClick={this.submitDetails}>Save</Button>
                </ModalFooter>
            </Modal>
        );
    }

    updateProfilePic = (event) => {
        if (event.target.name == "profilePic") {
            Converter.imageFileToBase64(event.target.files[0])
                .then((base64) => {
                    this.setState({
                        image: base64,
                    });
                })
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
        let {image, fName, lName, email, mobile, dob, college, course, city, state, twitter, linkedIn, facebook, github, aboutMe, website} = this.state;
        let updatedStudent = {
            name: {
                first: fName,
                last: lName,
            },
            contact: {
                email: email,
                mobile: mobile,
                address: {
                    city: city,
                    state: state,
                }
            },
            dob: dob,
            social: {
                twitter: twitter,
                github: github,
                facebook: facebook,
                linkedIn: linkedIn,
            },
            profilePic: image,
            summary: {
                aboutMe: aboutMe,
                website: website,
            }
        };
        ApiAction.updatePersonalInfo(this.props.user, updatedStudent)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.props.onHide();
                }else{

                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
}

export default PersonalDetailModal;