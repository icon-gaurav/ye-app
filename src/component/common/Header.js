import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from "react-bootstrap/NavItem";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import "../../assets/stylesheet/Header.css";
import Converter from "../utilities/Converter";
import {Nav} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {NavLink} from "react-router-dom";

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
            borderBottom: "2px solid black"
        }
        return (
            <Navbar className="container-fluid bg-light" expand="lg" sticky="top">
                <NavItem className="float-left">
                    <button className="btn rounded-circle" onClick={this.props.toggleLeftMenu}>
                        <i className="fas fa-align-justify"></i></button>
                </NavItem>
                <NavbarBrand className="float-left pl-0 pr-0 mr-auto" href="/">
                    <img className="img-fluid" src={require("../../assets/images/logo/YE-Merge-Black.png")}
                         alt="Young Engine" width="100"
                         height="46"/>
                </NavbarBrand>
                <NavbarToggle aria-controls="responsive-navbar-nav"/>
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end ml-auto">
                        <NavLink className="nav-item text-dark hover-effect nav-link" to="/home"
                                 activeStyle={activeStyle}>
                            <i className="fa fa-home"></i> Home</NavLink>
                        <NavLink className="text-dark nav-link" to="/internships"
                                 activeStyle={activeStyle}>
                            <i className="fa fa-briefcase"></i> Internships</NavLink>
                        {user.role == "COMPANY" ? "" :
                            <>
                                <NavLink className="text-dark nav-link" to="/missions"
                                         activeStyle={activeStyle}>
                                    <i className="fa fa-tag"></i> Missions</NavLink>
                                <NavLink className="text-dark nav-link" to="/offers"
                                         activeStyle={activeStyle}>
                                    <i className="fa fa-fire"></i> Offers</NavLink>
                            </>
                        }
                        <NavLink className="text-dark nav-link" to="/help-center"
                                 activeStyle={activeStyle}>
                            <i className="fa fa-question"></i> Help
                        </NavLink>
                        <NavLink className="text-dark position-relative nav-link" to="/notifications"
                                 activeStyle={activeStyle}>
                            <i className="fa fa-bell">
                            </i> Notification
                            <span className="unseen-notification align-self-center">{unSeenNotifications}</span>
                        </NavLink>
                        <NavLink className="text-dark nav-link" href="/">
                            <div className="user-picture">
                                <img id="user-popover" className="rounded-circle"
                                     src={Converter.bufferToBase64(user.profilePic)}
                                     alt="Young Engine" width="40"
                                     height="40"
                                /></div>
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        );
    }
}

export default Header;