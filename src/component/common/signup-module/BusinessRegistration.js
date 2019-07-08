import React from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import CompanyDetails from "./CompanyDetails";
import ApiAction from "../../../actions/ApiAction";
import validator from "validator";
import Loader from "react-loader-spinner";

class BusinessRegistration extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            codeSent: false,
            resendCode: false,
            confirmError: false,
            code: ["", "", "", ""],
            verified: false,
            errors: {}
        }
        console.log(props);
    }

    render() {
        return (
            this.state.verified ? <CompanyDetails email={this.state.email}/> : this.renderForm()
        );
    }

    renderForm() {
        return (
            <div>
                {/*<ModalHeader style={{borderBottom: "none", paddingLeft: "10%", paddingRight: "10%", paddingTop: "8%"}}*/}
                {/*             closeButton>*/}
                {/*    <ModalTitle>Business Registration</ModalTitle>*/}
                {/*</ModalHeader>*/}
                {/*<ModalBody>*/}
                <div className="pb-3">
                    <h4>Business Registration</h4>
                </div>
                <div className="business-signup">
                    <div>
                        <p>Get started with Young Engine to fly...</p>
                    </div>
                    <Form>
                        <FormGroup>
                            <FormLabel>Enter your email id</FormLabel>
                            <FormControl type="text" name="email" placeholder="example@abc.com"
                                         onChange={this.setEmailData}/>
                        </FormGroup>
                        {this.state.codeSent ? this.renderVerifyCode() : ""}
                        <FormGroup>
                            <Button
                                onClick={this.state.codeSent ? this.verifyEmail : this.sendVerificationCode}>{this.state.codeSent ? "Verify Email" : "Send Verification Code"}</Button>
                        </FormGroup>
                    </Form>
                    <div className="t-and-c">
                        By sign up you accept our <a href="/terms" target="_blank">Terms &amp; Condition</a>.
                    </div>
                </div>
                {/*</ModalBody>*/}
            </div>
        );
    }

    renderVerifyCode = () => {
        let code = this.state.code;
        let resendCode = this.state.resendCode;
        return (
            <FormGroup className="verify-otp">
                <FormLabel style={{width: "100%"}}>
                    Verify OTP
                    {
                        resendCode ?
                            <button className="resend-otp" onClick={this.sendOtp}>Resend OTP</button>
                            :
                            <div className="resend-otp mr-2">
                                <Loader type="Watch" color="#00ff89" height={16} width={16}/>
                            </div>
                    }
                </FormLabel>
                <FormLabel className="code-input d-flex justify-content-between">
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="0" min="0" max="9"
                                 onChange={this.setCodeData} value={code[0]} className="code-input mr-2"
                                 name="otp-input"
                                 autoFocus/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="1" min="0" max="9"
                                 onChange={this.setCodeData} value={code[1]} className="code-input mr-2"
                                 name="otp-input"/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="2" min="0" max="9"
                                 onChange={this.setCodeData} value={code[2]} className="code-input mr-2"
                                 name="otp-input"/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="3" min="0" max="9"
                                 onChange={this.setCodeData} value={code[3]} className="code-input mr-2"
                                 name="otp-input"/>
                </FormLabel>
            </FormGroup>
        );
    }


    checkValidOtp = () => {
        let ans = true
        let message = {}
        let {code} = this.state;
        code.map(val => {
            if (val < 0 || val > 9) {
                ans = false
                message.otp = "Enter a valid OTP"
            }
        })
        this.setState({
            errors: message
        });
        return ans
    }

    verifyEmail = () => {
        if (this.checkValidOtp()) {
            ApiAction.verifyEmail(this.state.email, parseInt(this.state.code.join(''), 10))
                .then((response) => {
                    if (response.data.success) {
                        this.setState({verified: true});
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    selectText = (event) => {
        event.target.select();
    }

    setEmailData = (event) => {
        let email = event.target.value;
        let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regExp.test(String(email).toLowerCase())) {
            this.setState({email: email});
        }
    }

    setCodeData = (event) => {
        let code = this.state.code;
        let codeIndex = event.target.attributes["data-index"].value;
        if (code[codeIndex].length <= 1) {
            code[codeIndex] = event.target.value;
        }

        let otpInputs = document.getElementsByClassName("code-input")[0].children;
        let otpElToFocus = otpInputs[Number(codeIndex) + 1];
        if (otpElToFocus && event.target.value !== "") {
            otpElToFocus.focus();
        }
        if (codeIndex == 3) {
            this.verifyEmail();
        }
        this.setState({code: Object.assign([], code)})
    }

    sendVerificationCode = () => {
        if (validator.isEmail(this.state.email)) {
            ApiAction.sendEmailCode(this.state.email)
                .then((response) => {
                    console.log(response);
                    if (response.data.success) {
                        this.setState({codeSent: true});
                        window.setTimeout(() => {
                            this.setState({resendCode: true})
                        }, 10000);

                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

}

export default BusinessRegistration;