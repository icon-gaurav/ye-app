import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from "react-bootstrap/NavItem";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import "../../assets/stylesheet/Header.css";
import ToggleBtnAnimation from '../library/ToggleBtnAnimation'
import Converter from "../utilities/Converter";
import { Nav, Dropdown } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { NavLink, Link } from "react-router-dom";
import ApiAction from '../../actions/ApiAction';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popoverOpen: true,
        }
        console.log(this.props);
    }

    componentDidMount() {

    }

    render() {
        let { user } = this.props;
        let unSeenNotifications = 0;
        if (user.notification) {
            user.notification.map((not) => {
                if (not.status == "NOT SEEN") {
                    unSeenNotifications++;
                }
            });
        }
        let activeStyle = {
            borderBottom: "2px solid black"
        }

        return (
            <Navbar className="container-fluid bg-light" expand="lg" sticky="top">
                {/* <NavItem className="float-left">
                    <button className="btn rounded-circle" onClick={this.props.toggleLeftMenu}>
                        <i className="fas fa-align-justify"></i></button>
                </NavItem> */}

                <NavbarBrand className="float-left pl-0 pr-0 mr-auto" href="/">
                    <img className="img-fluid" src={require("../../assets/images/logo/YE-Merge-Black.png")}
                        alt="Young Engine" width="100"
                        height="46" />
                </NavbarBrand>
                <NavbarToggle id="navbar-toggler" aria-controls="responsive-navbar-nav" style={{ padding: "0" }}>
                    <ToggleBtnAnimation />
                </NavbarToggle>
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav id="mobile-header">

                        <ul className="nav navbar-nav">

                            <li>
                                <div className="text-dark position-relative  pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/profile"
                                        activeStyle={activeStyle}>
                                        <div>
                                            <img className="rounded-circle" src={require('../../assets/images/random.jpg')} alt='profile_image'
                                                width="16px" height="20px" />
                                            <span className="ml-3">Profile</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/home"
                                        activeStyle={activeStyle}>
                                        <div >
                                            <i className="fa fa-home" />
                                            <span className="ml-3">Home</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/internships"
                                        activeStyle={activeStyle}>
                                        <div>
                                            <i className=" fa fa-briefcase" />
                                            <span className="ml-3">Internships</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                {user.role == "COMPANY" ? "" :
                                    <>
                                        <div className="text-dark position-relative pl-0">
                                            <NavLink className="text-dark nav-link pl-0" to="/missions"
                                                activeStyle={activeStyle}>
                                                <div>
                                                    <i className="fa fa-fire" />
                                                    <span className="ml-3">Missions</span>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="text-dark position-relative pl-0">
                                            <NavLink className="text-dark nav-link pl-0" to="/offers"
                                                activeStyle={activeStyle}>
                                                <div>
                                                    <i className="fa fa-tag" />
                                                    <span className="ml-3">Offers</span>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </>
                                }
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/help-center"
                                        activeStyle={activeStyle}>
                                        <div>
                                            <i className="fa fa-question" />
                                            <span className="ml-3">Help</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/notifications"
                                        activeStyle={activeStyle}>
                                        <div>
                                            <i className="fa fa-bell" />
                                            <span className="ml-3">Notification</span>
                                        </div>
                                        <span className="unseen-notification align-self-center">{unSeenNotifications}</span>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/settings"
                                        activeStyle={activeStyle}>
                                        <div>
                                            <i className="fa fa-cogs" />
                                            <span className="ml-3">Settings</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0" to="/notifications">
                                    <button className="transparent-button nav-link pl-0 d-flex justify-content-start"
                                        style={{ width: "100%" }} id="logout-btn">
                                        <div>
                                            <i className="fa fa-power-off " />
                                            <span className="ml-3" onClick={this.logout}>Logout</span>
                                        </div>
                                    </button>
                                </div>
                            </li>

                        </ul>

                    </Nav>
                </NavbarCollapse>

                <Nav className="ml-auto pr-3" id="header">

                    <NavLink className="text-dark nav-link" to="/home"
                        activeStyle={activeStyle}>
                        <div className="icon-div text-align-center">
                            <i className="fa fa-home" />
                            <div>Home</div>
                        </div>
                    </NavLink>

                    <NavLink className="text-dark nav-link" to="/internships"
                        activeStyle={activeStyle}>
                        <div className="icon-div text-align-center">
                            <i className=" fa fa-briefcase" />
                            <div>Internships</div>
                        </div>
                    </NavLink>

                    {user.role == "COMPANY" ? "" :
                        <>
                            <NavLink className="text-dark nav-link" to="/missions"
                                activeStyle={activeStyle}>
                                <div className="icon-div text-align-center">
                                    <i className="fa fa-fire" />
                                    <div>Missions</div>
                                </div>
                            </NavLink>

                            <NavLink className="text-dark nav-link" to="/offers"
                                activeStyle={activeStyle}>
                                <div className="icon-div text-align-center">
                                    <i className="fa fa-tag" />
                                    <div>Offers</div>
                                </div>
                            </NavLink>

                        </>
                    }

                    <NavLink className="text-dark nav-link" to="/help-center"
                        activeStyle={activeStyle}>
                        <div className="icon-div text-align-center">
                            <i className="fa fa-question" />
                            <div>Help</div>
                        </div>
                    </NavLink>

                    <NavLink className="text-dark position-relative nav-link" to="/notifications"
                        activeStyle={activeStyle}>
                        <div className="icon-div text-align-center">
                            <i className="fa fa-bell" />
                            <div>Notification</div>
                        </div>
                        <span className="unseen-notification align-self-center">{unSeenNotifications}</span>
                    </NavLink>

                    <Dropdown className="pt-3 mr-5" >
                        <Dropdown.Toggle alignRight id="dropdown" >Me</Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item ><Link className="text-dark" to="/profile">Profile</Link></Dropdown.Item>
                            <Dropdown.Item ><Link className="text-dark" to="/settings">Settings</Link></Dropdown.Item>
                            <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Nav>

            </Navbar>
        );
    }

    logout = () => {
        // ApiAction.logOut()
        //     .then((response) => {
        //         if (response.data.success) {
        //             localStorage.removeItem("loggedIn");
        //             localStorage.removeItem("user");
        //         }
        //     }).catch(()=>{
        window.location = '/'
        // })
    }
}

export default Header;