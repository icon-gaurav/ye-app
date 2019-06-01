import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavLink from "react-bootstrap/NavLink";
import {Overlay, Popover} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../../assets/stylesheet/Header.css";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popoverOpen: true,
        }
        console.log(this.props);
    }

    render() {
        return (
            <Navbar className="container-fluid bg-light" expand="lg" sticky="top">
                <NavItem className="float-left">
                    <button className="btn rounded-circle" onClick={this.props.toggleLeftMenu}>
                        <i className="fas fa-align-justify"></i></button>
                </NavItem>
                <NavbarBrand className="float-left pl-0 pr-0 mr-auto" href="/">
                    <img className="img-fluid" src={require("../../assets/images/logo/YE-Merge-Black.png")} alt="Young Engine" width="100"
                         height="46"/>
                </NavbarBrand>


                {/*<NavLink className="nav-item" href="/internships">Internships</NavLink>*/}
                {/*<NavLink className="nav-item" href="/events">Events</NavLink>*/}
                {/*<NavLink className="nav-item" href="/hire-interns">Hire-Interns</NavLink>*/}
                {/*<NavLink className="nav-item" href="/partners">Partners</NavLink>*/}
                {/*<NavLink className="nav-item" href="/contact">Contact</NavLink>*/}
                {/*<NavLink className="nav-item" href="/for-business">For Business</NavLink>*/}
                <NavItem className="float-right ml-auto">
                    <NavLink className="d-inline-block" href="/help-center">
                        <i className="fa fa-question"></i>
                    </NavLink>
                    <NavLink className="d-inline-block" href="/help-center">
                        <i className="fa fa-bell"></i>
                    </NavLink>
                    <NavLink className="d-inline-block" href="/">
                        <div className="user-picture">
                            <img id="user-popover" className="rounded-circle"
                                 src={require("../../assets/images/logo/YE-Merge-Black.png")}
                                 alt="Young Engine" width="40"
                                 height="40"
                            /></div>
                    </NavLink>
                </NavItem>
                {/*<NavItem>*/}
                {/*    <NavDropdown title="" className="header-dropdown" alignRight>*/}
                {/*        <DropdownItem href="/dashboard"> My Profile </DropdownItem>*/}
                {/*        <DropdownItem href="/dashboard">Applications </DropdownItem>*/}
                {/*        <DropdownItem href="/dashboard"> Mission </DropdownItem>*/}
                {/*        <DropdownItem href="/dashboard" onClick={this.props.logout}> Log Out </DropdownItem>*/}
                {/*    </NavDropdown>*/}

                {/*</NavItem>*/}

        {/*<Overlay show={this.state.popoverOpen} placement="bottom">*/
        }
        {/*    <Popover>*/
        }
        {/*        <>*/
        }
        {/*            <div className="container">*/
        }
        {/*                <div className="row">*/
        }
        {/*                    <Link to={"/profile"}>My Profile</Link>*/
        }
        {/*                </div>*/
        }
        {/*                <div className="row">*/
        }
        {/*                    <Link to={"/applications"}>Applications</Link>*/
        }
        {/*                </div>*/
        }
        {/*                <div className="row">*/
        }
        {/*                    <Link to={"/tasks"}>Tasks</Link>*/
        }
        {/*                </div>*/
        }
        {/*                <div className="row">*/
        }
        {/*                    <Link to={"/mission"}>Mission</Link>*/
        }
        {/*                </div>*/
        }
        {/*                <div className="row">*/
        }
        {/*                    <Link to={"/logout"}>Log Out</Link>*/
        }
        {/*                </div>*/
        }
        {/*            </div>*/
        }
        {/*        </>*/
        }
        {/*    </Popover>*/
        }
        {/*</Overlay>*/
        }
    </Navbar>
    )

    }
    }

    export default Header;