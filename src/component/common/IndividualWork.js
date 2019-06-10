/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../assets/stylesheet/IndividualWork.css';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ApiAction from "../../actions/ApiAction";
import Api from "../../util/Api";


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
        ApiAction.getWork(this.props.match.params.id)
            .then((response) => {
                if (response.data.success) {
                    this.setState({work: response.data.work});
                }
            })
            .catch((error) => {
                console.log(error);
            });
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
        this.setState({windowSize: window.innerWidth});
        window.addEventListener("resize", this.windowResizeHandler);
    }

    windowResizeHandler = () => {
        this.setState({windowSize: window.innerWidth});
    }

    calculateDuration = (start, end) => {
        let ms = end.getTime() - start.getTime();
        let days = Math.floor((((ms / 1000) / 60) / 60) / 24);
        let weeks = Math.floor(days / 7);
        days = days % 7;
        let result = weeks > 0 ? weeks + " Weeks " : "";
        result += days > 0 ? days + " Days " : "";
        return result;
    }

    render() {
        let {work} = this.state;
        if (work) {
           return this.renderDetails();
        } else {
            return <div></div>
        }
    }

    renderDetails() {
        let {work} = this.state;
        console.log("inside render details")
        return (
            <div>
                <header className="main-head">Work Details</header>
                <div className="internship-detail container-fluid">
                    <div className="item work-meta">
                        <div className="header row">
                            <div className="logo-wrapper">
                                <div className="img-wrapper rounded-circle">
                                    <img src={require("../../assets/images/fitness.jpg")}
                                         className="rounded-circle"
                                         width="75"
                                         height="75"/>
                                </div>
                            </div>
                            <div className="work-profile">
                                <div className="profile">
                                    <h3>{work.profile}</h3>
                                </div>
                                <div className="company">
                                    <span>{work.company.name}</span>
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
            <div>
                <div className="row">
                    <div className="head col-6">Start Date</div>
                    <div className="data col-6">{work.duration.start.toLocaleDateString()}</div>
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
                    <div className="data col-6">{work.duration.last.toLocaleDateString()}</div>
                </div>
            </div>
        );
    }

    renderWorkSpecDesktop = (work) => {
        return (
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
                        {/*<td>{this.calculateDuration(work.duration.start, work.duration.end)}</td>*/}
                        <td>{work.stipend}</td>
                        <td>{work.location}</td>
                        {/*<td>{work.duration.last.toLocaleDateString()}</td>*/}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    application = () => {
        let {work} = this.state;
        ApiAction.applyApplication(work)
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.setState({modalShow: true});
                    window.setTimeout(() => {
                        this.setState({modalShow: false})
                    }, 5000);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderApplyModal() {
        return (
            <Modal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})}>
                <ModalHeader closeButton>Application</ModalHeader>
                <ModalBody>
                    Successfully Applied
                </ModalBody>
            </Modal>
        );
    }
}

export default IndividualWork;