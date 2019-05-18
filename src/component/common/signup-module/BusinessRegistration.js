import React from "react";
import EmailRegistration from "./EmailRegistration";
import ModalBody from "react-bootstrap/ModalBody";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ApiAction from "../../../actions/ApiAction";

class BusinessRegistration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            codeSent: false,
            resendCode: false,
            confirmError: false,
            code:["","","",""],
        }
        this.sendVerificationCode = this.sendVerificationCode.bind(this);
        this.verifyEmail = this.verifyEmail.bind(this);
        this.setEmailData=this.setEmailData.bind(this);
        console.log(props);
    }

    render() {
        return (
            <ModalBody>
                <div className="business-signup container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <p>Get started with Young Engine to fly...</p>
                            {this.renderForm()}
                            <div className="t-and-c">
                                By sign up you accept our <a href="/terms" target="_blank">Terms &amp; Condition</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>

        );
    }

    renderForm() {
        return (
            <Form>
                <FormGroup>
                    <FormLabel>Enter your email id</FormLabel>
                    <FormControl type="text" name="email" placeholder="example@abc.com" onChange={this.setEmailData}/>
                </FormGroup>
                {this.state.codeSent ? this.renderVerifyCode : null}
                <FormGroup>
                    <Button type="submit"
                            onClick={this.state.codeSent ? this.verifyEmail : this.sendVerificationCode}>{this.state.codeSent ? "Verify Email" : "Send Verification Code"}</Button>
                </FormGroup>
            </Form>
        );
    }

    renderVerifyCode = () => {
        let code = this.state.code;
        return (
            <FormGroup classname="verify-otp">
                <FormLabel>
                    Verify OTP
                    {this.state.resendCode ? <span className="resend-code" onClick={this.sendVerificationCode}>Resend OTP</span> : null}
                </FormLabel>
                <FormLabel className="code-input">
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="0"
                                 onChange={this.setCodeData} value={code[0]} id="code-input" name="code-input" autoFocus/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="1"
                                 onChange={this.setCodeData} value={code[1]} id="code-input" name="code-input"/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="2"
                                 onChange={this.setCodeData} value={code[2]} id="code-input" name="code-input"/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="3"
                                 onChange={this.setCodeData} value={code[3]} id="code-input" name="code-input"/>
                </FormLabel>
            </FormGroup>
        );
    }

    verifyEmail() {

    }

    selectText(event) {
        event.target.select();
    }

    setEmailData(event) {
        let email = event.target.value;
        let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regExp.test(String(email).toLowerCase())) {
            this.setState({email: email});
        }
    }

    setCodeData(event) {
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
            this.form.submit();
        }
        this.setState({otp: code})
    }

    sendVerificationCode() {
        this.setState({resendCode: true, codeSent: true,},
            () => {
                ApiAction.sendOtp(this.state.mobile).then(this.updateData)
            });
        console.log("send otp");
    }
}

export default BusinessRegistration;