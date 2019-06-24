/*
 * @author Gaurav Kumar    
*/

import React, {PureComponent} from 'react';
import Button from "react-bootstrap/Button";
import ModalBody from "react-bootstrap/ModalBody";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import {FormControl} from "react-bootstrap";
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/es/FormGroup";
import ApiAction from "../../../../actions/ApiAction";
import Converter from "../../../utilities/Converter";

class IndividualUser extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fullImage: false,
            image: "",
            uploads: [],
            selectedDocument: null,
            userId: this.props.match.params.userId,
            updated: false,
        }
        console.log(this.props);
    }

    componentWillMount() {
        let {match} = this.props;
        if (match.isExact) {
            let userId = match.params.userId;
            ApiAction.getUploadsForVerification(userId)
                .then((response) => {
                    console.log(response);
                    if (response.data.success) {
                        this.setState({uploads: response.data.uploads});
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }


    }

    render() {
        let {uploads, updated, selectedDocument} = this.state;
        return (
            <div className="shadow">
                <div className="p-2 bg-white">
                    {/*<div className="d-flex">*/}
                    {/*    <div className="d-flex align-items-center">*/}
                    {/*        <img src={require("../../../../assets/images/fitness.jpg")}*/}
                    {/*             className="border rounded-circle"*/}
                    {/*             style={{width: "100px", height: "100px"}}/>*/}
                    {/*    </div>*/}
                    {/*    <div className="pl-4">*/}
                    {/*        Name : <span>abc</span><br/>*/}
                    {/*        UserName : <span>a@123</span><br/>*/}
                    {/*        Contact : <span>+91 xxx xxx xxxx</span><br/>*/}
                    {/*        Email : <span>abc@def.com</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<hr/>*/}
                    {/*<div className="row p-2">*/}
                    {/*    <div className="col-8">*/}
                    {/*        <b><u>EXPERIENCE:</u></b><br/>*/}
                    {/*        <span>1)abc</span><br/>*/}
                    {/*        <span>2)def</span><br/>*/}
                    {/*        <br/>*/}
                    {/*        <b><u>EDUCATION:</u></b><br/>*/}
                    {/*        <span>10th</span><br/>*/}
                    {/*        <span>12th</span><br/>*/}
                    {/*        <br/>*/}
                    {/*        <b><u>SKILLS:</u></b><br/>*/}
                    {/*        <span>1)</span><br/>*/}
                    {/*        <span>2)</span><br/>*/}
                    {/*        <span>3)</span><br/>*/}
                    {/*        <br/>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-4">*/}
                    {/*        <b><u>STATUS:</u></b>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<hr/>*/}
                    <div>
                        <div className="col-12"><h5>UPLOADED FILES</h5></div>
                        {uploads.map((upload, key) => {
                            if (updated && selectedDocument._id == upload._id) {
                                upload = selectedDocument;
                            }
                            return (
                                <div className="col-12" key={key}>
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="verify-upload text-align-center">
                                                <input type="image"
                                                       src={Converter.bufferToBase64(upload.document)}
                                                       style={{width: "100px", height: "80px"}}
                                                       onClick={(event) => this.openFullImage(event, Object.assign({}, upload))}/>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div>
                                                <h6 className={upload.status == "REJECTED" ? "text-danger" : upload.status == "ACCEPTED" ? "text-success" : ""}>
                                                    {upload.status}
                                                </h6>
                                            </div>
                                            <div className="opacity-50">
                                                <p>{upload.remark}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {this.state.fullImage ? this.renderFullImage() : ""}
            </div>
        );
    }

    openFullImage = (event, doc) => {
        this.setState({fullImage: true, selectedDocument: doc});
    }

    renderFullImage() {
        let {selectedDocument} = this.state;
        return (
            <Modal show={this.state.fullImage} onHide={() => this.setState({fullImage: false})}>
                <ModalHeader closeButton>
                    <Modal.Title>Verify Uploaded Document</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="container-fluid">
                        <div>
                            <img src={Converter.bufferToBase64(selectedDocument.document)} width="100%"/>
                        </div>
                        <div>
                            <FormGroup>
                                <FormLabel>Remark</FormLabel>
                                <FormControl type="text" as="textarea" placeholder="Remark" name="remark"
                                             value={selectedDocument.remark}
                                             onChange={this.updateRemark}
                                             disabled={selectedDocument.status != "Under-review" ? true : false}/>
                            </FormGroup>
                        </div>
                        {selectedDocument.status != "Under-review" ? "" :
                            <div className="d-flex">
                                <Button className="btn-danger float-left mr-auto"
                                        onClick={this.rejectDocument}>Reject</Button>
                                <Button className="btn-success" onClick={this.acceptDocument}>Accept</Button>
                            </div>
                        }

                    </div>
                </ModalBody>
            </Modal>
        );
    }

    updateRemark = (event) => {
        if (event.target.name == "remark") {
            let {selectedDocument} = this.state;
            selectedDocument.remark = event.target.value;
            this.setState({selectedDocument: selectedDocument});
        }
    }

    rejectDocument = () => {
        let {selectedDocument, userId} = this.state;
        selectedDocument.status = "REJECTED";
        ApiAction.verifyDocument(userId, selectedDocument)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({updated: true, selectedDocument: response.data.document, fullImage: false})
                } else {

                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    acceptDocument = () => {
        let {selectedDocument, userId} = this.state;
        selectedDocument.document = null;
        selectedDocument.status = "ACCEPTED";
        ApiAction.verifyDocument(userId, selectedDocument)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({updated: true, selectedDocument: response.data.document, fullImage: false})
                } else {

                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export default IndividualUser;