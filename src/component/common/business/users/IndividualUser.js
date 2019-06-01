/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import ModalBody from "react-bootstrap/ModalBody";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import {FormControl} from "react-bootstrap";
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/es/FormGroup";

class IndividualUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullImage: false,
            image: "",
        }
    }

    render() {
        return (
            <div className="shadow">
                <div className="container-fluid">
                    <div className="row p-2">
                        <div className="col-2">
                            <img src={require("../../../../assets/images/fitness.jpg")}
                                 className="image-cover-circle rounded-circle"
                                 style={{width: "100px", height: "100px"}}/>
                        </div>
                        <div className="col-10">
                            Name : <span>abc</span><br/>
                            UserName : <span>a@123</span><br/>
                            Contact : <span>+91 xxx xxx xxxx</span><br/>
                            Email : <span>abc@def.com</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="row p-2">
                        <div className="col-8">
                            <b><u>EXPERIENCE:</u></b><br/>
                            <span>1)abc</span><br/>
                            <span>2)def</span><br/>
                            <br/>
                            <b><u>EDUCATION:</u></b><br/>
                            <span>10th</span><br/>
                            <span>12th</span><br/>
                            <br/>
                            <b><u>SKILLS:</u></b><br/>
                            <span>1)</span><br/>
                            <span>2)</span><br/>
                            <span>3)</span><br/>
                            <br/>
                        </div>
                        <div className="col-4">
                            <b><u>STATUS:</u></b>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div className="col-12"><h5>UPLOADED FILES</h5></div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-2">
                                    <div className="verify-upload text-align-center">
                                        <input type="image" src={require("../../../../assets/images/fitness.jpg")}
                                               style={{width: "100px", height: "80px"}}
                                               onClick={this.openFullImage}/>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div>
                                        <h6>Verified/Accepted/Rejected</h6>
                                    </div>
                                    <div className="opacity-50">
                                        <p>You can see it in action: http://jsfiddle.net/8WA3k/1/

                                            If you want to have the button on the same line as the Text, you can achieve
                                            it
                                            by doing this:</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.fullImage ? this.renderFullImage() : ""}
            </div>
        );
    }

    openFullImage = (event) => {
        console.log(event.target);
        this.setState({fullImage: true, image: event.target.src});
    }

    renderFullImage() {
        return (
            <Modal show={this.state.fullImage} onHide={() => this.setState({fullImage: false})}>
                <ModalHeader closeButton>
                    <Modal.Title>Verify Uploaded Document</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="container-fluid">
                        <div>
                            <img src={this.state.image} width="100%"/>
                        </div>
                        <div>
                            <FormGroup>
                                <FormLabel>Remark</FormLabel>
                                <FormControl type="text" as="textarea" placeholder="Remark"/>
                            </FormGroup>
                        </div>
                        <div className="d-flex">
                            <Button className="btn-danger float-left mr-auto">Reject</Button>
                            <Button className="btn-success">Accept</Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

export default IndividualUser;