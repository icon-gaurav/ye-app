import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "../../../assets/stylesheet/Dashboard.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Insights from "./insight/StudentInsight";
import OfferList from "../offers/OfferList";
import WorkList from "../WorkList";
import {Route, Link} from "react-router-dom";
import IndividualWork from "../IndividualWork";
import StudentProfile from "./profile/StudentProfile";
import HelpCenter from "../HelpCenter";
import ApiAction from "../../../actions/ApiAction";
import CategoryOffers from "../offers/CategoryOffers";
import NotificationList from "../notification/NotificationList";
import Verification from "./settings/Verification";
import CompletedInternship from './insight/CompletedInternship.js'
import MissionCompleted from './insight/MissionCompleted.js'
import TotalEarnings from './insight/TotalEarnings.js'
import OnBoarding from "./onboarding/OnBoarding";
import MyInternship from '../business/myinternships/MyInternship.js'
import MyMissions from '../business/mymission/MyMissions.js'
class StudentDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            leftMenuStyle: {marginLeft: "0px"}
        };
    }

    componentWillMount() {
        // if (window.innerWidth < 576) {
        //     this.setState({leftMenuStyle: {marginLeft: "0px"}, opacity: {opacity: 0.5}});
        // } else {
        //     this.setState({leftMenuStyle: {marginLeft: "113px"}});
        // }
        // window.addEventListener("resize", this.resizeWindowHandler);
    }

    resizeWindowHandler = () => {
        if (window.innerWidth < 576) {
            this.setState({leftMenuStyle: {marginLeft: "0px"}});
        } else {
            this.setState({leftMenuStyle: {marginLeft: "113px"}});
        }
    }

    render() {
        return (
            this.renderStats()

        );
    }

    renderStats() {
        return (
            <div>
                <div className="aside-left-menu" style={this.props.leftMenu ? {display: "block"} : {display: "none"}}>
                    {this.props.leftMenu ? this.renderLeftMenu() : ""}
                </div>
                <div className="" style={this.props.leftMenu ? this.state.leftMenuStyle : {marginLeft: "0px"}}>
                    {/*{this.state.redirect ? <Redirect to="/"/> : ""}*/}
                    <Route exact path="/home" component={() => <Insights user={this.props.user}/>}/>
                    <Route exact path="/profile" component={() => <StudentProfile user={this.props.user}/>}/>
                    <Route exact path="/internships"
                           component={() => <WorkList work={"internship"} user={this.props.user}/>}/>

                    <Route path="/internships/:id" component={(props) => <IndividualWork {...props}/>}/>
                    <Route path="/missions/:id" component={(props) => <IndividualWork {...props}/>}/>
                    <Route exact path="/missions"
                           component={() => <WorkList work={"mission"} user={this.props.user}/>}/>
                    <Route exact path="/offers" component={() => <OfferList user={this.props.user}/>}/>
                    <Route exact path="/offers/:category"
                           component={(props) => <CategoryOffers user={this.props.user} {...props}/>}/>
                    <Route exact path="/help-center" component={HelpCenter}/>
                    <Route exact path="/notifications" component={() => <NotificationList user={this.props.user}/>}/>
                    <Route exact path="/settings" component={() => <Verification user={this.props.user}/>}/>
                    <Route exact path="/completed-internship" component={() => <CompletedInternship/>}/>
                    <Route exact path="/missions-completed" component={() => < MissionCompleted/>}/>
                    <Route exact path="/total-earnings" component={() => < TotalEarnings/>}/>
                    <Route exact path="/" component={() => <Insights user={this.props.user}/>}/>
                    <Route exact path="/edit-profile" component={() => <OnBoarding/>}/>
                    <Route exact path="/myinternships" component={() => <MyInternship/>}/>
                    <Route exact path="/mymissions" component={() => <MyMissions/>}/>
                </div>
            </div>
        );
    }

    renderLeftMenu() {
        return (
            <aside className="aside-left-nav">
                <Link to="/insights" className="aside-item">
                    <div className="nav-logo">
                        <i className="fas fa-poll"></i>
                    </div>
                    <div className="nav-label">Insights</div>
                </Link>
                <Link to="/profile" className="aside-item">
                    <div className="nav-logo">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="nav-label">Profile</div>
                </Link>
                <Link to="/internships" className="aside-item">
                    <div className="nav-logo">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="nav-label">Internships</div>
                </Link>
                <Link to="/missions" className="aside-item">
                    <div className="nav-logo">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="nav-label">Missions</div>
                </Link>
                <Link to="/offers" className="aside-item">
                    <div className="nav-logo">
                        <i className="fab fa-free-code-camp"></i>
                    </div>
                    <div className="nav-label">Offers</div>
                </Link>
                <Link to="/settings" className="aside-item mb-0">
                    <div className="nav-logo">
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="nav-label">Settings</div>
                </Link>
                <Link to="/" onClick={this.logout} className="aside-item align-content-end">
                    <div className="nav-logo">
                        <i className="fas fa-power-off"></i>
                    </div>
                    <div className="nav-label">Logout</div>
                </Link>
                <Link to="/myinternships" className="aside-item">
                    <div className="nav-logo">
                        <i className="fab fa-free-code-camp"></i>
                    </div>
                    <div className="nav-label">MyInternships</div>
                </Link>
                <Link to="/mymissions" className="aside-item">
                    <div className="nav-logo">
                        <i className="fab fa-free-code-camp"></i>
                    </div>
                    <div className="nav-label">MyMissions</div>
                </Link>
            </aside>
        );
    }

    renderUserStats() {
        return (
            <div className="container-fluid">
                <div className="row user-details">
                    <div className="col-md-6 col-xs-12">
                        <div className="profile-wrapper">
                            <div className="stats">
                                <div className="top row">
                                    <div className="col-md-4 col-xs-12 pic-container">
                                        <div className="profile-pic-wrapper">
                                            <a href="dashboard" role="button">
                                                <img src={require("../../../assets/images/logo/YE-Merge-Black.png")}
                                                     width="100px"
                                                     height="100px"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-xs-12">
                                        <div className="text-wrapper">
                                            <div className="name">Name :</div>
                                            <div className="status">Status :</div>
                                            <div className="city">City :</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom row">
                                    <div className="progress-wrapper col-md-12 col-xs-12">
                                        <h6>Profile completed : <span>Update details</span></h6>
                                        <ProgressBar now="10" label="20%"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="work-status">
                            <div className="completed-work stats">
                                <div className="completed-internship work">
                                    <h6>Completed Internships : <span>20</span></h6>
                                </div>
                                <div className="completed-mission work">
                                    <h6>Completed Mission : <span>20</span></h6>
                                </div>
                                <div className="completed-tasks work">
                                    <h6>Completed Tasks : <span>20</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    logout = () => {
        ApiAction.logOut()
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    localStorage.removeItem("loggedIn");
                    localStorage.removeItem("user");
                    // this.setState({redirect: true});
                    this.props.history.push(`/`);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }


}

export default StudentDashboard;