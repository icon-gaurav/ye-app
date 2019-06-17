import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from "react-bootstrap/NavItem";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import "../../assets/stylesheet/Header.css";
import ToggleBtnAnimation from '../library/ToggleBtnAnimation'
import Converter from "../utilities/Converter";
import {Nav, Dropdown, Image} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {NavLink, Link} from "react-router-dom";
import ApiAction from '../../actions/ApiAction';
import DropdownToggle from "react-bootstrap/DropdownToggle";

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
        let {user} = this.props;
        let unSeenNotifications = 0;
        if (user.notification) {
            user.notification.map((not) => {
                if (not.status == "NOT SEEN") {
                    unSeenNotifications++;
                }
            });
        }
        let activeStyle = {
            backgroundColor: "lightgrey",
            color: "#FF5A29",
            borderBottom: "2px solid #FF5A29"
        };
        let name = user.name.first ? user.name.first + " " + user.name.last : user.name;

        return (
            <Navbar className="global-header ml-1 mr-1" expand="lg" sticky="top">
                {/* <NavItem className="float-left">
                    <button className="btn rounded-circle" onClick={this.props.toggleLeftMenu}>
                        <i className="fas fa-align-justify"></i></button>
                </NavItem> */}

                <NavbarBrand className="float-left pl-0 pr-0 mr-auto border-right">
                    <img className="img-fluid mr-3 " src={require("../../assets/images/logo/YE-Merge-Black.png")}
                         alt="Young Engine" width="100"
                         height="46"/>
                </NavbarBrand>
                <NavbarToggle id="navbar-toggler" aria-controls="responsive-navbar-nav" style={{padding: "0"}}>
                    <ToggleBtnAnimation/>
                </NavbarToggle>






                <NavbarCollapse id="responsive-navbar-nav" style={{ zIndex: "1000" }}>
                    <Nav id="mobile-header">

                        <ul className="nav navbar-nav">

                            <li>
                                <div className="text-dark position-relative  pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/profile"
                                             activeStyle={activeStyle}>
                                        <div>
                                            <img className="rounded-circle"
                                                 src={Converter.bufferToBase64(user.logo ? user.logo : user.profilePic)}
                                                 alt='profile_image'
                                                 width="16px" height="20px"/>
                                            <span className="ml-3">Profile</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/home"
                                             activeStyle={activeStyle}>
                                        <div>
                                            <i className="fa fa-home"/>
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
                                            <i className=" fa fa-briefcase"/>
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
                                                    <i className="fa fa-fire"/>
                                                    <span className="ml-3">Missions</span>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="text-dark position-relative pl-0">
                                            <NavLink className="text-dark nav-link pl-0" to="/offers"
                                                     activeStyle={activeStyle}>
                                                <div>
                                                    <i className="fa fa-tag"/>
                                                    <span className="ml-3">Offers</span>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </>
                                }
                            </li>

                            <li>
                                {user.role == "ADMIN" ?
                                    <>
                                        <div className="text-dark position-relative pl-0">
                                            <NavLink className="text-dark nav-link pl-0" to="/users"
                                                     activeStyle={activeStyle}>
                                                <div>
                                                    <i className="fa fa-fire"/>
                                                    <span className="ml-3">Users</span>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </> : ""
                                }
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/help-center"
                                             activeStyle={activeStyle}>
                                        <div>
                                            <i className="fa fa-question"/>
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
                                            <i className="fa fa-bell"/>
                                            <span className="ml-3">Notification</span>
                                        </div>
                                        <span
                                            className="unseen-notification align-self-center scale-up-center">{unSeenNotifications}</span>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/settings"
                                             activeStyle={activeStyle}>
                                        <div>
                                            <i className="fa fa-cogs"/>
                                            <span className="ml-3">Settings</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0" to="/notifications">
                                    <button className="transparent-button nav-link pl-0 d-flex justify-content-start"
                                            style={{width: "100%"}} id="logout-btn">
                                        <div>
                                            <i className="fa fa-power-off "/>
                                            <span className="ml-3" onClick={this.logout}>Logout</span>
                                        </div>
                                    </button>
                                </div>
                            </li>

                        </ul>

                    </Nav>
                </NavbarCollapse>
                {/* </ModalBody>
                </Modal> */}

                {/* <div className="fade modal-backdrop show" style={{position:"absolute",top:"50px"}}>
                    sdgdf s t tsg t gfghg rfs bs t gh std tg sh s rtg dt s hs fh sh h rh fs hrt h rsr hrs th t h  fg er g re rt h stg dkjg ddgnd ldjs idd bdds ;dgrduogihsl alljga  hrjhlreg
                </div> */}

                <Nav className="ml-auto pr-3" id="header">

                    <NavLink className="ye-dark nav-link" to="/home"
                             activeStyle={activeStyle}>
                        <div className="icon-div text-align-center">
                            <img src={require("../../assets/images/logo/work.svg")}/>
                            <div>Home</div>
                        </div>
                    </NavLink>

                    <NavLink className="ye-dark nav-link" to="/internships"
                             activeStyle={activeStyle}>
                        <div className="icon-div text-align-center">
                            {/*<svg xmlnsXlink={require("../../assets/images/logo/work.svg")} fill="red"></svg>*/}
                            <img src={require("../../assets/images/logo/work.svg")}/>
                            <div>Internships</div>
                        </div>
                    </NavLink>

                    {user.role == "COMPANY" ? "" :
                        <>
                            <NavLink className="ye-dark nav-link" to="/missions"
                                     activeStyle={activeStyle}>
                                <div className="icon-div text-align-center">
                                    <img src={require("../../assets/images/logo/work.svg")}/>
                                    <div>Missions</div>
                                </div>
                            </NavLink>

                            <NavLink className="ye-dark nav-link" to="/offers"
                                     activeStyle={activeStyle}>
                                <div className="icon-div text-align-center">
                                    <img src={require("../../assets/images/logo/work.svg")}/>
                                    <div>Offers</div>
                                </div>
                            </NavLink>

                        </>
                    }
                    {user.role == "ADMIN" ?
                        <>
                            <NavLink className="ye-dark nav-link" to="/users"
                                     activeStyle={activeStyle}>
                                <div className="icon-div text-align-center">
                                    <img src={require("../../assets/images/logo/work.svg")}/>
                                    <div>Users</div>
                                </div>
                            </NavLink>
                        </> : ""
                    }
                    {/*<NavLink className="ye-dark nav-link" to="/help-center"*/}
                    {/*         activeStyle={activeStyle}>*/}
                    {/*    <div className="icon-div text-align-center">*/}
                    {/*        <i className="fa fa-question"/>*/}
                    {/*        <div>Help</div>*/}
                    {/*    </div>*/}
                    {/*</NavLink>*/}

                    {/*<NavLink className="ye-dark position-relative nav-link" to="/notifications"*/}
                    {/*         activeStyle={activeStyle}>*/}
                    {/*    <div className="icon-div text-align-center">*/}
                    {/*        <i className="fa fa-bell"/>*/}
                    {/*        <div>Notification</div>*/}
                    {/*    </div>*/}
                    {/*    <span className="unseen-notification align-self-center">{unSeenNotifications}</span>*/}
                    {/*</NavLink>*/}

                    {/*<NavLink className="ye-dark position-relative nav-link" to="/notifications"*/}
                    {/*         activeStyle={activeStyle}>*/}
                    {/*    <div className="d-flex justify-content-center">*/}
                    {/*        <Image className="rounded-circle" src={Converter.bufferToBase64(user.logo ? user.logo : user.profilePic)}*/}
                    {/*               width="30px" height="30px"/>*/}
                    {/*    </div>*/}
                    {/*</NavLink>*/}
                    <NavItem className="d-flex justify-content-center border-left">
                        <Dropdown alignRight>
                            <Dropdown.Toggle className="d-flex justify-content-center" id="dropdown">
                                <div className="position-relative">
                                    <Image className="rounded-circle border mr-1"
                                           src={Converter.bufferToBase64(user.logo ? user.logo : user.profilePic)}
                                           width="30px" height="30px"/>
                                    {unSeenNotifications == 0 ?
                                        <>
                                            <span className="unseen-notification align-self-center scale-up-center"></span>
                                            <span className="unseen-notification inner-circle"></span>
                                        </> : ""}
                                </div>
                                <div className="ml-2 mr-3 text-left">
                                    <div style={{fontSize: "10px"}} className="opacity-60">Welcome Back</div>
                                    <div style={{fontSize: "14px"}}>{name}</div>
                                </div>
                                <div>
                                    <i className="fa fa-caret-down"></i>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className="ye-dark w-100"><NavLink className="ye-dark w-100"
                                                                                  to="/profile">Profile</NavLink></Dropdown.Item>
                                <Dropdown.Item className="ye-dark"><NavLink className="ye-dark"
                                                                            to="/settings">Settings</NavLink></Dropdown.Item>
                                <Dropdown.Item className="ye-dark"><NavLink className="ye-dark"
                                                                            to="/notifications">Notification</NavLink></Dropdown.Item>
                                <Dropdown.Item className="ye-dark"><NavLink className="ye-dark" to="/help-center">Help &
                                    Support</NavLink></Dropdown.Item>
                                <Dropdown.Item className="ye-dark" onClick={this.logout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

    logout = () => {
        ApiAction.logOut()
            .then((response) => {
                if (response.data.success) {
                    localStorage.removeItem("loggedIn");
                    localStorage.removeItem("user");
                    window.location = '/'
                }
            }).catch((error) => {
            console.log(error)
        });
    }
}

export default Header;