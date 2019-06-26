/*
 * @author Gaurav Kumar    
*/

import React, {PureComponent} from 'react';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import FormGroup from "react-bootstrap/es/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import {FormControl} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ApiAction from "../../../../actions/ApiAction";
import Converter from "../../../utilities/Converter";
import Image from "react-bootstrap/Image";

class Verification extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fullImage: false,
            document: null,
            selectedDocument: null,
            uploads: [],
            uploaded: false,

        }
    }

    componentWillMount() {
        let {user} = this.props;
        ApiAction.getUploadsForVerification(user)
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

    render() {
        let {document, fullImage, uploads, uploaded} = this.state;
        return (
            <div className="bg-white border p-2">
                <div className="col-12"><h5>UPLOADED FILES</h5></div>
                {uploads.map((doc, key) => {
                    console.log(doc)
                    return (
                        <div className="col-12" key={key}>
                            <div className="d-flex">
                                <div className="d-flex justify-content-center">
                                    <div className="verify-upload text-align-center">
                                        <input type="image" src={Converter.bufferToBase64(doc.document)}
                                               style={{width: "100px", height: "80px"}}
                                               onClick={(event) => this.openFullImage(event, doc)}/>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pl-4">
                                    <div>
                                        <h6>{doc.status}</h6>
                                    </div>
                                    <div className="p-2 opacity-50">
                                        <p>{doc.remark}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="col-12">
                    <div className="d-flex">
                        <div className="d-flex">
                            <div className="verify-upload">
                                {document ?
                                    <Image src={document.document}
                                           style={{width: "100px", height: "80px"}}/>
                                    : ""}
                                <FormControl type="file" name="document" onChange={this.updateDocument}/>
                            </div>
                        </div>
                        <div className="d-flex align-items-center pl-4">
                            {uploaded ?
                                <div className="text-success">Uploaded Successfully</div>
                                :
                                <Button className="btn-success" disabled={document ? false : true}
                                        onClick={this.uploadDocument}>Upload document</Button>
                            }

                        </div>
                    </div>
                </div>
                {fullImage ? this.renderFullImage() : ""}
            </div>
        );
    }

    updateDocument = (event) => {
        if (event.target.name == "document") {
            let document = {};
            Converter.imageFileToBase64(event.target.files[0])
                .then((base64) => {
                    document.document = base64;
                    this.setState({document: document});
                });
        }
    }

    uploadDocument = () => {
        let {user} = this.props;
        let {document} = this.state;
        ApiAction.uploadDocument(user, document)
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.setState({uploaded:true});
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }

    openFullImage = (event, doc) => {
        this.setState({fullImage: true, selectedDocument: doc});
    }

    renderFullImage() {
        let {selectedDocument} = this.state;
        return (
            <Modal show={this.state.fullImage} onHide={() => this.setState({fullImage: false})}>
                <ModalHeader closeButton>
                    <Modal.Title>Uploaded Document</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="container-fluid">
                        <div>
                            <img src={Converter.bufferToBase64(selectedDocument.document)} width="100%"/>
                        </div>
                        <div>

                            <h6>Remark</h6>
                            <p>{selectedDocument.remark}</p>

                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

export default Verification;