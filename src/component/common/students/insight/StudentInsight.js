/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import FormGroup from "react-bootstrap/es/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import {FormControl} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ApiAction from "../../../../actions/ApiAction";

class StudentInsight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featured: [],
            ongoing: [],
            fullImage: false,
            image: "",
            completedInternships: [],
            completedMissions: [],
            topInternships: [],
            topMissions: []
        }
    }

    componentWillMount() {
        let {user} = this.props;
        let {topInternships, topMissions} = this.state;
        console.log(user)
        ApiAction.getTypeWorks("featured")
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    let featured = response.data.featuredWork;
                    featured.map((feat, key) => {
                        let work = feat.work;
                        if (work.mode == "internship") {
                            topInternships.push(work);
                        } else if (work.mode == "mission") {
                            topMissions.push(work);
                        }
                    });
                    this.setState({topInternships: topInternships, topMissions: topMissions});
                }
            })
            .catch((error) => {
                console.log(error);
            });

        ApiAction.getCompletedWork(user)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    let completed = response.data.workList;
                    let {completedInternships, completedMissions} = this.state;
                    completed.map((work) => {
                        if (work.mode == "internship") {
                            completedInternships.push(work);
                        } else if (work.mode == "missions") {
                            completedMissions.push(work);
                        }
                    });
                    this.setState({completedInternships: completedInternships, completedMissions: completedMissions});
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    componentDidMount() {
        document.title = "Insights";
        console.log(document.title)
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-8 col-12">
                    {this.renderCompletedActivity()}
                    {this.renderOnGoingActivities()}
                </div>
                <div className="col-lg-4 col-12">
                    {this.renderFeatured()}
                </div>
                {this.state.fullImage ? this.renderFullImage() : ""}
            </div>
        );
    }

    renderCompletedActivity() {
        let {completedInternships,completedMissions} = this.state;
        return (
            <div className="insights">
                <div className="insight row">
                    <div className="col-md-6 col-lg-6 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h6>Internships Completed</h6>
                                </div>
                                <div className="row center-align">
                                    <h2 className="col-6">
                                        <img src={require("../../../../assets/images/graph.svg")} width="50px"
                                             height="50px"/>
                                    </h2>
                                    <div className="col-6 quantity">
                                        <h2>{completedInternships.length}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h6>Missions Completed</h6>
                                </div>
                                <div className="row center-align">
                                    <h2 className="col-6">
                                        <img src={require("../../../../assets/images/graph.svg")} width="50px"
                                             height="50px"/>
                                    </h2>
                                    <div className="col-6 quantity">
                                        <h2>{completedMissions.length}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderFeatured() {
        let {topMissions, topInternships} = this.state;
        return (
            <div className="p-2 ">
                <div className="row mb-2">
                    <div className="col-12">
                        <div className="background-wraper top-internship-wraper">
                            <div align="left"><a href="#"><h4>Top Internship</h4></a></div>
                            {topInternships.map((work, key) => {
                                return (
                                    <div className="row top-internship-wrapper-item bg-white m-1" align="left"
                                         key={key}>
                                        <div className="col-10 ">
                                            <div className="">

                                                <div className="row">
                                                    <div className="col-sm-6 col-12 p-1"><i
                                                        className="fa fa-free-code-camp"
                                                        aria-hidden="true"></i><span
                                                        className="span">{work.profile}</span></div>
                                                    <div className="col-12 col-sm-6 d-sm-block p-1"><span
                                                        className="span">Salary</span><i className="fa fa-inr"
                                                                                         aria-hidden="true"></i><span
                                                        className="span">{work.stipend}</span></div>
                                                    <div className="col-12 col-sm-6 d-sm-block p-1"><i
                                                        className="fa fa-map-marker" aria-hidden="true"></i><span
                                                        className="span"> {work.location}</span></div>
                                                    <div className="col-12 col-sm-6 p-1"><i
                                                        className="fa fa-hourglass-half"
                                                        aria-hidden="true"></i><span
                                                        className="span"> {work.duration.weeks + " weeks"}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="pt-3"><a href="#"><i
                                                className="fa fa-angle-double-right fa-2x"
                                                aria-hidden="true"
                                                style={{color: "rgb(65, 234, 212)"}}></i></a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12">
                        <div className="top-internship-wraper background-wraper">
                            <div align="left">
                                <a href="#">
                                    <h4>Top Missions</h4>
                                </a>
                            </div>
                            {topMissions.map((work, key) => {
                                return (
                                    <div className="row top-internship-wraper-item m-1 bg-white" align="left" key={key}>
                                        <div className="col-10">
                                            <div className="p-2">
                                                <div className="row">
                                                    <div className="col-sm-6 col-12 p-1">
                                                        <i className="fa fa-eercast" aria-hidden="true"></i>
                                                        <span className="span">{work.profile}</span>
                                                    </div>
                                                    <div className="col-sm-6 col-12 d-sm-block d-none p-1">
                                                        <span className="span">&nbsp;</span>
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                        <span>{work.stipend}</span>
                                                    </div>
                                                    <div className="col-12 col-sm-6 p-1">
                                                        <i className="fa fa-hourglass-half" aria-hidden="true"></i>
                                                        <span className="span">{work.duration.weeks + " weeks"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2 p-2">
                                            <div className="pt-3">
                                                <a href="#">
                                                    <i className="fa fa-angle-double-right fa-2x" aria-hidden="true"
                                                       style={{color: "#41ead4"}}></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderOnGoingActivities() {
        return (
            <div className="">
                {/*<div className="ongoing-item-wrapper row">*/}
                {/*    <div className="col-3">*/}
                {/*        <a href="#">*/}
                {/*            <img src="logo.jpg" className="image-cover-rect"/>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <div className="col-9">*/}
                {/*        <div>Name</div>*/}
                {/*        <div>Duration</div>*/}
                {/*        <div className="border-hr-home"></div>*/}
                {/*        <div>Job Profile</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="insights">
                    <div className="ongoing-activity-wrapper">
                        <div className="header">
                            <b>Missions/Internships</b>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <div>
                                    <a href="#"><img src="logo.jpg" className="image-cover-rect"/></a>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="d-inline">Work-Title/Profile</div>
                                <div className="dropdown d-inline float-right">
                                    <button className="btn btn-sm dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">a</a>
                                        <a className="dropdown-item" href="#">b</a>
                                        <a className="dropdown-item" href="#">c</a>
                                    </div>
                                </div>
                                <br/>
                                Company-Name
                            </div>
                        </div>
                        <div className="progress m-2">
                            <div className="progress-bar progress-bar-success progress-bar-striped"
                                 role="progressbar"
                                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                40% Complete
                            </div>
                        </div>
                        <div className="m-2" style={{fontSize: "10px"}}>
                            <span>xx/xx/xxxx</span><span className="float-right">yy/yy/yyyy</span>
                        </div>
                        <div className="m-2">
                            <div className="task-header row">
                                <div className="sr-no d-inline-block">
                                    <span>1</span>
                                </div>
                                <div className="task-title d-inline-block">
                                    <span>Task Title</span>
                                    <br/>
                                    <span className="task-start-date opacity-50">
                                        xx/yy/zzzz
                                    </span>
                                </div>
                            </div>
                            <div className="task-uploads">
                                <div><h5>Uploads</h5></div>
                                <div className="uploaded-summary">
                                    <div className="row">
                                        <div className="col-1">
                                            <div className="design">
                                                <i className="fa fa-circle" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="col-11">
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="position-relative" onClick={this.openFullImage}>
                                                        <input type="image" className="" width="50px" height="50px"
                                                               src={require("../../../../assets/images/fitness.jpg")}
                                                        />
                                                        <div className="remarked">
                                                            <i className="fa fa-check text-success fa-2x mt-2"
                                                               aria-hidden="true"> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="remark col-10">
                                                    <div className="upload-status d-inline-block">Approved</div>
                                                    <div className="remark-summary d-inline-block">Good</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
}

export default StudentInsight;