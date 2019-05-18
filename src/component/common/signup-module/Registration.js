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

class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
        console.log(props);
    }

    render(){
        return (
            <ModalBody>
                <Form id="registrationType">
                    <FormGroup>
                        <Button className="ye-button student-button" onClick={this.props.triggerStudentUpdate}>Student</Button>
                    </FormGroup>
                    <FormGroup>
                        <Button className="ye-button business-button" onClick={this.props.triggerBusinessUpdate}>Business</Button>
                    </FormGroup>
                </Form>
                {/*<Tabs defaultActiveKey="student">*/}
                {/*    <Tab eventKey="student" title="Student">*/}
                {/*        <StudentRegistration/>*/}
                {/*    </Tab>*/}
                {/*    <Tab eventKey="business" title="Business">*/}
                {/*        <BusinessRegistration/>*/}
                {/*    </Tab>*/}
                {/*</Tabs>*/}
            </ModalBody>
        );
    }

    renderStudent(){
        // return <StudentRegistration/>
        console.log("Inside Student sign up");
    }

    renderBusiness(){
        // return <BusinessRegistration/>
        console.log("Inside Business sign up");
    }
}

export default Registration;