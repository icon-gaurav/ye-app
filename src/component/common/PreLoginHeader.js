import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavLink from "react-bootstrap/NavLink";
import ModalViewer from "./ModalViewer";
import "../../assets/stylesheet/PreLoginHeader.css";

class PreLoginHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayModal: false,
        };
    }

    render() {
        return (
            <>
                <Navbar className="pre-login-header bg-light" expand="lg" sticky="top">
                    <NavbarBrand href="/" className="brand-logo">
                        <img src={require("../../assets/images/logo/YE-Merge-Black.png")} alt="Young Engine" width="162"
                             height="46"/>
                    </NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end ml-auto">
                            <NavLink className="nav-item text-dark" href="/internships">Internships</NavLink>
                            <NavLink className="nav-item text-dark" href="/events">Events</NavLink>
                            <NavLink className="nav-item text-dark" href="/hire-interns">Hire-Interns</NavLink>
                            <NavLink className="nav-item text-dark" href="/partners">Partners</NavLink>
                            <NavLink className="nav-item text-dark" href="/contact">Contact</NavLink>
                            <NavLink className="nav-item text-dark" href="/for-business">For Business</NavLink>
                            <NavLink className="nav-item text-dark"
                                     onClick={() => this.setState({displayModal: true})}>LogIn</NavLink>
                        </Nav>
                    </NavbarCollapse>
                    {this.state.displayModal ? <ModalViewer show={this.state.displayModal}
                                                            onHide={() => this.setState({displayModal: false})} loggedIn={this.props.loggedIn}/> : null}
                </Navbar>

            </>
        )
    }

}

export default PreLoginHeader;