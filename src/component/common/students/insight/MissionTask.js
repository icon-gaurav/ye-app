/*
 * @author Gaurav Kumar    
*/

import React from "react";
import Converter from "../../../utilities/Converter";
import {FormControl, Image} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ApiAction from "../../../../actions/ApiAction";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";

class MissionTask extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            fullImage: false,
            image: undefined,
            missionUpload: undefined,
            uploaded: false,
        }
    }

    render() {
        let {task} = this.props;
        let {missionUpload, uploaded} = this.state;
        return (
            <div>
                <div className="m-2">
                    <div className="task-header row">
                        <div className="sr-no d-inline-block">
                            <i className="fas fa-check-circle" style={{color:"blue"}}></i>
                        </div>
                        <div className="task-title d-inline-block">
                            <span>{task.title}</span>
                            <br/>
                            <span className="task-start-date opacity-50">
                                                                {task.createdAt.split("T")[0]}
                                                            </span>
                        </div>
                    </div>
                    <div className="task-uploads">
                        <div><h5>Uploads</h5></div>
                        <div className="uploaded-summary">
                            <div className="row">
                                {task.uploads.map((upload, key) => (
                                    <div className="col-11" key={key}>
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="position-relative">
                                                    <input type="image" className=""
                                                           width="50px"
                                                           height="50px"
                                                           onClick={this.openFullImage}
                                                           src={Converter.bufferToBase64(upload.document)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="remark col-10">
                                                <div
                                                    className="upload-status d-inline-block">{upload.status}
                                                </div>
                                                <div
                                                    className="remark-summary d-inline-block">{upload.remark}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-11">
                                    <div className="d-flex">
                                        <div className="d-flex">
                                            <div className="verify-upload">
                                                {missionUpload ?
                                                    <Image src={missionUpload}
                                                           style={{
                                                               width: "100px",
                                                               height: "80px"
                                                           }}/>
                                                    : ""}
                                                <FormControl type="file" name="document"
                                                             onChange={this.updateMissionUpload}/>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center pl-4">
                                            {uploaded ?
                                                <div className="text-success">Uploaded
                                                    Successfully</div>
                                                :
                                                <Button className="btn-success"
                                                        disabled={document ? false : true}
                                                        onClick={this.sendMissionUpload}>Upload
                                                    document</Button>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    updateMissionUpload = (event) => {
        if (event.target.name == "document") {
            Converter.imageFileToBase64(event.target.files[0])
                .then((base64) => {
                    this.setState({missionUpload: base64});
                });
        }
    }

    sendMissionUpload = () => {
        let {activity, index} = this.props;
        let doc = {
            document: this.state.missionUpload
        };
        activity.tasks[index].uploads.push(doc);
        ApiAction.uploadDocumentForTask(activity)
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    console.log("successfully updated upload to the tasks");
                    this.setState({uploaded: true, missionUpload: null});
                } else {

                }
            })
            .catch((error) => {
                console.log(error);
            })
    }


    openFullImage = (props) => {
        this.setState({fullImage: true, image: props.target.src});
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
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

export default MissionTask;