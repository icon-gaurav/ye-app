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
import Converter from "../../../utilities/Converter";
import ApiAction from "../../../../actions/ApiAction";

class ProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: "",
            name: "",
            email: "",
            mobile: "",
            city: "",
            state: "",
            country: "",
            website: "",
            description: ""
        }
    }

    componentWillMount() {
        let {user} = this.props;
        this.setState({
            name: user.name,
            logo: Converter.bufferToBase64(user.logo),
            city: user.contact.address.city,
            state: user.contact.address.state,
            email:user.contact.email,
            mobile: user.contact.mobile,
            website: user.summary ? user.summary.website : "",
            description: user.summary ? user.summary.description : "",
        });
    }

    render() {
        let {name, logo, city, state, email, mobile, website, description} = this.state;
        return (
            <Modal show={this.props.show}
                   onHide={this.props.onHide}
                   animation={true}>
                <ModalHeader closeButton>
                    <Modal.Title>Edit Personal Details</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <div className="row">
                            <div className="col-12 text-align-center">
                                <FormGroup>
                                    <Image src={logo}
                                           style={{width: "400px"}}/>
                                    <FormControl type="file" name="profilePic" onChange={this.updateProfilePic}/>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <FormGroup>
                                    <FormLabel className="">Full name</FormLabel>
                                    <Form.Control type="text" name="name" placeholder="First name"
                                                  value={name}
                                                  onChange={this.updateName}
                                                  required/>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel className="">Email</FormLabel>
                                    <FormControl type="text" name="email" placeholder="abc@xyz.com" value={email}
                                                 onChange={this.updateEmail} required/>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Mobile</FormLabel>
                                    <FormControl type="number" name="mobile" placeholder="Mobile number"
                                                 onChange={this.updateMobile} value={mobile}/>
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
                                    <FormLabel className="">Website</FormLabel>
                                    <FormControl type="url" name="website" placeholder="https://"
                                                 value={website} onChange={this.updateWebsite}/>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel className="">Description</FormLabel>
                                    <FormControl type="text" as="textarea" name="description" placeholder="Description"
                                                 value={description} onChange={this.updateDescription}/>
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
            Converter.imageFileToBase64(event.target.files[0])
                .then((base64) => {
                    this.setState({
                        logo: base64,
                    });
                })
        }
    }


    updateName = (event) => {
        if (event.target.name == "name") {
            this.setState({name: event.target.value});
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

    updateWebsite = (event) => {
        if (event.target.name == "website") {
            this.setState({website: event.target.value});
        }
    }

    updateDescription = (event) => {
        if (event.target.name == "description") {
            this.setState({description: event.target.value});
        }
    }

    submitDetails = () => {
        let {logo, name, email, mobile, country, city, state, description, website} = this.state;
        let updatedCompany = {
            name: name,
            contact: {
                email: email,
                mobile: mobile,
                address: {
                    city: city,
                    state: state,
                    country: country,
                }
            },
            logo: logo,
            summary: {
                description: description,
                website: website,
            }
        };
        ApiAction.updateCompany(this.props.user, updatedCompany)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.props.user = response.data.company;
                    this.props.onHide();
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
}

export default ProfileEdit;