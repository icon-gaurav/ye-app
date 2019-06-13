import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import Form from "react-bootstrap/Form";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ForgotPassword from "./ForgotPassword";
import "../../../assets/stylesheet/LoginModal.css";
import ApiAction from "../../../actions/ApiAction";
import Registration from "../signup-module/Registration";
import LoadingAnimation from '../../library/LoadingAnimation'

class LoginModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: "",
            error: false,
            forgotPass: false,
            register: false,
            validated: false,
            loading: false,
        };
        console.log(props);
        // this.handleValueChange = this.handleValueChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.logIn = this.logIn.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this)
        console.log(props);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} className="mt-lg-5 mt-md-3 mt-sm-auto">
                {this.state.forgotPass ? <ForgotPassword onHide={this.props.onHide} /> : this.state.register ?
                    <Registration onHide={this.props.onHide} /> : this.renderLoginForm()}
            </Modal>
        );
    }

    renderLoginForm() {
        const { username, password, loading, validated } = this.state

        return (
            <>
                <ModalHeader style={{ borderBottom: "none", paddingLeft: "10%", paddingRight: "10%", paddingTop: "8%" }}
                    closeButton>
                    <ModalTitle>Log In</ModalTitle>
                </ModalHeader>
                <ModalBody style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                    <div className="login-form">
                        {this.state.error ? this.renderInvalidUserDetails() : null}
                        <Form noValidate validated={validated}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <Form.Control required type="text" placeholder="username" aria-describedby="userPrepend"
                                        name="username" value={username} onChange={this.handleUsernameChange} />
                                    <Form.Control.Feedback type="invalid"> Please provide a valid username </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <i className="fas fa-lock"></i>
                                    <Form.Control required type="password" placeholder="password"
                                        aria-describedby="passwordPrepend"
                                        name="password" value={password} onChange={this.handlePasswordChange} />
                                    <Form.Control.Feedback type="invalid"> Password cannot be empty </Form.Control.Feedback>
                                </InputGroup>
                                <button className="forgot-password-button transparent-btn"
                                    onClick={() => this.setState({ forgotPass: true })}>Forgot Password?
                                </button>
                            </Form.Group>

                            <Form.Group>
                                <br />
                                {
                                    loading ?
                                        <LoadingAnimation /> :
                                        (
                                            <div className="login-button-wrapper">
                                                <div className="login-button-background"></div>
                                                <Button onClick={this.logIn}>Log In</Button>
                                            </div>
                                        )
                                }
                            </Form.Group>

                        </Form>
                        <div className="oauth-wrapper text-align-center">
                            <br />
                            <h6>Or SignUp using</h6>
                            <br />
                            <div className="oauth-item col-md-4 ml-auto d-inline">
                                <img src={require("../../../assets/images/icons/facebook.svg")} alt="Facebook" />
                            </div>
                            <div className="oauth-item col-md-4 d-inline">
                                <img src={require("../../../assets/images/icons/google-plus.svg")} alt="Google Plus" />
                            </div>
                            <div className="oauth-item col-md-4 mr-auto d-inline">
                                <img src={require("../../../assets/images/icons/linkedin.svg")} alt="LinkedIn" />
                            </div>
                        </div>
                        <br />
                        <p className="text-align-center">If not registered - <span className="registration-flow"
                            onClick={() => {
                                this.setState({
                                    register: true,
                                    forgotPass: false
                                });
                            }}>Register here</span>.
                        </p>
                    </div>
                </ModalBody>
            </>);
    }

    // handleValueChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // handleSubmit(event) {
    //     console.log('form submitted')
    //     const form = event.currentTarget;
    //     console.log(form)
    //     if (form.checkValidity() === false) {
    //         console.log('check validity = false')
    //         event.preventDefault();
    //         event.stopPropagation();
    //     } else {
    //         this.logIn()
    //     }
    //     this.setState({ validated: true });

    // }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    renderInvalidUserDetails() {
        return (
            <div>
                <div className="error-detail">
                    <p>{this.state.message}</p>
                </div>
                <hr />
            </div>
        );
    }

    logIn(event) {
        const { username, password } = this.state
        console.log('in login action')

        this.setState({
            error: false,
            message: '',
            loading: true,
            validated: true
        })
        ApiAction.logIn(username, password)
            .then((response) => {
                console.log(response.data)
                if (response.data.success) {
                    localStorage.setItem("loggedIn", JSON.stringify(true));
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    this.props.loggedIn(response.data.user);
                } else {
                    console.log(response.data);
                }
                this.setState({
                    loading: false,
                    username: '',
                    password: ''
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    loading: false,
                    username: '',
                    password: '',
                    message: 'Could not connect to Server. Please try again later.',
                    error: true,
                    validated: false
                });
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