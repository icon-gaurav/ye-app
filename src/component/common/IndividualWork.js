/*
 * @author Gaurav Kumar    
*/

import React, { Component } from 'react';
import '../../assets/stylesheet/IndividualWork.css';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ApiAction from "../../actions/ApiAction";
import Api from "../../util/Api";
import { Link } from "react-router-dom";
import IndivisualWorkcss from './IndivisualWork.css'


class IndividualWork extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     work: null,
        //     windowSize: 720,
        //     modalShow: false
        // };
        this.state = {
            work: {
                windowSize: 720,
                modalShow: false,
                _id: "vrjnvojwncjhevnow",
                mode: "mission",
                company: "young engine mission",
                profile: "web profile mission",
                duration: {
                    start: new Date(),
                    end: new Date(new Date().getTime() + 2000000000),
                    last: new Date()
                },
                vacancy: 4,
                stipend: 5000,
                workDetails: "here is work details mission",
                skillSet: ["skill1", "skill2", "skill3"],
                location: "Home mission",
                selectionProcedure:
                    ["are available for the work from home job/internship",
                        "can start the work from home job/internship between 6th Jun'19 and 6th Jul'19",
                        "are available for duration of 1 month",
                        "have relevant skills and interests"]

            }
        }
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
        // this.setState({
        //     work: {
        //         _id:"vrjnvojwncjhevnow",
        //         mode: "mission",
        //         company: "young engine mission",
        //         profile: "web profile mission",
        //         duration: {
        //             start: new Date(),
        //             end: new Date(new Date().getTime() + 2000000000),
        //             last: new Date()
        //         },
        //         vacancy: 4,
        //         stipend: 5000,
        //         workDetails: "here is work details mission",
        //         skillSet: ["skill1", "skill2", "skill3"],
        //         location: "Home mission"
        //     }
        // });
        this.setState({ windowSize: window.innerWidth });
        window.addEventListener("resize", this.windowResizeHandler);
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
        // let {work} = this.state;
        // if (work) {
        //     return this.renderDetails();
        // } else {
        //     return <div></div>
        // }
        return (
            <div className="bg-white p-2 container container-class">

                <header className="main-head container">Work Details</header>
                <div className="internship-detail container-fluid">
                    <div className="item work-meta">
                        <div className="header row">
                            <div className="logo-wrapper">
                                <div className="img-wrapper rounded-circle">
                                    <img src={require("../../assets/images/fitness.jpg")}
                                        className="rounded-circle"
                                        width="75"
                                        height="75" />
                                </div>
                            </div>
                            <div className="work-profile">
                                <div className="profile">
                                    <h3>{this.state.profile}</h3>
                                </div>
                                <div className="company">
                                    <span>{this.state.company}</span>
                                </div>
                            </div>
                        </div>
                        <div className="work-specs">
                            {this.state.windowSize < 576 ? this.renderWorkSpecMobile(this.state) : this.renderWorkSpecDesktop(this.state)}
                        </div>
                    </div>


                </div>
                {/* {this.state.work.modalShow ? this.renderApplyModal() : ""} */}
            </div>
        );

    }

    renderDetails() {
        let { work } = this.state;
        console.log("inside render details")
        return (
            <div className="bg-white p-2">
                <header className="main-head">Work Details</header>
                <div className="internship-detail container-fluid">
                    <div className="item work-meta">
                        <div className="header row">
                            <div className="logo-wrapper">
                                <div className="img-wrapper rounded-circle">
                                    <img src={require("../../assets/images/fitness.jpg")}
                                        className="rounded-circle"
                                        width="75"
                                        height="75" />
                                </div>
                            </div>
                            <div className="work-profile">
                                <div className="profile">
                                    <h3>{work.profile}</h3>
                                </div>
                                <div className="company">
                                    <span>{work.company}</span>
                                </div>
                            </div>
                        </div>
                        <div className="work-specs">
                            {this.state.windowSize < 576 ? this.renderWorkSpecMobile(work) : this.renderWorkSpecDesktop(work)}
                        </div>
                    </div>
                    <div className="work-details">
                        <div className="about-the-program">
                            <h4>About the program</h4>
                            <p>{work.workDetails}</p>
                        </div>
                        <div className="about-company">
                            <h4>About Company</h4>
                            <p>{work.company.name}</p>
                        </div>
                        <div className="skiils">
                            <h4>Skills</h4>
                            <p>{work.skillSet.map((skill, key) => {
                                return (
                                    <span key={key}>{skill}</span>
                                );
                            })}</p>
                        </div>
                        <div className="reward-and-benefit">
                            <h4>Reward and benefits</h4>
                            <p>{work.benefits}</p>
                        </div>
                        <div className="selection-procedure">
                            <h4>Selection procedure</h4>
                            <p>{work.selectionProcedure}</p>
                        </div>
                    </div>
                    <div className="apply-section">
                        <button className="btn-success btn" onClick={this.application}>Apply Now
                        </button>
                    </div>
                </div>
                {this.state.modalShow ? this.renderApplyModal() : ""}
            </div>
        );
    }

    renderWorkSpecMobile = (work) => {
        return (
            <div className="container">
                <div className="row">
                    <div className="head col-6">Start Date</div>
                    {/* <div className="data col-6">{work.duration.start.split("T")[0]}</div> */}
                    <div className="data col-6">06/02/19</div>
                </div>
                <div className="row">
                    <div className="head col-6">Duration</div>
                    {/* <div className="data col-6">{this.calculateDuration(work.duration.start, work.duration.end)}</div> */}
                    <div className="data col-6">42 hours</div>
                </div>
                <div className="row">
                    <div className="head col-6">Stipend</div>
                    {/* <div className="data col-6">{work.stipend}</div>
              */}
                    <div className="data col-6">5000</div>
                </div>
                <div className="row">
                    <div className="head col-6">Work Location</div>
                    {/* <div className="data col-6">{work.location}</div> */}
                    <div className="data col-6">Noida</div>
                </div>
                <div className="row">
                    <div className="head col-6">Last Date</div>
                    {/* <div className="data col-6">{work.duration.last.split("T")[0]}</div> */}
                    <div className="data col-6">06/02/20</div>
                </div>
                <div className="work-details row">
                    <div className="row col-lg-12 col-md-12  about-the-program ">
                        <h4 >About the program</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odio inventore voluptates aut exercitationem ut earum, facere optio magnam amet consectetur, dolore dolores? Autem natus corrupti adipisci amet optio eum.</p>
                        {/* <p >{this.state.work.workDetails}</p> */}
                    </div>
                    <div className=" row col-lg-12 col-md-12 about-company">
                        <h4>About Company</h4>
                        {/* <p>{this.state.work.company}</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque, assumenda dolore ratione inventore repudiandae ea dignissimos a porro, iure provident perspiciatis distinctio sapiente. Modi nobis minima quod possimus quam!</p>
                    </div>
                    <div className="row col-lg-12 col-md-12 skiils">
                        <h4>Skills</h4>
                        {<p>{this.state.work.skillSet.map((skill, key) => {
                            return (
                                <span key={key}>{skill},</span>
                            );
                        })}</p>}
                    </div>
                    <div className=" row col-lg-12 col-md-12 reward-and-benefit">
                        <h4>Reward and benefits</h4>
                        {/* <p>{this.state.benefits}</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi consequatur quibusdam minus iure aspernatur! Dolorum iure, porro asperiores cupiditate possimus ex, fuga perferendis iste saepe facilis nulla perspiciatis exercitationem nam?</p>
                    </div>
                    <div className="row col-lg-12 col-md-12 selection-procedure">
                        <h4>Selection procedure</h4>
                        {<ol>{this.state.work.selectionProcedure.map((selection, key) => {
                            return (
                                <li key={key}>{selection},</li>
                            );
                        })}</ol>}
                    </div>
                    <div className="col-lg-12 col-md-12 apply-section">
                        <button className="btn-success btn" onClick={this.application}>Apply Now
                        </button>
                    </div>
                </div>

            </div>
        );
    }

    renderWorkSpecDesktop = (work) => {
        return (
            <div className="container">
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
                                {/*<td>{work.duration.start.toLocaleDateString()}</td>*/}
                                <td>16/02/19</td>
                                <td>2months</td>
                                <td>5000</td>
                                <td>Noida</td>
                                <td>5/05/19</td>
                                {/*<td>{this.calculateDuration(work.duration.start, work.duration.end)}</td>*/}
                                {/* <td>{work.work.stipend}</td>
                        <td>{work.location}</td> */}
                                {/*<td>{work.duration.last.toLocaleDateString()}</td>*/}
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="work-details container">
                    <div className="col-lg-12 col-md-12 about-the-program ">
                        <h4 >About the program</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odio inventore voluptates aut exercitationem ut earum, facere optio magnam amet consectetur, dolore dolores? Autem natus corrupti adipisci amet optio eum.</p>
                        {/* <p >{this.state.work.workDetails}</p> */}
                    </div>
                    <div className=" col-lg-12 col-md-12 about-company">
                        <h4>About Company</h4>
                        {/* <p>{this.state.work.company}</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque, assumenda dolore ratione inventore repudiandae ea dignissimos a porro, iure provident perspiciatis distinctio sapiente. Modi nobis minima quod possimus quam!</p>
                    </div>
                    <div className="col-lg-12 col-md-12 skiils">
                        <h4>Skills</h4>
                        {<p>{this.state.work.skillSet.map((skill, key) => {
                            return (
                                <span key={key}>{skill},</span>
                            );
                        })}</p>}
                    </div>
                    <div className=" col-lg-12 col-md-12 reward-and-benefit">
                        <h4>Reward and benefits</h4>
                        {/* <p>{this.state.benefits}</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi consequatur quibusdam minus iure aspernatur! Dolorum iure, porro asperiores cupiditate possimus ex, fuga perferendis iste saepe facilis nulla perspiciatis exercitationem nam?</p>
                    </div>
                    <div className="col-lg-12 col-md-12 selection-procedure">
                        <h4>Selection procedure</h4>
                        {<ol>{this.state.work.selectionProcedure.map((selection, key) => {
                            return (
                                <li key={key}>{selection},</li>
                            );
                        })}</ol>}
                    </div>
                    <div className="col-lg-12 col-md-12 apply-section">
                        <button className="btn-success btn" onClick={this.application}>Apply Now
                        </button>
                    </div>
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