/*
 * @author Gaurav Kumar    
*/

import React from 'react';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import Converter from "../../../utilities/Converter";
import ApiAction from "../../../../actions/ApiAction";
import {Link} from "react-router-dom";
import image from './rock.png'
import {Image} from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import OwlCarousel from "react-owl-carousel2";
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import 'react-owl-carousel2/lib/styles.css';
import MissionTask from "./MissionTask";
import MissionInsight from "./MissionInsight";

class StudentInsight extends React.PureComponent {
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
            missionUpload: undefined,
            uploaded: false,
        }
    }

    componentWillMount() {
        let {user} = this.props;
        let {topInternships, topMissions, trending} = this.state;
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
                    let {completedInternships, completedMissions} = this.state;
                    completed.map((work) => {
                        if (work.mode == "internship") {
                            completedInternships.push(work);
                        } else if (work.mode == "mission") {
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
                let onGoingInternships = [];
                let onGoingMissions = [];
                if (response.data.success) {
                    let onGoing = response.data.workList;
                    onGoing.map((activity) => {
                        if (activity.work.mode == "internship") {
                            onGoingInternships.push(activity);
                        } else if (activity.work.mode == "mission") {
                            onGoingMissions.push(activity);
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
        console.log(document.title);
    }

    render() {
        return (
            <div className="main-app">
                <div className="header pl-0">STUDENT DASHBOARD</div>
                <div className="">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mb-lg-0 mb-md-0 mb-3">
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
                </div>
            </div>
        );
    }

    renderCompletedActivity() {

        let {completedInternships, completedMissions, wallet} = this.state;
        let percentage = 10;
        return (
            <div className="completed-insights bg-white ye-border h-100">
                <Link to="edit-profile" className="text-dark">
                    <div className="d-flex p-2 bg-light ye-border ye-hover cursor-pointer">
                        <div className="d-flex align-items-center mr-lg-3 mr-2">
                            <div style={{maxWidth: "40px"}}>
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
                        <div className="d-flex align-items-center">
                            <div className="overflow-hidden" style={{maxHeight: "50px"}}>
                                <div>
                                    <h6 className="font-weight-bold mb-0">Complete My Profile</h6>
                                </div>
                                <div>
                                    <span style={{fontSize: "12px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="row" style={{marginTop: "15px"}}>
                    <div className="col-md-6 col-lg-6">
                        <Link to="completed-Internship">
                            <div className="card text-dark insight-item ye-hover">
                                <div className="row">
                                    <div
                                        className="col-lg-12 col-4 d-flex align-items-center justify-content-center p-4">
                                        <img src={require("../../../../assets/images/insights/intern.png")}
                                             width="50px"
                                             height="50px"/>
                                    </div>
                                    <div className="col-lg-12 col-8 d-flex align-items-center justify-content-center">
                                        <div>
                                            <div className="text-align-center font-weight-bold">
                                                <h6 className="font-weight-bold mb-0 mt-0">INTERNSHIPS COMPLETED</h6>
                                            </div>
                                            <div className="quantity text-align-center">
                                                <h2 className="mb-lg-2 mb-0"
                                                    style={{fontSize: "40px"}}>{completedInternships.length}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <Link to="missions-completed">
                            <div className="card text-dark insight-item ye-hover">
                                <div className="row">
                                    <div
                                        className="col-lg-12 p-4 col-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../../../assets/images/insights/mission.png")}
                                             width="50px"
                                             height="50px"/>
                                    </div>
                                    <div className="col-lg-12 col-8 d-flex justify-content-center align-items-center">
                                        <div>
                                            <div className="text-align-center font-weight-bold">
                                                <h6 className="font-weight-bold mb-0 mt-0">MISSIONS COMPLETED</h6>
                                            </div>
                                            <div className="quantity text-align-center">
                                                <h2 className="mb-lg-2 mb-0"
                                                    style={{fontSize: "40px"}}>{completedMissions.length}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <Link to="total-earnings">
                            <div className="card text-dark insight-item ye-hover">
                                <div className="row">
                                    <div
                                        className="col-lg-12 col-4 p-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../../../assets/images/insights/money.png")} width="50px"
                                             height="50px"/>
                                    </div>
                                    <div className="col-lg-12 col-8 d-flex align-items-center justify-content-center">
                                        <div>
                                            <div className="text-align-center">
                                                <h6 className="font-weight-bold mb-0 mt-0">TOTAL EARNINGS</h6>
                                            </div>
                                            <div className="quantity text-align-center">
                                                <h2 className="mb-lg-2 mb-0" style={{fontSize: "40px"}}><i
                                                    className="fas fa-rupee-sign"></i> {wallet ? wallet.amount : 0}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <Link to="total-earnings">
                            <div className="card text-dark insight-item ye-hover">
                                <div className="row">
                                    <div
                                        className="col-lg-12 col-4 p-4 d-flex align-items-center justify-content-center">
                                        <img src={require("../../../../assets/images/insights/money.png")} width="50px"
                                             height="50px"/>
                                    </div>
                                    <div className="col-lg-12 col-8 d-flex justify-content-center align-items-center">
                                        <div>
                                            <div className="text-align-center">
                                                <h6 className="font-weight-bold mb-0 mt-0">OFFERS AVAILED</h6>
                                            </div>
                                            <div className="quantity text-align-center">
                                                <h2 className="mb-lg-2 mb-0" style={{fontSize: "40px"}}><i
                                                    className="fas fa-rupee-sign"></i> {wallet ? wallet.amount : 0}</h2>
                                            </div>
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
            nav: false,
            rewind: false,
            margin: 30,
            loop: false,
            autoPlay: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1.5,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: false,
                },
                1000: {
                    items: 4,
                }
            }
        };

        let {trending} = this.state;
        console.log(trending)
        return (
            <div className="ye-border mt-4 bg-white">
                <div className="sub-header pl-2" style={{paddingBottom: "5px"}}>TRENDING</div>
                <div className="trending-section">
                    {trending.length > 0 ?
                        <OwlCarousel
                            className="owl-theme owl-carousel"
                            options={options}
                            ref="car">
                            {trending.map(ar =>
                                <div className="trending-item ye-border ye-hover flex-column">
                                    <div className="upper-item d-flex justify-content-center m-4">
                                        <img src={ar.company.logo ?
                                            Converter.bufferToBase64(ar.company.logo)
                                            :
                                            require("../../../../assets/images/avatar/company.png")}
                                             className="border rounded-circle"
                                             width="70px" height="70px"
                                             style={{width: "70px"}}/>
                                    </div>
                                    {/*<img src={require("./rock.png")} width="100px" height="100px" className="rounded-circle "/>*/}
                                    <h4 className="overflow-hidden overflow-auto w-100 d-flex justify-content-center">{ar.profile}</h4>
                                    <p className="d-flex justify-content-center">{ar.company.name}</p>
                                    <p className="d-flex justify-content-center">{ar.mode.charAt(0).toUpperCase() + ar.mode.slice(1)}</p>
                                    <p className="d-flex justify-content-center">{ar.taskno}</p>
                                    <p className="d-flex justify-content-center">{this.calculateDaysLeft(ar.duration.last)}</p>
                                    <h5 className="d-flex justify-content-center"><strong>{ar.stipend}</strong></h5>
                                </div>
                            )}
                        </OwlCarousel>
                        :
                        <div>
                            No Items
                        </div>
                    }
                </div>
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
        console.log(onGoingInternships)
        return (
            <div className="insights mt-4 ye-border">
                <div className="ongoing-activity-wrapper">
                    <div className="sub-header">
                        ONGOING INTERNSHIPS
                    </div>
                    <div className="ongoing-section">
                        {onGoingInternships.map((internship, key) => {
                            let ms = new Date().getTime() - new Date(internship.work.duration.start).getTime();
                            let days = ((((ms / 1000) / 60) / 60) / 24);
                            let expectedDays = internship.work.duration.weeks * 7;
                            let progress = Math.ceil((days * 100) / expectedDays);
                            return (
                                <div className="col-12" key={key}>
                                    <div className="d-flex ye-border mb-4 p-2 ye-hover row">

                                        <div className="col-3 d-flex border-right align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img src={Converter.bufferToBase64(internship.company.logo)}
                                                         className="rounded-circle" width="40px" height="40px"/>
                                                </div>
                                            </div>
                                            <div className="d-flex pl-2 pr-2 align-items-center">
                                                {/*<Link to={`/internships/${internship.work._id}`}>*/}
                                                {/*    <div className="d-inline">{internship.work.profile}</div>*/}
                                                {/*</Link>*/}
                                                <div className=" pl-2 pr-2 flex-column align-items-center">
                                                    <div className="opacity-60"
                                                         style={{fontSize: "10px", fontWeight: 300}}>Internship Profile:
                                                    </div>
                                                    <div
                                                        style={{lineHeight: "1em"}}>{internship.work.profile} Development
                                                    </div>
                                                </div>
                                                <div className="dropdown float-right d-none">
                                                    <button className="btn btn-sm dropdown-toggle" type="button"
                                                            id="dropdownMenuButton" data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                                    </button>
                                                    <div className="dropdown-menu"
                                                         aria-labelledby="dropdownMenuButton">
                                                        {/*<a className="dropdown-item" href="#">a</a>*/}
                                                        {/*<a className="dropdown-item" href="#">b</a>*/}
                                                        {/*<a className="dropdown-item" href="#">c</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2 border-right d-flex align-items-center">
                                            <div className="pl-2 pr-2 flex-column align-items-center">
                                                <div className="opacity-60"
                                                     style={{fontSize: "10px", fontWeight: 300}}>Company:
                                                </div>
                                                <div style={{fontSize: "13.5px"}}>{internship.company.name}</div>
                                            </div>
                                        </div>

                                        <div className="col-7 align-items-center flex-column">
                                            <div className="flex-fill" style={{paddingTop: "4px"}}>
                                                <div className="progress m-2 h-7">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: progress}}>
                                                        {/*{`${progress} % Complete`}*/}
                                                    </div>
                                                </div>
                                                <div className="m-2" style={{fontSize: "10px"}}>
                                                    <span>{internship.work.duration.start.split("T")[0]}</span><span
                                                    className="float-right">{internship.work.duration.end.split("T")[0]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*</div>*/}
                                        {/*// <div className="progress m-2 d-none">*/}
                                        {/*//     <div className="progress-bar progress-bar-success progress-bar-striped"*/}
                                        {/*//          role="progressbar"*/}
                                        {/*//          aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"*/}
                                        {/*//          style={{width: progress}}>*/}
                                        {/*//         {`${progress} % Complete`}*/}
                                        {/*//     </div>*/}
                                        {/*// </div>*/}
                                        {/*// <div className="m-2 d-none" style={{fontSize: "10px"}}>*/}
                                        {/*//     <span>{internship.work.duration.start.split("T")[0]}</span><span*/}
                                        {/*//     className="float-right">{internship.work.duration.end.split("T")[0]}</span>*/}
                                        {/*// </div>*/}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    renderOnGoingMissions() {
        let {onGoingMissions, missionUpload, uploaded} = this.state;
        return (
            <div className="">
                <div className="insights ye-border mt-4 mb-4">
                    <div className="ongoing-activity-wrapper">
                        <div className="sub-header">
                            ONGOING MISSIONS
                        </div>
                        <div className="ongoing-section">
                            {onGoingMissions.length == 0 ? "" : ""}
                            {/*{onGoingMissions.map((mission, key) => {*/}
                            {/*    let ms = new Date().getTime() - new Date(mission.work.duration.start).getTime();*/}
                            {/*    let days = ((((ms / 1000) / 60) / 60) / 24);*/}
                            {/*    let expectedDays = mission.work.duration.weeks * 7;*/}
                            {/*    let progress = Math.ceil((days * 100) / expectedDays);*/}
                            {/*    return (*/}
                            {/*        <div key={key} className="border-bottom mb-2">*/}

                            {/*            <div className="d-flex">*/}

                            {/*                <div className="">*/}
                            {/*                    <div>*/}
                            {/*                        <img src={Converter.bufferToBase64(mission.company.logo)}*/}
                            {/*                             className="image-cover-rect" width="50px" height="50px"/>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}

                            {/*                <div className="flex-column pl-2 pr-2">*/}
                            {/*                    <Link to={`/missions/${mission.work._id}`}>*/}
                            {/*                        <div className="d-inline">{mission.work.profile}</div>*/}
                            {/*                    </Link>*/}
                            {/*                    <div className="dropdown d-none float-right">*/}
                            {/*                        <button className="btn btn-sm dropdown-toggle" type="button"*/}
                            {/*                                id="dropdownMenuButton" data-toggle="dropdown"*/}
                            {/*                                aria-haspopup="true"*/}
                            {/*                                aria-expanded="false">*/}
                            {/*                            <i className="fa fa-bars" aria-hidden="true"></i>*/}
                            {/*                        </button>*/}
                            {/*                        <div className="dropdown-menu"*/}
                            {/*                             aria-labelledby="dropdownMenuButton">*/}
                            {/*                            <a className="dropdown-item" href="#">a</a>*/}
                            {/*                            <a className="dropdown-item" href="#">b</a>*/}
                            {/*                            <a className="dropdown-item" href="#">c</a>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div>{mission.company.name}</div>*/}
                            {/*                </div>*/}
                            {/*                <div className="flex-fill">*/}
                            {/*                    <div className="progress m-2">*/}
                            {/*                        <div*/}
                            {/*                            className="progress-bar progress-bar-success progress-bar-striped"*/}
                            {/*                            role="progressbar"*/}
                            {/*                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"*/}
                            {/*                            style={{width: progress}}>*/}
                            {/*                            {`${progress}% Complete`}*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="m-2" style={{fontSize: "10px"}}>*/}
                            {/*                        <span>{mission.work.duration.start.split("T")[0]}</span><span*/}
                            {/*                        className="float-right">{mission.work.duration.end.split("T")[0]}</span>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="progress m-2 d-none">*/}
                            {/*                <div className="progress-bar progress-bar-success progress-bar-striped"*/}
                            {/*                     role="progressbar"*/}
                            {/*                     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"*/}
                            {/*                     style={{width: progress}}>*/}
                            {/*                    {`${progress}% Complete`}*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="m-2 d-none" style={{fontSize: "10px"}}>*/}
                            {/*                <span>{mission.work.duration.start.split("T")[0]}</span><span*/}
                            {/*                className="float-right">{mission.work.duration.end.split("T")[0]}</span>*/}
                            {/*            </div>*/}
                            {/*            {mission.tasks.map((task, key) => <MissionTask activity={mission} task={task}*/}
                            {/*                                                           index={key}*/}
                            {/*                                                           key={key}/>)}*/}
                            {/*        </div>*/}
                            {/*    );*/}
                            {/*})}*/}
                            {onGoingMissions.map((mission, key) => <MissionInsight mission={mission} key={key}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    updateMissionUpload = (event) => {
        if (event.target.name == "document") {
            Converter.imageFileToBase64(event.target.files[0])
                .then((base64) => {
                    this.setState({missionUpload: base64});
                });
        }
    }

    sendMissionUpload = (mission, taskKey) => {
        if (mission) {
            let doc = {
                document: this.state.missionUpload
            };
            mission.tasks[taskKey].uploads.push(doc);
            ApiAction.uploadDocumentForTask(mission)
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

    renderProfileSummary() {
        let {user} = this.props;
        let percentage = 0;
        let progress = 1;
        let level = 0;
        if (user.contact.email.length > 0 && user.contact.mobile.length > 0 && user.gender.length > 0 && user.dob.length > 0) {
            percentage = 20;
        }
        if (user.preferences.internship.length > 0) {
            percentage += 20;
        }
        if (user.preferences.mission.length > 0) {
            percentage += 20;
        }

        if ((user.college && user.college.length > 0)&& user.skills.length>0 && user.experiences.length>0 && user.social) {
            percentage +=40;
        }

        if(percentage>=100){
            progress = 2;
            level=1;
        }


        return (
            <div className=" bg-white ye-border h-100">
                <div className="d-flex justify-content-center">
                    <div className="rounded w-100 position-relative"
                         style={{backgroundImage: "url(" + require('./Mobile4.jpg') + ")", height: "180px"}}>
                        <Link to="/profile">
                            {user.logo || user.profilePic ?
                                <Image className="rounded-circle position-absolute m-auto ye-hover"
                                       src={Converter.bufferToBase64(user.logo ? user.logo : user.profilePic)}
                                       height="100px" width="100px"
                                       style={{
                                           display: "block",
                                           top: "71%",
                                           left: "42%",
                                           border: "5px solid orange"
                                       }}></Image>
                                : <Image className="rounded-circle position-absolute m-auto ye-hover"
                                         src={require("./rock.png")}
                                         height="100px" width="100px"
                                         style={{
                                             display: "block",
                                             top: "71%",
                                             left: "42%",
                                             border: "5px solid orange"
                                         }}></Image>}
                        </Link>

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
                    <div className="flex-column justify-content-center mb-4">
                        <div className="d-flex text-align-center justify-content-center">Bio</div>
                        <div style={{fontSize: "12px", opacity: "0.75"}}>{user.summary.description}Lorem Ipsum is simply
                            dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            standard dummy text ever since the 1500s, when standard dummy text ever since the 1500s,
                            when standa
                        </div>
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
                        <div className="d-flex">
                            <div className="opacity-60">LEVEL {level}</div>
                            <div className="justify-content-end ml-auto opacity-60">{level}/10</div>
                        </div>
                        <div>
                            <ProgressBar variant="success" now={progress} className="h-7"/>
                        </div>
                    </div>
                    <div className="flex-row justify-content-center">
                        <div className="d-flex justify-content-center">
                            {this.renderRating()}
                        </div>
                        <div className="d-flex justify-content-center opacity-50 pt-1">({user.rating.length} reviews)</div>
                    </div>
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
        // items.push(<strong className="mr-2">{cumulativeRating>0?cumulativeRating:0}</strong>);
        while (i < 5) {
            if (i <= cumulativeRating) {
                items.push(<span className="pr-1 opacity-60"><i className="fa fa-star" style={{color: "orange"}} id="star1" aria-hidden="true"></i></span>);
            } else {
                items.push(<span className="pr-1 opacity-60"><i className="fa fa-star-o" id="star1" aria-hidden="true"></i></span>);
            }
            i++;
        }
        return items;
    }
}

export default StudentInsight;