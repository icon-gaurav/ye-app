/*
 * @author Gaurav Kumar    
*/

import React, {PureComponent} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import LoadingAnimation from "../../library/LoadingAnimation";
import Button from "react-bootstrap/Button";
import ApiAction from "../../../actions/ApiAction";
import "../../../assets/stylesheet/LoginModal.css"
import ModalTitle from "react-bootstrap/ModalTitle";
import {Link} from "react-router-dom";
import AES from "crypto-js/aes";
import Config from "../../../config";
import Loader from "react-loader-spinner";
import GoogleSignIn from "./social-login/GoogleSignIn";
import FacebookSignIn from "./social-login/FacebookSignIn";
import LinkedInSignIn from "./social-login/LinkedInSignIn";
import InstagramSignIn from "./social-login/InstagramSignIn";

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

    componentWillMount() {
        window.addEventListener("keypress", (key) => {
            if (key.code == "Enter") {
                this.logIn();
            }
        });
    }

    render() {
        const {username, password, loading, validated} = this.state
        return (

            <div className="login-form bg-white pl-lg-0 pl-md-0 pl-5 pr-lg-0 pr-md-0 pr-5" style={{width:"420px"}}>
                <div className="pt-3 pb-3">
                    <h4>Log In</h4>
                </div>
                {this.state.error ? this.renderInvalidUserDetails() : null}
                <Form noValidate validated={validated}>
                    <Form.Group>
                        <Form.Label>Username or Phone</Form.Label>
                        <InputGroup>
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <Form.Control required type="text" placeholder="username or phone" aria-describedby="userPrepend"
                                          name="username" value={username} onChange={this.handleUsernameChange}/>
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
                                          name="password" value={password} onChange={this.handlePasswordChange}/>
                            <Form.Control.Feedback type="invalid"> Password cannot be empty </Form.Control.Feedback>
                        </InputGroup>
                        <Link to={"/forgot-password"} className="forgot-password-button transparent-btn"
                              onClick={this.props.forgotPassword}>Forgot Password?
                        </Link>
                    </Form.Group>

                    <Form.Group>
                        <br/>
                        {
                            loading ?
                                (<div className="d-flex justify-content-center">
                                    <Loader type="CradleLoader"/>
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
                <div className="oauth-wrapper d-none">
                    <br/>
                    <div className="d-flex justify-content-center">
                        <h6 className="text-align-center">Or SignUp using</h6>
                    </div>
                    <br/>
                    <div className="d-flex justify-content-between pl-5 pr-5">
{/*                        <div className="oauth-item">*/}
                        {/*                            <a href="#">*/}
                        {/*                                <img src={require("../../../assets/images/icons/facebook.svg")} alt="Facebook"/>*/}
                        {/*                            </a>*/}
                        {/*                        </div>*/}
                        {/*                        /!*<div className="oauth-item">*!/*/}
                        {/*                        /!*    <a href="https://github.com/login/oauth/authorize?client_id=0f35a7be9bfa2727d2e8">*!/*/}
                        {/*                        /!*        <img src={require("../../../assets/images/icons/Octocat.jpg")} alt="Github Plus"/>*!/*/}
                        {/*                        /!*    </a>*!/*/}
                        {/*                        /!*</div>*!/*/}
                        {/*                        <div className="oauth-item">*/}
                        {/*                            <a href="#">*/}
                        {/*                                <img src={require("../../../assets/images/icons/linkedin.svg")} alt="LinkedIn"/>*/}
                        {/*                            </a>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="oauth-item">*/}
                        {/*                            <a href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.*/}
                        {/*email&response_type=code&client_id=635202571663-1ghrjn4vki9j3l8p9a48ib06cpsqidr4.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapp.youngengine.com%2Fapi%2Fauth%2Fgoogle%2Foauth-veri*/}
                        {/*fied">*/}
                        {/*                                <img src={require("../../../assets/images/icons/google.svg")} alt="Google"/>*/}
                        {/*                            </a>*/}
                        {/*                        </div>*/}
                        <div className="oauth-item">
                            <GoogleSignIn/>
                        </div>
                        <div className="oauth-item">
                            <FacebookSignIn/>
                        </div>
                        <div className="oauth-item">
                            <LinkedInSignIn/>
                        </div>
                        <div className="oauth-item">
                            <InstagramSignIn/>
                        </div>
                    </div>
                </div>
                <br/>
                <p className="text-align-center">If not registered - <Link to={"/register"}
                                                                           className="registration-flow"
                                                                           onClick={this.props.signUp}>Register
                    here</Link>.
                </p>
            </div>
        );
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) => {
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

    logIn = () => {
        let {username, password} = this.state;

        let cipherText = AES.encrypt(password, Config.secret);

        this.setState({
            error: false,
            message: '',
            loading: true,
            validated: true
        });
        ApiAction.logIn(username, cipherText.toString())
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    localStorage.setItem("loggedIn", JSON.stringify(true));
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    window.location = '/';
                } else {
                    this.setState({
                        loading: false,
                        error: true,
                        message: "Incorrect Username or password!"
                    });
                }
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