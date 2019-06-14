import React, {Component} from 'react'
import './MissionCompleted.css'
import Background from './Mobile5.png'
import Background1 from './Mobile7.png'
import ToggleBtnAnimation from './ToggleBtnAnimation.js'
import StudentInsight from './StudentInsight.js'
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";

class MissionCompleted extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullImage: false,
            image: "",
            works: []
        }


    }

    changeView = () => {
        this.setState({
            expand: !this.state.expand
        })
    }

    openFullImage = (event) => {
        console.log(event);
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
                            {/*<FormGroup>*/}
                            {/*    <FormLabel>Remark</FormLabel>*/}
                            {/*    <FormControl type="text" as="textarea" placeholder="Remark"/>*/}
                            {/*</FormGroup>*/}
                        </div>
                        <div className="d-flex">
                            {/*<Button className="btn-danger float-left mr-auto">Reject</Button>*/}
                            {/*<Button className="btn-success">Accept</Button>*/}
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }

    render() {
        const uploads = [{
            Status: 'Aprooved',
            Remark: 'Good'
        },
            {
                Status: 'Not Aprooved',
                Remark: 'Improve'
            },
            {
                Status: 'Aprooved',
                Remark: 'Excellent'
            }];
        let {works} = this.state;

        return (

            <div className="Block0">
                <div className="Block1">
                    <h1 className="h1tag1">Completed Missions</h1>
                    {works.map((work, key) => {
                        return (
                            <div key={key}>
                                <div className="Block3">
                                    <img className="imgclass1 col-sm-2 col-lg-2 col-md-6 col-8 " src={Background}
                                         width="100px" height="90px"/>
                                    {/* <img className="imgclass1" src={Background} width="100px" height="90px"/> */}
                                    <button className="btn  dropdown-toggle  float-right" onClick={this.changeView}>
                                    </button>
                                    <div className="">
                                        <h6 className=" opacity-115 pt-2 col-lg-10 col-md-10 col-10">Swach Bharat
                                            Abhiyan Internship</h6>
                                        <p className="opacity-75 pt-2 col-lg-10 col-md-10 col-12">Task Description:To go
                                            in your Neighbourhood and take pictures of cleaning your society </p>
                                    </div>
                                    <p className="float-right pr-4  col-7"><strong>End Date</strong><span
                                        className="opacity-50">:12/12/19</span></p>
                                    <p className="col-lg-5 col-md-5 col-3"><strong>Start Date</strong><span
                                        className="opacity-50">:2/5/19</span></p>
                                    <div className={this.state.expand ? "d-block" : "d-none"}>
                                        <h3 className="text-align-center border-top border-bottom border-top pt-1 pb-2">Uploaded
                                            Document</h3>
                                        {(uploads.length > 0) ? uploads.map((upload) =>
                                                <React.Fragment>
                                                    <div className="uploaded-summary border-bottom pt-2 pb-1">
                                                        <div className="row">
                                                            {/* <div className="col-1">
                                                        <div className="design">
                                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </div>
                                                    </div> */}
                                                            <div className="col-12">
                                                                <div className="row">
                                                                    <div className="col-2">

                                                                        <div
                                                                            className="position-relative text-align-center pt-1 pb-1"
                                                                        >
                                                                            <input type="image" className=""
                                                                                   width="50px"
                                                                                   height="50px"
                                                                                   onClick={() => this.openFullImage()}
                                                                                   src={require("../../../../assets/images/fitness.jpg")}
                                                                            />
                                                                            {/* <div className="remarked">
                                                                        <i className="fa fa-check text-success fa-2x mt-2"
                                                                           aria-hidden="true"> </i>
                                                                    </div> */}
                                                                        </div>
                                                                    </div>
                                                                    <div className="remark col-10">
                                                                        <div
                                                                            className={upload.Status == 'Aprooved' ? "upload-status d-inline-block text-success m-auto col-3" : "upload-status d-inline-block text-danger col-3"}>
                                                                            <strong>{upload.Status}</strong>
                                                                        </div>
                                                                        <br></br>
                                                                        <div
                                                                            className="remark-summary d-inline-block m-auto col-5">
                                                                            <strong> Remark: </strong>{upload.Remark}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            ) :
                                            <div className="text-align-center">
                                                <strong>No Uploads</strong>
                                                <img src={Background1} width="100px" height="100px"/>
                                            </div>
                                        }
                                    </div>
                                    {/* <div className="upload-Wrappar">
                                        <img className="imgclass1" src={Background} width="100px" height="90px"/>
                                        <h1 className="profileclass"><strong>Task Completed</strong></h1>
                                        <p className="opacity-75">Task Description:</p>
                                        <p className="float-right pr-4"><strong>End Date</strong><span className="opacity-50">:12/12/19</span></p>
                                        <p><strong>Start Date</strong><span className="opacity-50">:2/5/19</span></p>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        );
                    })}

                    {/* <div className="upload-Wrappar">
                                    <img className="imgclass1" src={Background} width="100px" height="90px"/>
                                    <h1 className="profileclass"><strong>Task Completed</strong></h1>
                                    <p className="opacity-75">Task Description:</p>
                                    <p className="float-right pr-4"><strong>End Date</strong><span className="opacity-50">:12/12/19</span></p>
                                    <p><strong>Start Date</strong><span className="opacity-50">:2/5/19</span></p>
                                </div>
                            </div> */}
                </div>
                {this.state.openFullImage ? this.renderFullImage() : ""}
            </div>
        )
    }
}

export default MissionCompleted
