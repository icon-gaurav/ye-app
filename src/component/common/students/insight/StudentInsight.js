/*
 * @author Gaurav Kumar    
*/

import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import Converter from "../../../utilities/Converter";
import ApiAction from "../../../../actions/ApiAction";
import { Link } from "react-router-dom";
import image from './rock.png'
import {Image} from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import OwlCarousel from "react-owl-carousel2";
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import 'react-owl-carousel2/lib/styles.css';

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
// import jQuery from 'jquery';
//
// window.jQuery = jQuery;
// require('owl.carousel');

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
            trending: [],
            wallet: undefined,
        }
    }

    componentWillMount() {
        let {user} = this.props;
        let {topInternships, topMissions, trending, onGoingInternships, onGoingMissions} = this.state;
        console.log(user)
        ApiAction.getTypeWorks("top")
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    topInternships = response.data.topInternships;
                    topMissions = response.data.topMissions;
                    trending = topInternships;
                    trending.concat(topMissions);
                    this.setState({
                        trending: trending,
                        topInternships: topInternships,
                        topMissions: topMissions
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
                    let { completedInternships, completedMissions } = this.state;
                    completed.map((work) => {
                        if (work.mode == "internship") {
                            completedInternships.push(work);
                        } else if (work.mode == "missions") {
                            completedMissions.push(work);
                        }
                    });
                    this.setState({ completedInternships: completedInternships, completedMissions: completedMissions });
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
                    onGoing.map((activity) => {
                        if (activity.work.mode == "internship") {
                            onGoingInternships.push(activity);
                        } else if (activity.work.mode == "missions") {
                            onGoingMissions.push(activity);
                        }
                    });
                    this.setState({ onGoingInternships: onGoingInternships, onGoingMissions: onGoingMissions });
                }
            })
            .catch((error) => {
                console.log(error);
            });

        ApiAction.getWallet(user)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({ wallet: response.data.wallet });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        document.title = "Insights";
        console.log(document.title);
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
                    <div className="col-md-12 col-lg-12 col-12">
                        {this.renderOnGoingInternships()}
                        {this.renderOnGoingMissions()}
                    </div>
                    {/*<div className="col-lg-4 col-12">*/}
                    {/*    {this.renderFeatured()}*/}
                    {/*</div>*/}
                    {this.state.fullImage ? this.renderFullImage() : ""}
                </div>
            </React.Fragment>
        );
    }

    renderCompletedActivity() {

        let {completedInternships, completedMissions, wallet} = this.state;
        let percentage = 10;
        return (
            <div className="insights border h-100 p-4">
                <div className="d-flex">
                    <div className="d-flex align-items-center mr-3">
                        <div style={{maxWidth: "70px"}}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`}
                                                 styles={buildStyles({
                                                     strokeLinecap: 'butt',
                                                     textSize: '25px',
                                                     pathTransitionDuration: 1,
                                                     pathColor: "#4CAF50",
                                                     textColor: '#f88',
                                                     trailColor: '#d6d6d6',
                                                     backgroundColor: '#3e98c7',
                                                 })}/>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <h6 className="font-weight-bold">Complete My Profile</h6>
                        </div>
                        <div>
                            <span style={{fontSize: "12px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <Link to="completed-Internship">
                            <div className="card text-dark insight-item">
                                <div className="card-body row ">
                                    <div
                                        className="m-auto card-image col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../../../assets/images/insights/intern.png")} width="50px"
                                             height="50px"/>
                                    </div>
                                    <div className="col-12">
                                        <div className="card-title text-align-center font-weight-bold">
                                            <h6 className="font-weight-bold">INTERNSHIPS COMPLETED</h6>
                                        </div>
                                        <div className="quantity text-align-center">
                                            <h2 style={{fontSize: "40px"}}>{completedInternships.length}</h2>
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
                                    <div
                                        className="m-auto card-image col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../../../assets/images/insights/mission.png")}
                                             width="50px"
                                             height="50px"/>
                                    </div>
                                    <div className="col-12 flex-row">
                                        <div className="card-title text-align-center font-weight-bold">
                                            <h6 className="font-weight-bold">MISSIONS COMPLETED</h6>
                                        </div>
                                        <div className="quantity text-align-center">
                                            <h2 style={{fontSize: "40px"}}>{completedMissions.length}</h2>
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
                                    <div
                                        className="m-auto card-image col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../../../assets/images/insights/money.png")} width="50px"
                                             height="50px"/>
                                    </div>
                                    <div className="col-12">
                                        <div className="card-title text-align-center">
                                            <h6 className="font-weight-bold">TOTAL EARNINGS</h6>
                                        </div>
                                        <div className="quantity text-align-center">
                                            <h2 style={{fontSize: "40px"}}><i
                                                className="fas fa-rupee-sign"></i> {wallet ? wallet.amount : 0}</h2>
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
                                    <div
                                        className="m-auto card-image col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../../../assets/images/insights/money.png")} width="50px"
                                             height="50px"/>
                                    </div>
                                    <div className="col-12">
                                        <div className="card-title text-align-center">
                                            <h6 className="font-weight-bold">TOTAL EARNINGS</h6>
                                        </div>
                                        <div className="quantity text-align-center">
                                            <h2 style={{fontSize: "40px"}}><i
                                                className="fas fa-rupee-sign"></i> {wallet ? wallet.amount : 0}</h2>
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
        const tasks = [
            {
                task: 'GET SALES AND EARN COMMISION',
                company: 'YOUNG ENGINE',
                mode: 'Mission 1',
                taskno: 'TASK1',
                noofdays: '13 DAYS TO APPLY',
                amount: ' INR 500'
            },
            {
                task: 'DO DIGITAL MARKETING AND EARN',
                company: 'YOUNG ENGINE',
                mode: 'Mission 2',
                taskno: 'TASK2',
                noofdays: '14 DAYS TO APPLY',
                amount: ' INR 550'
            },
            {
                task: 'MAKE PROJECT ON CLEAN INDIA',
                company: 'YOUNG ENGINE',
                mode: 'Mission 3',
                taskno: 'TASK3',
                noofdays: '13 DAYS TO APPLY',
                amount: ' INR 900'
            },
            {
                task: 'SELL PRODUCTS AND EARN COMMISION',
                company: 'YOUNG ENGINE',
                mode: "mission",
                taskno: 'TASK4',
                noofdays: '13 DAYS TO APPLY',
                amount: ' INR 300'
            }
        ];
        let options = {
            items: 4,
            nav: true,
            rewind: true,
            margin: 22,
            loop: true,
            autoPlay: true,
        };

        let {trending} = this.state;
        console.log(trending)
        return (
            <div className="trending-section border mt-4 p-4">
                <div className="pt-1 pb-3 pl-2">TRENDING</div>
                {trending.length > 0 ?
                    <OwlCarousel
                        className="owl-theme owl-carousel"
                        options={options}
                        ref="car"
                        lazyContent={true}>
                        {trending.map(ar =>
                            <div className="trending-item">
                                <div className="upper-item d-flex justify-content-center m-4">
                                    <img src={Converter.bufferToBase64(ar.company.logo)}
                                         className=" rounded-circle"
                                         width="70px" height="70px"
                                         style={{width: "70px"}}/>
                                </div>
                                {/*<img src={require("./rock.png")} width="100px" height="100px" className="rounded-circle "/>*/}
                                <h4 className="overflow-hidden">{ar.profile}</h4>
                                <p>{ar.company.name}</p>
                                <p>{ar.mode.charAt(0).toUpperCase() + ar.mode.slice(1)}</p>
                                <p>{ar.taskno}</p>
                                <p>{this.calculateDaysLeft(ar.duration.last)}</p>
                                <h5><strong>{ar.stipend}</strong></h5>
                            </div>
                        )}
                    </OwlCarousel>
                    :
                    <div>
                        No Items
                    </div>
                }
                {/*<div className="trending-section border mt-4">*/}
                {/*    <div className="row m-1">*/}
                {/*        <div className="trending-item m-3 p-3 col-lg-2 col-sm-12">*/}
                {/*            <div className="upper-item d-flex justify-content-center m-4">*/}
                {/*                <img src={require("../../../../assets/images/response/suitcase.png")}*/}
                {/*                     className=" rounded-circle"*/}
                {/*                     width="70px" height="70px"/>*/}
                {/*            </div>*/}
                {/*            <div className="lower-item flex-column justify-content-center mt-5">*/}
                {/*                <div className="text-align-center ">Burger</div>*/}
                {/*                <div className="text-align-center">20</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="trending-item m-3 p-3 col-lg-2 col-sm-12">*/}
                {/*            <div className="upper-item d-flex justify-content-center m-4">*/}
                {/*                <img src={require("../../../../assets/images/response/suitcase.png")}*/}
                {/*                     className=" rounded-circle"*/}
                {/*                     width="70px" height="70px"/>*/}
                {/*            </div>*/}
                {/*            <div className="lower-item flex-column justify-content-center mt-5">*/}
                {/*                <div className="text-align-center ">Burger</div>*/}
                {/*                <div className="text-align-center">20</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="trending-item m-3 p-3 col-lg-2 col-sm-12">*/}
                {/*            <div className="upper-item d-flex justify-content-center m-4">*/}
                {/*                <img src={require("../../../../assets/images/response/suitcase.png")}*/}
                {/*                     className=" rounded-circle"*/}
                {/*                     width="70px" height="70px"/>*/}
                {/*            </div>*/}
                {/*            <div className="lower-item flex-column justify-content-center mt-5">*/}
                {/*                <div className="text-align-center ">Burger</div>*/}
                {/*                <div className="text-align-center">20</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }

    calculateDaysLeft = (last) => {
        let ms = new Date(last).getTime() - new Date().getTime();
        let days = Math.ceil((((ms / 1000) / 60) / 60) / 24);
        return `${days} DAYS TO APPLY`;
    }

    renderFeatured() {
        let { topMissions, topInternships } = this.state;
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
                                    <Link to={{ pathname: `/missions/${work._id}` }}
                                        target="_blank">
                                        <div className="container bg-white mb-2" key={key}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-3 col-3 ">
                                                    <img src={Converter.bufferToBase64(work.company.logo)} width="100px"
                                                        height="100px" className="img-fluid" alt="Responsive image" />
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
                                    <Link to={{ pathname: `/missions/${work._id}` }}
                                        target="_blank">
                                        <div className="container bg-white mb-2">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-3 col-3 ">
                                                    <img src={Converter.bufferToBase64(work.company.logo)}
                                                        width="100px" height="100px" className="img-fluid"
                                                        alt="Responsive image" />
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
        console.log(onGoingInternships)
        return (
            <div className="insights col-12 mt-4 border">
                <div className="ongoing-activity-wrapper">
                    <div className="header">
                        <b>Internships</b>
                    </div>
                    {onGoingInternships.map((internship, key) => {
                        let ms = new Date().getTime() - new Date(internship.work.duration.start).getTime();
                        let days = ((((ms / 1000) / 60) / 60) / 24);
                        let expectedDays = internship.work.duration.weeks * 7;
                        let progress = Math.ceil((days * 100) / expectedDays);
                        return (
                            <div className="" key={key}>
                                <div className="d-flex">
                                    <div className="">
                                        <div>
                                            <img src={Converter.bufferToBase64(internship.company.logo)}
                                                 className="image-cover-rect" width="50px" height="50px"/>
                                        </div>
                                    </div>
                                    <div className="col-11">
                                        <div className="d-inline">{internship.work.profile}</div>
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
                                        {internship.company.name}
                                    </div>
                                </div>
                                <div className="progress m-2">
                                    <div className="progress-bar progress-bar-success progress-bar-striped"
                                         role="progressbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: progress}}>
                                        {`${progress} % Complete`}
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
        let { onGoingMissions } = this.state;
        return (
            <div className="">
                <div className="insights border col-12 mt-4 mb-4">
                    <div className="ongoing-activity-wrapper">
                        <div className="header">
                            <b>Missions</b>
                        </div>
                        {onGoingMissions.length == 0 ? "" : ""}
                        {onGoingMissions.map((mission, key) => {
                            let ms = new Date().getTime() - new Date(mission.work.duration.start).getTime();
                            let days = ((((ms / 1000) / 60) / 60) / 24);
                            let expectedDays = mission.work.duration.weeks * 7;
                            let progress = Math.ceil((days * 100) / expectedDays);
                            return (
                                <div key={key}>
                                    <div className="d-flex">
                                        <div className="">
                                            <div>
                                                <a href="#"><img src="logo.jpg"
                                                    className="image-cover-rect" /></a>
                                            </div>
                                        </div>
                                        <div className="col-11">
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
                                            {mission.company.name}
                                        </div>
                                    </div>
                                    <div className="progress m-2">
                                        <div className="progress-bar progress-bar-success progress-bar-striped"
                                             role="progressbar"
                                             aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                             style={{width: progress}}>
                                            {`${progress}% Complete`}
                                        </div>
                                    </div>
                                    <div className="m-2" style={{fontSize: "10px"}}>
                                        <span>{mission.work.duration.start.split("T")[0]}</span><span
                                        className="float-right">{mission.work.duration.end.split("T")[0]}</span>
                                    </div>
                                    <div className="m-2">
                                        <div className="task-header row">
                                            <div className="sr-no d-inline-block">
                                                <span>1</span>
                                            </div>
                                            <div className="task-title d-inline-block">
                                                <span>Task Title</span>
                                                <br />
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
        this.setState({ fullImage: true, image: props.target.src });
    }

    renderFullImage() {
        return (
            <Modal show={this.state.fullImage} onHide={() => this.setState({ fullImage: false })}>
                <ModalHeader closeButton>
                    <Modal.Title>Verify Uploaded Document</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="container-fluid">
                        <div>
                            <img src={this.state.image} width="100%" />
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
        let { user } = this.props;
        let percentage = 10;
        return (
            <div className=" bg-white border h-100">
                <div className="d-flex justify-content-center">
                    <div className="rounded w-100 position-relative"
                         style={{backgroundImage: "url(" + require('./Mobile4.jpg') + ")"}}>
                        {user.logo || user.profilePic ?
                            <Image className="rounded-circle position-relative m-auto"
                                   src={Converter.bufferToBase64(user.logo ? user.logo : user.profilePic)}
                                   height="100px" width="100px"
                                   style={{display: "block", top: "50%", border: "5px solid orange"}}></Image>
                            : <Image className="rounded-circle position-relative m-auto"
                                     src={require("./rock.png")}
                                     height="100px" width="100px"
                                     style={{display: "block", top: "50%", border: "5px solid orange"}}></Image>}

                    </div>
                    {/*<Image className="rounded-circle"*/}
                    {/*       src={Converter.bufferToBase64(user.logo ? user.logo : user.profilePic)}*/}
                    {/*       width="100" height="100"/>*/}
                </div>
                <div className="summary-wrapper mt-4">
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
                    {/*<div className="d-flex">*/}
                    {/*    <div className="d-flex align-items-center mr-3">*/}
                    {/*        <div style={{maxWidth: "90px"}}>*/}
                    {/*            <CircularProgressbar value={percentage} text={`${percentage}%`}*/}
                    {/*                                 styles={buildStyles({*/}
                    {/*                                     strokeLinecap: 'butt',*/}
                    {/*                                     textSize: '16px',*/}
                    {/*                                     pathTransitionDuration: 1,*/}
                    {/*                                     pathColor: "rgba(62, 152, 199, 1)",*/}
                    {/*                                     textColor: '#f88',*/}
                    {/*                                     trailColor: '#d6d6d6',*/}
                    {/*                                     backgroundColor: '#3e98c7',*/}
                    {/*                                 })}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="">*/}
                    {/*        <div>*/}
                    {/*            <h6>Complete My Profile</h6>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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

            </div>

        );
    }

    renderRating = () => {
        let { rating } = this.props.user;
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
                items.push(<span><i className="fa fa-star" style={{ color: "orange" }} id="star1" aria-hidden="true"></i></span>);
            } else {
                items.push(<span><i className="fa fa-star-o" id="star1" aria-hidden="true"></i></span>);
            }
            i++;
        }
        return items;
    }
}

export default StudentInsight;