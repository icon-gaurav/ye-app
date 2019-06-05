import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from "react-bootstrap/NavItem";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavLink from "react-bootstrap/NavLink";
import "../../assets/stylesheet/Header.css";
import Converter from "../utilities/Converter";

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
                <NavItem className="float-right ml-auto">
                    <NavLink className="d-inline-block" href="/help-center">
                        <i className="fa fa-question"></i>
                    </NavLink>
                    <NavLink className="d-inline-block" href="/notifications">
                        <i className="fa fa-bell">
                            {unSeenNotifications}
                        </i>
                    </NavLink>
                    <NavLink className="d-inline-block" href="/">
                        <div className="user-picture">
                            <img id="user-popover" className="rounded-circle"
                                 src={Converter.bufferToBase64(user.profilePic)}
                                 alt="Young Engine" width="40"
                                 height="40"
                            /></div>
                    </NavLink>
                </NavItem>
            </Navbar>
        );
    }
}

export default Header;