import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import Form from "react-bootstrap/Form";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
import {FormControl, FormGroup} from "react-bootstrap";
import FormLabel from "react-bootstrap/FormLabel";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "../../../assets/stylesheet/LoginModal.css";
import ApiAction from "../../../actions/ApiAction";

class LoginModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: "",
            error: false,
        };
        console.log(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.logIn = this.logIn.bind(this);
        console.log(props);
    }

    render() {
        return <ModalBody>
            <div>
                <div className="oauth-wrapper row">
                    <div className="oauth-item col-md-3 ml-auto">
                        <img src={require("../../../assets/images/icons/facebook.svg")} alt="Facebook"/>
                    </div>
                    <div className="oauth-item col-md-3">
                        <img src={require("../../../assets/images/icons/google-plus.svg")} alt="Google Plus"/>
                    </div>
                    <div className="oauth-item col-md-3 mr-auto">
                        <img src={require("../../../assets/images/icons/linkedin.svg")} alt="LinkedIn"/>
                    </div>
                </div>
                <hr/>
                {this.state.error ? this.renderInvalidUserDetails() : null}
                <Form>
                    <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="userPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="text" placeholder="username" aria-describedby="userPrepend"
                                         name="username" onChange={this.handleUsernameChange}/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="passwordPrepend">
                                    <img
                                        src={require("../../../assets/images/icons/password-key.svg")}/></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="password" placeholder="password" aria-describedby="passwordPrepend"
                                         name="password" onChange={this.handlePasswordChange}/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className="login-button-wrapper">
                        <Button className="border-dark" onClick={this.logIn}>Log In</Button>
                    </FormGroup>
                </Form>
                <p>If not registered - <span className="registration-flow" onClick={this.props.triggerRegisterUpdate}>Register here</span>.
                </p>
            </div>
        </ModalBody>;
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    renderInvalidUserDetails() {
        return (
            <div>
                <div className="error-detail">
                    <p>{this.state.message}</p>
                </div>
                <hr/>
            </div>
        );
    }

    logIn() {
        let username = this.state.username;
        let password = this.state.password;
        ApiAction.logIn(username, password)
            .then((response) => {
                if (response.data.success) {
                    localStorage.setItem("loggedIn", JSON.stringify(true));
                    let user = response.data.student;
                    user.role = response.data.user.role;
                    localStorage.setItem("user", JSON.stringify(user));
                    this.props.loggedIn({user: response.data.student, role: response.data.user.role});
                }
            })
            .catch((error) => {
                console.log(error);
            });
        // if (response === ApiAction.NOT_FOUND) {
        //     this.setState({message: "Username does not exist!", error: true});
        // } else if (response === ApiAction.INVALID_USERNAME_OR_PASSWORD) {
        //     this.setState({message: "Invalid Username or Password", error: true});
        // } else {
        //     /* log in user to his dashboard */
        //     console.log("User is logged In");
        //     let user = {
        //         name: username,
        //         role: "STUDENT"
        //     };
        //     this.props.loggedIn(user);
        // }
    }

    renderRegistrationScreen() {
        console.log("Registration here clicked");
    }
}

export default LoginModal;