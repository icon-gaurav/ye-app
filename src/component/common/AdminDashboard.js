import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "font-awesome/css/font-awesome.min.css";
import ListingContainer from "../containers/ListingContainer";
import Filters from "./Filters";
import "../../assets/stylesheet/Dashboard.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import {Link} from "react-router-dom";
import Insights from "./Insights";
import OfferList from "./OfferList";
import UserList from "./UserList";
import WorkList from "./WorkList";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            this.renderStats()

        );
    }

    renderStats() {
        return (

                <BrowserRouter>
                    <div className="aside-left-menu">
                        {this.renderLeftMenu()}
                    </div>
                    <div className="main-app">
                        <header className="main-head"></header>
                        <Route path="/insights" component={Insights}/>
                        <Route path="/users" component={UserList}/>
                        <Route path="/internships" component={WorkList}/>
                        <Route path="/offers" component={OfferList}/>
                    </div>
                </BrowserRouter>

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
                <Link to="/users" className="aside-item">
                    <div className="nav-logo">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="nav-label">Users</div>
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
                <Link to="/tasks" className="aside-item">
                    <div className="nav-logo">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="nav-label">Tasks</div>
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
                    <div className="nav-label">Setting</div>
                </Link>
                <Link to="/logout" className="aside-item align-content-end">
                    <div className="nav-logo">
                        <i className="fas fa-power-off"></i>
                    </div>
                    <div className="nav-label">Logout</div>
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
                                                <img src={require("../../assets/images/logo/YE-Merge-Black.png")}
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




}

export default AdminDashboard;