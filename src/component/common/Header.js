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
import {NavLink} from "react-router-dom";
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
            backgroundColor: "#E0E0E0",
            marginTop: "-4px",
            marginBottom: "-3px",
            // color: "#FF5A29",
            // borderBottom: "2px solid #FF5A29"
        };
        let name = user.name.first ? user.name.first + " " + user.name.last : user.name;

        return (
            <Navbar className="global-header border-bottom pt-0 pb-0" expand="lg" sticky="top">
                {/* <NavItem className="float-left">
                    <button className="btn rounded-circle" onClick={this.props.toggleLeftMenu}>
                        <i className="fas fa-align-justify"></i></button>
                </NavItem> */}

                <NavbarBrand className="float-left pl-0 pr-0 mr-auto border-right">
                    <NavLink to="/">
                        <img className="img-fluid mr-3 " src={require("../../assets/images/logo/YE-Merge-Black.png")}
                             alt="Young Engine" width="100"
                             height="46"/>
                    </NavLink>
                </NavbarBrand>
                <NavbarToggle id="navbar-toggler" aria-controls="responsive-navbar-nav" style={{padding: "0"}}>
                    <ToggleBtnAnimation/>
                </NavbarToggle>


                <NavbarCollapse id="responsive-navbar-nav" style={{zIndex: "1000", marginLeft: "-40px"}}>
                    <Nav id="mobile-header">

                        <ul className="nav navbar-nav">

                            <li>
                                <div className="text-dark position-relative  pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/profile">
                                        <div>
                                            <img className="rounded-circle"
                                                 src={
                                                     user.role == "COMPANY" ?
                                                         (user.logo ? Converter.bufferToBase64(user.logo) : require("../../assets/images/avatar/company.png"))
                                                         :
                                                         user.role == "STUDENT" ?
                                                             (user.profilePic ? Converter.bufferToBase64(user.profilePic) :
                                                                 (user.gender == "Female" ? require("../../assets/images/avatar/female.png")
                                                                     : require("../../assets/images/avatar/male.png")))
                                                             :
                                                             require("../../assets/images/avatar/company.png")
                                                 }
                                                 alt='profile_image'
                                                 width="16px" height="20px"/>
                                            <span className="ml-3">Profile</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/home">
                                        <div>
                                            <i className="fa fa-home" style={{height: "16px", width: "16px"}}/>
                                            <span className="ml-3">Home</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/internships">
                                        <div>
                                            <i className=" fa fa-briefcase" style={{height: "16px", width: "16px"}}/>
                                            <span className="ml-3">Internships</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                {user.role == "COMPANY" ? "" :
                                    <>
                                        <div className="text-dark position-relative pl-0">
                                            <NavLink className="text-dark nav-link pl-0" to="/missions">
                                                <div>
                                                    <i className="fa fa-fire" style={{height: "16px", width: "16px"}}/>
                                                    <span className="ml-3">Missions</span>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="text-dark position-relative pl-0">
                                            <NavLink className="text-dark nav-link pl-0" to="/offers">
                                                <div>
                                                    <i className="fa fa-tag" style={{height: "16px", width: "16px"}}/>
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
                                            <NavLink className="text-dark nav-link pl-0" to="/users">
                                                <div>
                                                    <i className="fa fa-fire" style={{height: "16px", width: "16px"}}/>
                                                    <span className="ml-3">Users</span>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </> : ""
                                }
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/help-center">
                                        <div>
                                            <i className="fa fa-question" style={{height: "16px", width: "16px"}}/>
                                            <span className="ml-3">Help</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div className="text-dark position-relative pl-0">
                                    <NavLink className="text-dark nav-link pl-0" to="/notifications">
                                        <div>
                                            <i className="fa fa-bell" style={{height: "16px", width: "16px"}}/>
                                            <span className="ml-3">Notification</span>
                                        </div>
                                        <span
                                            className="unseen-notification align-self-center scale-up-center d-none">{unSeenNotifications}</span>
                                    </NavLink>
                                </div>
                            </li>

                            {/*<li>*/}
                            {/*    <div className="text-dark position-relative pl-0">*/}
                            {/*        <NavLink className="text-dark nav-link pl-0" to="/settings"*/}
                            {/*                 activeStyle={activeStyle}>*/}
                            {/*            <div>*/}
                            {/*                <i className="fa fa-cogs"/>*/}
                            {/*                <span className="ml-3">Settings</span>*/}
                            {/*            </div>*/}
                            {/*        </NavLink>*/}
                            {/*    </div>*/}
                            {/*</li>*/}

                            <li>
                                <div className="text-dark position-relative pl-0" to="/notifications">
                                    <button className="transparent-button nav-link pl-0 d-flex justify-content-start"
                                            style={{width: "100%"}} id="logout-btn">
                                        <div>
                                            <i className="fa fa-power-off " style={{height: "16px", width: "16px"}}/>
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

                <Nav className="ml-auto" id="header">

                    <NavLink className="ye-dark nav-link d-flex align-items-center pt-0 pb-0" to="/home"
                             activeStyle={activeStyle}>
                        <div className="icon-div text-align-center">
                            {/*<img src={require("../../assets/images/logo/work.svg")}/>*/}
                            <div>Home</div>
                        </div>
                    </NavLink>

                    <NavLink className="ye-dark nav-link d-flex align-items-center pt-0 pb-0" to="/internships"
                             activeStyle={activeStyle}>
                        <div className="icon-div text-align-center">
                            {/*<svg xmlnsXlink={require("../../assets/images/logo/work.svg")} fill="red"></svg>*/}
                            {/*<img src={require("../../assets/images/logo/work.svg")}/>*/}
                            <div>Internships</div>
                        </div>
                    </NavLink>

                    {user.role == "COMPANY" ? "" :
                        <>
                            <NavLink className="ye-dark nav-link d-flex align-items-center pt-0 pb-0" to="/missions"
                                     activeStyle={activeStyle}>
                                <div className="icon-div text-align-center">
                                    {/*<img src={require("../../assets/images/logo/work.svg")}/>*/}
                                    <div>Missions</div>
                                </div>
                            </NavLink>

                            <NavLink className="ye-dark nav-link d-flex align-items-center pt-0 pb-0" to="/offers"
                                     activeStyle={activeStyle}>
                                <div className="icon-div text-align-center">
                                    {/*<img src={require("../../assets/images/logo/work.svg")}/>*/}
                                    <div>Offers</div>
                                </div>
                            </NavLink>

                        </>
                    }
                    {user.role == "ADMIN" ?
                        <>
                            <NavLink className="ye-dark nav-link d-flex align-items-center pt-0 pb-0" to="/users"
                                     activeStyle={activeStyle}>
                                <div className="icon-div text-align-center">
                                    {/*<img src={require("../../assets/images/logo/work.svg")}/>*/}
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
                            <Dropdown.Toggle className="d-flex justify-content-center align-items-center" id="dropdown">
                                <div className="position-relative">
                                    <Image className="rounded-circle border mr-1 align-items-center"
                                           src={user.role == "COMPANY" ?
                                               (user.logo ? Converter.bufferToBase64(user.logo) : require("../../assets/images/avatar/company.png"))
                                               :
                                               user.role == "STUDENT" ?
                                                   (user.profilePic ? Converter.bufferToBase64(user.profilePic) :
                                                       (user.gender == "Female" ? require("../../assets/images/avatar/female.png")
                                                           : require("../../assets/images/avatar/male.png")))
                                                   :
                                                   require("../../assets/images/avatar/company.png")}
                                           width="30px" height="30px"/>
                                    {unSeenNotifications > 0 ?
                                        <>
                                            <span
                                                className="unseen-notification align-self-center scale-up-center"></span>
                                            <span className="unseen-notification inner-circle"></span>
                                        </> : ""}
                                </div>
                                <div className="ml-2 mr-2 text-left">
                                    <div style={{fontSize: "10px", marginBottom: "-6px", color: "#707070"}}
                                         className="opacity-75">Welcome
                                        Back,
                                    </div>
                                    <div style={{fontSize: "13px", color: "#707070"}}>{name}</div>
                                </div>
                                <div>
                                    <i className="fa fa-caret-down" style={{color: "#707070"}}></i>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {user.role == "STUDENT" ?
                                    <>
                                        <NavLink className="ye-dark dropdown-item" to="/my-internships">My
                                            Internships</NavLink>
                                        <NavLink className="ye-dark dropdown-item" to="/my-missions">My
                                            Missions</NavLink>
                                    </>
                                    : ""}
                                <NavLink className="ye-dark dropdown-item" to="/notifications">Notification</NavLink>
                                <NavLink className="ye-dark dropdown-item" to="/profile">Profile</NavLink>
                                {/*<NavLink className="ye-dark dropdown-item" to="/settings">Settings</NavLink>*/}
                                <NavLink className="ye-dark dropdown-item" to="/help-center">Support</NavLink>
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