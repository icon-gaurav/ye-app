/*
 * @author Gaurav Kumar    
*/

import React, { Component } from 'react';
import '../../assets/stylesheet/IndividualWork.css';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ApiAction from "../../actions/ApiAction";
import { Link } from "react-router-dom";
import Converter from "../utilities/Converter";
import Loader from "react-loader-spinner";
import image from "./Mobile13.jpg"
class IndividualWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            work: null,
            windowSize: 720,
            modalShow: false
        };
    }

    componentWillMount() {
        // ApiAction.getWork(this.props.match.params.id)
        //     .then((response) => {
        //         if (response.data.success) {
        //             this.setState({work: response.data.work});
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        this.setState({
            work: {
<<<<<<< HEAD
                _id:"vrjnvojwncjhevnow",
=======
                _id: "vrjnvojwncjhevnow",
>>>>>>> 65737580c17e4d082a622cafcfe02d6746502d51
                mode: "mission",
                company: "young engine mission",
                profile: "web profile mission",
                duration: {
<<<<<<< HEAD
                    start: new Date(),
                    end: new Date(new Date().getTime() + 2000000000),
                    last: new Date()
=======
                    start: new Date().toString(),
                    end: new Date(new Date().getTime() + 2000000000),
                    last: new Date().toString()
>>>>>>> 65737580c17e4d082a622cafcfe02d6746502d51
                },
                vacancy: 4,
                stipend: 5000,
                workDetails: "here is work details mission",
                skillSet: ["skill1", "skill2", "skill3"],
                location: "Home mission"
<<<<<<< HEAD
            },
            windowSize: window.innerWidth
=======
            }
>>>>>>> 65737580c17e4d082a622cafcfe02d6746502d51
        });
        // this.setState({windowSize: window.innerWidth});
        // window.addEventListener("resize", this.windowResizeHandler);
    }

    windowResizeHandler = () => {
        this.setState({ windowSize: window.innerWidth });
    }

    calculateDuration = (start, end) => {
        let ms = new Date(end).getTime() - new Date(start).getTime();
        let days = Math.floor((((ms / 1000) / 60) / 60) / 24);
        let weeks = Math.floor(days / 7);
        days = days % 7;
        let result = weeks > 0 ? weeks + " Weeks " : "";
        result += days > 0 ? days + " Days " : "";
        return result;
    }

    render() {
        let { work } = this.state;
        if (work) {
            return this.renderDetails();
        } else {
            return (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <Loader type="Plane" color="#00BFFF"
                        height="100"
                        width="100" />
                </div>
            );
        }
    }

    renderDetails() {
        let { work } = this.state;
        return (
            <div className="main-app">
                <header className="header">WORK DETAILS</header>
                <div className="row" >
                    <div className="col-lg-9 col-md-9 col-12">
                        <div className="bg-white ye-border">
                            <div className="internship-detail">
                                <div className="item work-meta">
<<<<<<< HEAD
                                    <div style={{backgroundColor: "#1A2844", color:'white'}}>
=======
                                    <div style={{ backgroundColor: "#aeff4c" }}>
>>>>>>> 65737580c17e4d082a622cafcfe02d6746502d51
                                        <div className="d-flex justify-content-center align-items-center p-5">
                                            <div>
                                                <img src={work.company.logo ? Converter.bufferToBase64(work.company.logo) :
                                                    require("../../assets/images/avatar/company.png")}
                                                    className="rounded-circle"
                                                    width="75"
                                                    height="75" />
                                                <div className="font-13 opacity-75 pt-2">
                                                    {work.company.name}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pl-lg-5 pr-lg-5 pb-5">
                                            <div className="row pl-5 pr-5">
                                                <div className="col-lg-3 col-md-6 col-6">
                                                    <div className="justify-content-center">
                                                        <div className="d-flex">
                                                            <div className="pr-1">
                                                                <i className="fas fa-map-marker-alt"></i>
                                                            </div>
                                                            <div className="">Location</div>
                                                        </div>
                                                        <div className="opacity-60">
                                                            {work.location}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-6">
                                                    <div className="justify-content-center">
                                                        <div className="d-flex">
                                                            <div className="pr-1">
                                                                <i className="fa fa-inr"></i>
                                                            </div>
                                                            <div className="">Stipend</div>
                                                        </div>
                                                        <div className="opacity-60">
                                                            Rs. {work.stipend}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-6">
                                                    <div className="justify-content-center">
                                                        <div className="d-flex">
                                                            <div className="pr-1">
                                                                <i className="fa fa-calendar"></i>
                                                            </div>
                                                            <div className="">Duration</div>
                                                        </div>
                                                        <div className="opacity-60">
                                                            {work.duration.weeks} weeks
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-6">
                                                    <div className="justify-content-center">
                                                        <div className="d-flex">
                                                            <div className="pr-1">
                                                                <i className="fa fa-clock-o"></i>
                                                            </div>
                                                            <div className="" style={{ minWidth: "fit-content" }}>Last
                                                                Date
                                                            </div>
                                                        </div>
<<<<<<< HEAD
                                                        {/* <div className="opacity-60" style={{minWidth: "fit-content"}}>
=======
                                                        <div className="opacity-60" style={{ minWidth: "fit-content" }}>
>>>>>>> 65737580c17e4d082a622cafcfe02d6746502d51
                                                            {work.duration.last.split("T")[0]}
                                                        </div> */}
                                                        <div className="opacity-60" style={{minWidth: "fit-content"}}>
                                                            2/9/19
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*    <div className="header row">*/}
                                    {/*        <div className="logo-wrapper">*/}
                                    {/*            <div className="img-wrapper rounded-circle">*/}
                                    {/*                <img src={Converter.bufferToBase64(work.company.logo)}*/}
                                    {/*                     className="rounded-circle"*/}
                                    {/*                     width="75"*/}
                                    {/*                     height="75"/>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="work-profile">*/}
                                    {/*            <div className="profile">*/}
                                    {/*                <h3>{work.profile}</h3>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="company">*/}
                                    {/*                <span>{work.company.name}</span>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="work-specs border">*/}
                                    {/*        {this.renderWorkSpecMobile(work)}*/}
                                    {/*        {this.renderWorkSpecDesktop(work)}*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="ye-border">*/}
                                    <div className="work-details flex-column justify-content-center"
                                        style={{ padding: "2% 5% 0% 5%" }}>
                                        <div className="about-the-program">
                                            <div className="internship-header">
                                                <div className="flex-column">
                                                    <h4 className="mb-0 pb-2 font-16 letter-spacing-1 font-weight-400">ABOUT
                                                        THE PROGRAM</h4>
                                                    <div style={{ width: "8%" }}>
                                                        <hr className="mb-0 mt-0 pb-0 pt-0"
                                                            style={{ border: "1px solid rgb(255,145,54)" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="work-p">{work.workDetails}Lorem Ipsum is simply dummy text of
                                                the printing
                                                and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type
                                                and
                                                scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining
                                                essentially
                                                unchanged. It was popularised in the 1960s with the release of Letraset
                                                sheets
                                                containing Lorem Ipsum passages, and more recently with desktop
                                                publishing
                                                software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                        </div>
                                        <div className="about-company">
                                            <div className="internship-header">
                                                <div className="flex-column">
                                                    <h4 className="mb-0 pb-2 font-16 letter-spacing-1 font-weight-400">ABOUT
                                                        THE COMPANY</h4>
                                                    <div style={{ width: "8%" }}>
                                                        <hr className="mb-0 mt-0 pb-0 pt-0"
                                                            style={{ border: "1px solid rgb(255,145,54)" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<h4>About Company</h4>*/}
                                            <p className="work-p">{work.company.name}</p>
                                        </div>
                                        <div className="skiils">
                                            <div className="internship-header">
                                                <div className="flex-column">
                                                    <h4 className="mb-0 pb-2 font-16 letter-spacing-1 font-weight-400">SKILLS</h4>
                                                    <div style={{ width: "8%" }}>
                                                        <hr className="mb-0 mt-0 pb-0 pt-0"
                                                            style={{ border: "1px solid rgb(255,145,54)" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<h4>Skills</h4>*/}
                                            <p className="work-p">{work.skillSet.map((skill, key) => {
                                                return (
                                                    <span key={key}>{skill}</span>
                                                );
                                            })}</p>
                                        </div>
                                        <div className="reward-and-benefit">
                                            <div className="internship-header">
                                                <div className="flex-column">
                                                    <h4 className="mb-0 pb-2 font-16 letter-spacing-1 font-weight-400">REWARD
                                                        AND BENEFITS</h4>
                                                    <div style={{ width: "8%" }}>
                                                        <hr className="mb-0 mt-0 pb-0 pt-0"
                                                            style={{ border: "1px solid rgb(255,145,54)" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<h4>Reward and benefits</h4>*/}
                                            <p className="work-p">{work.benefits}</p>
                                        </div>
                                        <div className="selection-procedure">
                                            <div className="internship-header">
                                                <div className="flex-column">
                                                    <h4 className="mb-0 pb-2 font-16 letter-spacing-1 font-weight-400">SELECTION
                                                        PROCEDURE</h4>
                                                    <div style={{ width: "8%" }}>
                                                        <hr className="mb-0 mt-0 pb-0 pt-0"
                                                            style={{ border: "1px solid rgb(255,145,54)" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<h4>Selection procedure</h4>*/}
                                            <p className="work-p">{work.selectionProcedure}</p>
                                        </div>
                                    </div>
                                    <div className="apply-section">
                                        <button className="btn-success btn col-sm-12 col-12 col-md-3 col-lg-3" onClick={this.application}>Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {this.state.modalShow ? this.renderApplyModal() : ""}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 d-lg-block d-md-block d-none">
                        <div className="filters">
                            <div className="bg-white ye-border">
                                <div className="">
                                    <img src={work.company.logo ? Converter.bufferToBase64(work.company.logo) :
                                        require("../../assets/images/avatar/company.png")}
                                        className="rounded-top"
                                        width="100%"
                                        height="150px" />
                                </div>
                                <div className="pl-3 pt-3 pb-1 pr-3">
                                    <div className="opacity-75 font-13">By : <span>{work.company.name}</span></div>
                                    <div className="pt-2 pb-2">
                                        <div className="d-flex">
                                            <div className="duration-icon icon-wrapper d-flex align-items-center">
                                                <i className="fa fa-clock-o opacity-50" style={{ color: "#000000" }}
                                                    aria-hidden="true" />
                                            </div>
<<<<<<< HEAD
                                            <div className="duration "><span
                                                className="font-15" style={{color:"rgba(13,3,0,0.89)"}}>{work.duration.weeks} Weeks</span></div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="vacancy-icon  icon-wrapper d-flex align-items-center" >
                                                <i className="fa fa-group opacity-50 " style={{color: "#000000"}}
                                                   aria-hidden="true"/>
                                            </div>
                                            <div className="vacancy "><span
                                                className="font-15 " style={{color:"rgba(13,3,0,0.89)"}}>{work.vacancy} Positions</span></div>
=======
                                            <div className="duration"><span
                                                className="font-15" style={{ color: "rgba(13,3,0,0.89)" }}>{work.duration.weeks} Weeks</span></div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="vacancy-icon icon-wrapper d-flex align-items-center">
                                                <i className="fa fa-group opacity-50" style={{ color: "#000000" }}
                                                    aria-hidden="true" />
                                            </div>
                                            <div className="vacancy"><span
                                                className="font-15" style={{ color: "rgba(13,3,0,0.89)" }}>{work.vacancy} Positions</span></div>
>>>>>>> 65737580c17e4d082a622cafcfe02d6746502d51
                                        </div>
                                        <div className="d-flex">
                                            <div className="stipend-icon icon-wrapper d-flex align-items-center">
                                                <i className="fa fa-money opacity-50" style={{ color: "#000000" }}
                                                    aria-hidden="true" />
                                            </div>
<<<<<<< HEAD
                                            <div className="stipend "><span className="font-15" style={{color:"rgba(13,3,0,0.89)"}}>Rs. {work.stipend}</span></div>
=======
                                            <div className="stipend"><span className="font-15" style={{ color: "rgba(13,3,0,0.89)" }}>Rs. {work.stipend}</span></div>
>>>>>>> 65737580c17e4d082a622cafcfe02d6746502d51
                                        </div>
                                    </div>
                                </div>
                                <div role="button"
                                    className="d-flex justify-content-center pt-2 pb-2 cursor-pointer btn-success rounded-bottom"
                                    width="100%" onClick={this.application}>Apply Now
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderWorkSpecMobile = (work) => {
        return (
            <div className="border d-lg-none">
                <div className="row">
                    <div className="head col-6">Start Date</div>
                    <div className="data col-6">{work.duration.start.split("T")[0]}</div>
                </div>
                <div className="row">
                    <div className="head col-6">Duration</div>
                    <div className="data col-6">{this.calculateDuration(work.duration.start, work.duration.end)}</div>
                </div>
                <div className="row">
                    <div className="head col-6">Stipend</div>
                    <div className="data col-6">{work.stipend}</div>
                </div>
                <div className="row">
                    <div className="head col-6">Work Location</div>
                    <div className="data col-6">{work.location}</div>
                </div>
                <div className="row">
                    <div className="head col-6">Last Date</div>
                    <div className="data col-6">{work.duration.last.split("T")[0]}</div>
                </div>
            </div>
        );
    }

    renderWorkSpecDesktop = (work) => {
        return (
            <div className="d-none d-lg-block">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Start Date</th>
                                <th>Duration</th>
                                <th>Stipend</th>
                                <th>Work Location</th>
                                <th>Last Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{work.duration.start.split("T")[0]}</td>
                                <td>{work.duration.weeks} Weeks</td>
                                <td>{work.stipend}</td>
                                <td>{work.location}</td>
                                <td>{work.duration.last.split("T")[0]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    application = () => {
        let { work } = this.state;
        ApiAction.applyApplication(work)
            .then((response) => {
                console.log(response);
                this.setState({ modalShow: true, success: response.data.success });
                window.setTimeout(() => {
                    this.setState({ modalShow: false })
                }, 5000);
            })
            .catch(error => {
                console.log(error);
                this.setState({ modalShow: true, error: true });
                window.setTimeout(() => {
                    this.setState({ modalShow: false })
                }, 5000);
            });
    }

    renderApplyModal() {
        let { modalShow, success, error } = this.state;
        return (
            <Modal show={modalShow} onHide={() => this.setState({ modalShow: false })}>
                <ModalHeader classname="" closeButton>Application</ModalHeader>
                <ModalBody>
                    <div>
                        <div className="d-flex justify-content-center">
                            {success ? <img src={require("../../assets/images/success.png")} alt="success-image" /> :
                                error ? <img src={require("../../assets/images/error.gif")} alt="error-image" /> :
                                    <img src={require("../../assets/images/happy.png")} alt="funny-image" />
                            }

                        </div>
                        <div className="d-flex justify-content-center">
                            {success ? <h3>Successfully Applied</h3> :
                                error ? <h3>Error in Submitting Form</h3> :
                                    <h3>Already Applied</h3>}
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to="/internships">Explore More</Link>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

export default IndividualWork;