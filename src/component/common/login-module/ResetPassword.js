/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import ApiAction from '../../../actions/ApiAction';
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ModalBody from "react-bootstrap/ModalBody";
import FormFeedback from "reactstrap/es/FormFeedback";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pass: "",
            cnfPass: "",
            passClassName: "",
            cnfPassClassName: "",
            validated: false,
            errors: [],
            reset: false
        }
    }

    render() {
        return (
            this.state.reset ? this.renderResetMessage() : this.renderForm()
        );
    }

    renderForm() {
        let {pass, cnfPass, passClassName, cnfPassClassName} = this.state;
        return (
            <>
                {/*<ModalHeader style={{borderBottom: "none", paddingLeft: "10%", paddingRight: "10%", paddingTop: "8%"}}*/}
                {/*             closeButton>*/}
                {/*    <ModalTitle>Password Reset</ModalTitle>*/}
                {/*</ModalHeader>*/}
                {/*<ModalBody style={{paddingLeft: "10%", paddingRight: "10%"}}>*/}
                {/*    {this.state.errors.length > 0 ? this.renderError() : ""}*/}
                <div className="pt-3 pb-3">
                    <h4>Password Reset</h4>
                </div>
                    <Form noValidate>
                        <FormGroup>
                            <FormLabel>New Password</FormLabel>
                            <FormControl type="password" name="password" required
                                         className={passClassName}
                                         placeholder="New Password" value={pass}
                                         onChange={this.updatePass}/>
                            <FormFeedback>Password should be 6 character long</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl type="password" name="confirm-password" required
                                         className={cnfPassClassName}
                                         placeholder="Confirm Password" value={cnfPass}
                                         onChange={this.updateCnfPass}/>
                            <FormFeedback>Password didn't match!</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Button className="btn btn-success" onClick={this.resetPassword}>Save</Button>
                        </FormGroup>
                    </Form>
                {/*</ModalBody>*/}
            </>
        );
    }

    renderResetMessage() {
        return (
            <>
                <ModalHeader style={{borderBottom: "none", paddingLeft: "10%", paddingRight: "10%", paddingTop: "8%"}}
                             closeButton>
                    <ModalTitle>Password Reset</ModalTitle>
                </ModalHeader>
                <ModalBody style={{paddingLeft: "10%", paddingRight: "10%"}}>
                    <div>
                        <p>Password changed successfully! Login with new password</p>
                    </div>
                </ModalBody>
            </>
        );
    }

    renderError() {
        const errors = this.state.errors.map((error, key) => {
            return (
                <li key={key}>{error}</li>
            );
        });
        return (
            <div className="error-wrapper" style={{color: "red"}}>
                <ul>
                    {errors}
                </ul>
            </div>
        );
    }

    updatePass = (event) => {
        if (event.target.name == "password") {
            let {passClassName} = this.state;
            let pass = event.target.value;
            if (pass.length > 5) {
                passClassName = "is-valid";
            } else {
                passClassName = "is-invalid";
            }
            this.setState({pass: pass, passClassName: passClassName});
        }
    }

    updateCnfPass = (event) => {
        if (event.target.name == "confirm-password") {
            let {pass, cnfPassClassName} = this.state;
            let cnfPass = event.target.value;
            if (pass == cnfPass) {
                cnfPassClassName = "is-valid";
            } else {
                cnfPassClassName = "is-invalid";
            }
            this.setState({cnfPass: cnfPass, cnfPassClassName: cnfPassClassName});
        }
    }

    validatePassword = () => {
        let {pass, cnfPass, cnfPassClassName, passClassName} = this.state;
        let errors = [];
        let result = false;
        cnfPassClassName = "is-invalid";
        passClassName = "is-valid";
        if (pass.length < 5) {
            passClassName = "is-invalid";
            errors.push("Password should be 6 character long");
        }
        if (pass == cnfPass && pass.length > 5) {
            cnfPassClassName = "is-valid";
            result = true;
        } else if (pass != cnfPass) {
            cnfPassClassName = "is-invalid";
            errors.push("Password didn't match!");
        }
        console.log(cnfPassClassName)
        this.setState({passClassName: passClassName, cnfPassClassName: cnfPassClassName});

        return result;
    }

    resetPassword = () => {
        if (this.validatePassword()) {
            // ApiAction.resetPassword(this.state.pass)
            //     .then((response) => {
            //         console.log(response);
            //         if (response.data.success) {
            //
            //         }
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
            this.setState({reset: true});
            // window.setTimeout(() => {
            //     this.props.onHide();
            // }, 2000);
        }
    }
}

export default ResetPassword;