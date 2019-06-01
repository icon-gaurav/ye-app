import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import StudentRegistration from "./StudentRegistration";
import BusinessRegistration from "./BusinessRegistration";
import {FormGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormLabel from "react-bootstrap/FormLabel";
import ModalBody from "react-bootstrap/ModalBody";
import "../../../assets/stylesheet/Registration.css";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import Modal from "react-bootstrap/Modal";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            student: false,
            business: false,
        };
    }

    render() {
        return (
            this.state.student ? <StudentRegistration/> : this.state.business ?
                <BusinessRegistration/> : this.renderForm()
        );
    }

    renderForm() {
        return (
            <>
                <ModalHeader style={{borderBottom: "none", paddingLeft: "10%", paddingRight: "10%", paddingTop: "8%"}}
                             closeButton>
                    <ModalTitle>Registration</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form className="registration-wrapper text-align-center">
                        <div className="registration">
                            <div>
                                <label className="registration-type">
                                    <input type="radio" name="registration-type" value="student"
                                           onClick={this.checkHandler}
                                           required/>
                                    <div className="avatar student-avatar"></div>
                                    <h4>Student</h4>
                                </label>
                            </div>
                            <br/>
                            <br/>
                            <div>
                                <label className="registration-type">
                                    <input type="radio" name="registration-type" value="business"
                                           onClick={this.checkHandler} required/>
                                    <div className="avatar company-avatar"></div>
                                    <h4>Business</h4>
                                </label>
                            </div>
                        </div>
                    </Form>
                    <div className="text-align-right">
                        <button className="next-button ye-button"
                                disabled={this.state.type.length > 0 ? false : true}
                                onClick={this.next}>Next<i
                            className="fas fa-arrow-right"></i></button>
                    </div>
                </ModalBody>
            </>
        );
    }

    checkHandler = (event) => {
        if (event.target.name = "registration-type") {
            if (event.target.value == "student") {
                this.setState({type: "student"});
            } else if (event.target.value == "business") {
                this.setState({type: "business"})
            }
        }
    }

    next = () => {
        if (this.state.type == "business") {
            this.setState({business: true});
        } else if (this.state.type == "student") {
            this.setState({student: true});
        }
    }

    renderStudent() {
        // return <StudentRegistration/>
        console.log("Inside Student sign up");
    }

    renderBusiness() {
        // return <BusinessRegistration/>
        console.log("Inside Business sign up");
    }
}

export default Registration;