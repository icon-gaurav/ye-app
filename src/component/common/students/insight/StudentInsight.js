/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import Converter from "../../../utilities/Converter";
import ApiAction from "../../../../actions/ApiAction";
import {Link} from "react-router-dom";
import image from './rock.png'
import {Image} from "react-bootstrap";
import {Bar, Doughnut} from "react-chartjs-2";
import ProgressBar from "react-bootstrap/ProgressBar";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

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
            topMissions: [],
            onGoingInternships: [],
            onGoingMissions: [],
            wallet: undefined,
        }
    }

    componentWillMount() {
        let {user} = this.props;
        let {topInternships, topMissions} = this.state;
        console.log(user)
        ApiAction.getTypeWorks("top")
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({
                        topInternships: response.data.topInternships,
                        topMissions: response.data.topMissions
                    });
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

        ApiAction.getOnGoingWork(user)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    let onGoing = response.data.workList;
                    let {onGoingInternships, onGoingMissions} = this.state;
                    onGoing.map((work) => {
                        if (work.mode == "internship") {
                            onGoingInternships.push(work);
                        } else if (work.mode == "missions") {
                            onGoingMissions.push(work);
                        }
                    });
                    this.setState({onGoingInternships: onGoingInternships, onGoingMissions: onGoingMissions});
                }
            })
            .catch((error) => {
                console.log(error);
            });

        ApiAction.getWallet(user)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({wallet: response.data.wallet});
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
            <React.Fragment>
                <div className="header pl-0">DASHBOARD</div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        {this.renderProfileSummary()}
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        {this.renderCompletedActivity()}
                    </div>
                    <div className="col-12">
                        {this.renderTrending()}
                    </div>
                    <div className="col-md-8 col-lg-8 col-12">
                        {this.renderOnGoingInternships()}
                        {this.renderOnGoingMissions()}
                    </div>
                    <div className="col-lg-4 col-12">
                        {this.renderFeatured()}
                    </div>
                    {this.state.fullImage ? this.renderFullImage() : ""}
                </div>
            </React.Fragment>
        );
    }

    renderCompletedActivity() {
        let {completedInternships, completedMissions, wallet} = this.state;
        return (
            <div className="insights border">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <Link to="completed-Internship">
                            <div className="card text-dark insight-item">
                                <div className="card-body row">
                                    {/*<div className="card-image col-4 d-flex align-items-center justify-content-center">*/}
                                    {/*    <img src={require("../../../../assets/images/insights/intern.png")} width="50px"*/}
                                    {/*         height="50px"/>*/}
                                    {/*</div>*/}
                                    <div className="col-12">
                                        <div className="card-title text-align-center">
                                            <h6>Internships Completed</h6>
                                        </div>
                                        <div className="quantity text-align-center">
                                            <h2>{completedInternships.length}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <Link to="missions-completed">
                            <div className="card text-dark insight-item">
                                <div className="card-body row">
                                    {/*<div className="card-image col-4 d-flex align-items-center justify-content-center">*/}
                                    {/*    <img src={require("../../../../assets/images/insights/mission.png")}*/}
                                    {/*         width="50px"*/}
                                    {/*         height="50px"/>*/}
                                    {/*</div>*/}
                                    <div className="col-12 flex-row">
                                        <div className="card-title text-align-center">
                                            <h6>Missions Completed</h6>
                                        </div>
                                        <div className="quantity text-align-center">
                                            <h2 className="">{completedMissions.length}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <Link to="total-earnings">
                            <div className="card text-dark insight-item">
                                <div className="card-body row">
                                    {/*<div className="card-image col-4 d-flex align-items-center justify-content-center">*/}
                                    {/*    <img src={require("../../../../assets/images/insights/money.png")} width="50px"*/}
                                    {/*         height="50px"/>*/}
                                    {/*</div>*/}
                                    <div className="col-12">
                                        <div className="card-title text-align-center">
                                            <h6>Total Earnings</h6>
                                        </div>
                                        <div className="quantity text-align-center">
                                            <h2><i className="fas fa-rupee-sign"></i> {wallet ? wallet.amount : 0}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <Link to="total-earnings">
                            <div className="card text-dark insight-item">
                                <div className="card-body row">
                                    {/*<div className="card-image col-4 d-flex align-items-center justify-content-center">*/}
                                    {/*    <img src={require("../../../../assets/images/insights/money.png")} width="50px"*/}
                                    {/*         height="50px"/>*/}
                                    {/*</div>*/}
                                    <div className="col-12">
                                        <div className="card-title text-align-center">
                                            <h6>Total Earnings</h6>
                                        </div>
                                        <div className="quantity text-align-center">
                                            <h2><i className="fas fa-rupee-sign"></i> {wallet ? wallet.amount : 0}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <Link to="completed-Internship">
                            <div className="card text-dark insight-item">
                                <div className="card-body row">
                                    {/*<div className="card-image col-4 d-flex align-items-center justify-content-center">*/}
                                    {/*    <img src={require("../../../../assets/images/insights/intern.png")} width="50px"*/}
                                    {/*         height="50px"/>*/}
                                    {/*</div>*/}
                                    <div className="col-12">
                                        <div className="card-title text-align-center">
                                            <h6>Internships Completed</h6>
                                        </div>
                                        <div className="quantity text-align-center">
                                            <h2>{completedInternships.length}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <Link to="completed-Internship">
                            <div className="card text-dark insight-item">
                                <div className="card-body row">
                                    {/*<div className="card-image col-4 d-flex align-items-center justify-content-center">*/}
                                    {/*    <img src={require("../../../../assets/images/insights/intern.png")} width="50px"*/}
                                    {/*         height="50px"/>*/}
                                    {/*</div>*/}
                                    <div className="col-12">
                                        <div className="card-title text-align-center">
                                            <h6>Internships Completed</h6>
                                        </div>
                                        <div className="quantity text-align-center">
                                            <h2>{completedInternships.length}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    renderTrending() {
        return (
            <div className="trending-section border mt-4">
                <div className="row m-1">
                    <div className="trending-item m-3 p-3 col-lg-2 col-sm-12">
                        <div className="upper-item d-flex justify-content-center m-4">
                            <img src={require("../../../../assets/images/response/suitcase.png")}
                                 className=" rounded-circle"
                                 width="70px" height="70px"/>
                        </div>
                        <div className="lower-item flex-column justify-content-center mt-5">
                            <div className="text-align-center ">Burger</div>
                            <div className="text-align-center">20</div>
                        </div>
                    </div>
                    <div className="trending-item m-3 p-3 col-lg-2 col-sm-12">
                        <div className="upper-item d-flex justify-content-center m-4">
                            <img src={require("../../../../assets/images/response/suitcase.png")}
                                 className=" rounded-circle"
                                 width="70px" height="70px"/>
                        </div>
                        <div className="lower-item flex-column justify-content-center mt-5">
                            <div className="text-align-center ">Burger</div>
                            <div className="text-align-center">20</div>
                        </div>
                    </div>
                    <div className="trending-item m-3 p-3 col-lg-2 col-sm-12">
                        <div className="upper-item d-flex justify-content-center m-4">
                            <img src={require("../../../../assets/images/response/suitcase.png")}
                                 className=" rounded-circle"
                                 width="70px" height="70px"/>
                        </div>
                        <div className="lower-item flex-column justify-content-center mt-5">
                            <div className="text-align-center ">Burger</div>
                            <div className="text-align-center">20</div>
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
                            <div align="left">
                                <h4>Top Internship</h4>
                            </div>
                            {topInternships.map((work, key) => {
                                return (
                                    <Link to={{pathname: `/missions/${work._id}`}}
                                          target="_blank">
                                        <div className="container bg-white mb-2" key={key}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-3 col-3 ">
                                                    <img src={Converter.bufferToBase64(work.company.logo)} width="100px"
                                                         height="100px" className="img-fluid" alt="Responsive image"/>
                                                </div>
                                                <div className="col-lg-7 col-md-7 col-sm-8 col-8 ">
                                                    <div className="row">
                                                        <h6>web</h6>
                                                    </div>
                                                    <div className="row">
                                                        <p className="opacity-75">Young engine</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
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
                                    <Link to={{pathname: `/missions/${work._id}`}}
                                          target="_blank">
                                        <div className="container bg-white mb-2">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-3 col-3 ">
                                                    <img src={Converter.bufferToBase64(work.company.logo)}
                                                         width="100px" height="100px" className="img-fluid"
                                                         alt="Responsive image"/>
                                                </div>
                                                <div className="col-lg-7 col-md-7 col-sm-8 col-8 ">
                                                    <div className="row">
                                                        <h6>{work.profile}</h6>
                                                    </div>
                                                    <div className="row">
                                                        <p className="opacity-75">{work.company.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }

    renderOnGoingInternships() {
        let {onGoingInternships} = this.state;
        return (
            <div className="insights">
                <div className="ongoing-activity-wrapper">
                    <div className="header">
                        <b>Internships</b>
                    </div>
                    {onGoingInternships.map((internship, key) => {
                        return (
                            <div className="" key={key}>
                                <div className="row">
                                    <div className="col-2">
                                        <div>
                                            <a href="#"><img src="logo.jpg"
                                                             className="image-cover-rect"/></a>
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <div className="d-inline">{internship.profile}</div>
                                        <div className="dropdown d-inline float-right">
                                            <button className="btn btn-sm dropdown-toggle" type="button"
                                                    id="dropdownMenuButton" data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                <i className="fa fa-bars" aria-hidden="true"></i>
                                            </button>
                                            <div className="dropdown-menu"
                                                 aria-labelledby="dropdownMenuButton">
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
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: "60%"}}>
                                        40% Complete
                                    </div>
                                </div>
                                {/*<div className="m-2" style={{fontSize: "10px"}}>*/}
                                {/*    <span>xx/xx/xxxx</span><span className="float-right">yy/yy/yyyy</span>*/}
                                {/*</div>*/}
                                {/*<div className="m-2">*/}
                                {/*    <div className="task-header row">*/}
                                {/*        <div className="sr-no d-inline-block">*/}
                                {/*            <span>1</span>*/}
                                {/*        </div>*/}
                                {/*        <div className="task-title d-inline-block">*/}
                                {/*            <span>Task Title</span>*/}
                                {/*            <br/>*/}
                                {/*            <span className="task-start-date opacity-50">*/}
                                {/*        xx/yy/zzzz*/}
                                {/*    </span>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="task-uploads">*/}
                                {/*        <div><h5>Uploads</h5></div>*/}
                                {/*        <div className="uploaded-summary">*/}
                                {/*            <div className="row">*/}
                                {/*                <div className="col-1">*/}
                                {/*                    <div className="design">*/}
                                {/*                        <i className="fa fa-circle" aria-hidden="true"></i>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="col-11">*/}
                                {/*                    <div className="row">*/}
                                {/*                        <div className="col-2">*/}
                                {/*                            <div className="position-relative"*/}
                                {/*                                 onClick={this.openFullImage}>*/}
                                {/*                                <input type="image" className="" width="50px"*/}
                                {/*                                       height="50px"*/}
                                {/*                                       src={require("../../../../assets/images/fitness.jpg")}*/}
                                {/*                                />*/}
                                {/*                                <div className="remarked">*/}
                                {/*                                    <i className="fa fa-check text-success fa-2x mt-2"*/}
                                {/*                                       aria-hidden="true"> </i>*/}
                                {/*                                </div>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="remark col-10">*/}
                                {/*                            <div className="upload-status d-inline-block">Approved</div>*/}
                                {/*                            <div className="remark-summary d-inline-block">Good</div>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    renderOnGoingMissions() {
        let {onGoingMissions} = this.state;
        return (
            <div className="">
                <div className="insights">
                    <div className="ongoing-activity-wrapper">
                        <div className="header">
                            <b>Missions</b>
                        </div>
                        {onGoingMissions.length == 0 ? "" : ""}
                        {onGoingMissions.map((mission, key) => {
                            return (
                                <div>
                                    <div className="row">
                                        <div className="col-2">
                                            <div>
                                                <a href="#"><img src="logo.jpg"
                                                                 className="image-cover-rect"/></a>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="d-inline">Work-Title/Profile</div>
                                            <div className="dropdown d-inline float-right">
                                                <button className="btn btn-sm dropdown-toggle" type="button"
                                                        id="dropdownMenuButton" data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                                </button>
                                                <div className="dropdown-menu"
                                                     aria-labelledby="dropdownMenuButton">
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
                                             aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                             style={{width: "60%"}}>
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
                                                    {/* <div className="col-1">
                                                        <div className="design">
                                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </div>
                                                    </div> */}
                                                    <div className="col-11">
                                                        <div className="row">
                                                            <div className="col-2">
                                                                <div className="position-relative"
                                                                >
                                                                    <input type="image" className=""
                                                                           width="50px"
                                                                           height="50px"
                                                                           onClick={this.openFullImage}
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
                                                                    className="upload-status d-inline-block">Approved
                                                                </div>
                                                                <div
                                                                    className="remark-summary d-inline-block">Good
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
                        })}
                    </div>
                </div>
            </div>
        );
    }

    openFullImage = (props) => {
        console.log(props.target);
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

    renderProfileSummary() {
        let {user} = this.props;
        let percentage = 10;
        return (
            <div className="summary-wrapper bg-white border h-100">
                <div className="d-flex justify-content-center">
                    <Image className="rounded-circle"
                           src={Converter.bufferToBase64(user.logo ? user.logo : user.profilePic)}
                           width="100" height="100"/>
                </div>
                <div className="d-flex justify-content-center">
                    <span
                        style={{padding: "3% 0%"}}>
                        <strong>{user.name.first ? user.name.first + " " + user.name.last : user.name}</strong>
                    </span>
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <div><span>Bio</span></div>
                    <div>{user.summary.description}</div>
                </div>
                <div className="d-flex">
                    <div className="d-flex align-items-center mr-3">
                        <div style={{maxWidth: "90px"}}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`}
                                                 styles={buildStyles({
                                                     strokeLinecap: 'butt',
                                                     textSize: '16px',
                                                     pathTransitionDuration: 1,
                                                     pathColor: "rgba(62, 152, 199, 1)",
                                                     textColor: '#f88',
                                                     trailColor: '#d6d6d6',
                                                     backgroundColor: '#3e98c7',
                                                 })}/>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <h6>Complete My Profile</h6>
                        </div>
                        <div>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                    </div>
                </div>
                <div className="mt-2 mb-2">
                    <div>
                        <ProgressBar variant="success" now={percentage} label={`${percentage}%`}/>
                    </div>
                </div>
                <div className="flex-row justify-content-center">
                    <div className="d-flex justify-content-center">
                        {this.renderRating()}
                    </div>
                    <div className="d-flex justify-content-center opacity-50">({user.rating.length} reviews)</div>
                </div>
            </div>

        );
    }

    renderRating = () => {
        let {rating} = this.props.user;
        let cumulativeRating = 0;
        rating.map((rate) => {
            cumulativeRating += rate;
        });
        cumulativeRating = Math.floor(cumulativeRating / rating.length);
        let items = [];
        let i = 0;
        items.push(<strong className="mr-2">{cumulativeRating}</strong>);
        while (i < 5) {
            if (i <= cumulativeRating) {
                items.push(<span><i className="fa fa-star" style={{color: "orange"}} id="star1" aria-hidden="true"></i></span>);
            } else {
                items.push(<span><i className="fa fa-star-o" id="star1" aria-hidden="true"></i></span>);
            }
            i++;
        }
        return items;
    }
}

export default StudentInsight;