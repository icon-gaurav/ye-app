/*
 * @author Gaurav Kumar    
*/

import React, { PureComponent } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import LoadingAnimation from "../../library/LoadingAnimation";
import Button from "react-bootstrap/Button";
import ApiAction from "../../../actions/ApiAction";
import "../../../assets/stylesheet/LoginModal.css"
import ModalTitle from "react-bootstrap/ModalTitle";
import { Link } from "react-router-dom";
import { GoogleLogin, FacebookLogin, InstagramLogin, LinkedinLogin } from './social-login'

class Login extends PureComponent {
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
        }
    }

    render() {
        const { username, password, loading, validated } = this.state
        return (

            <div className="login-form w-25 d-block bg-white">
                <div className="pt-3 pb-3">
                    <h4>Log In</h4>
                </div>
                {this.state.error ? this.renderInvalidUserDetails() : null}
                <Form noValidate validated={validated}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <InputGroup>
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <Form.Control required type="text" placeholder="username" aria-describedby="userPrepend"
                                name="username" value={username} onChange={this.handleUsernameChange} />
                            <Form.Control.Feedback type="invalid"> Please provide a valid
                                username </Form.Control.Feedback>
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
                        <Link to={"/forgot-password"} className="forgot-password-button transparent-btn"
                            onClick={this.props.forgotPassword}>Forgot Password?
                        </Link>
                    </Form.Group>

                    <Form.Group>
                        <br />
                        {
                            loading ?
                                (<div className="position-relative">
                                    <LoadingAnimation />
                                </div>)
                                :
                                (
                                    <div className="login-button-wrapper">
                                        <div className="login-button-background"></div>
                                        <Button onClick={this.logIn}>Log In</Button>
                                    </div>
                                )
                        }
                    </Form.Group>

                </Form>
                <div className="oauth-wrapper">
                    <br />
                    <div className="d-flex justify-content-center">
                        <h6 className="text-align-center">Or SignUp using</h6>
                    </div>
                    <br />
                    <div className="d-flex justify-content-between pl-5 pr-5">
                        {/* <div className="oauth-item">
                            <img src={require("../../../assets/images/icons/facebook.svg")} alt="Facebook"/>
                        </div>
                        <div className="oauth-item">
                            <img src={require("../../../assets/images/icons/google-plus.svg")} alt="Google Plus"/>
                        </div>
                        <div className="oauth-item">
                            <img src={require("../../../assets/images/icons/linkedin.svg")} alt="LinkedIn"/>
                        </div> */}
                        <div className="oauth-item">
                            <FacebookLogin />
                        </div>
                        <div className="oauth-item">
                            <GoogleLogin />
                        </div>
                        <div className="oauth-item">
                            <LinkedinLogin />
                        </div>
                        <div className="oauth-item">
                            <InstagramLogin />
                        </div>
                    </div>
                </div>
                <br />
                <p className="text-align-center">If not registered - <Link to={"/register"} className="registration-flow"
                    onClick={this.props.signUp}>Register here</Link>.
                </p>
            </div>
        );
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange = (event) => {
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

    logIn = (event) => {
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
                    this.props.logIn();
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

    }
}

export default Login;