import React from "react";
import FormLabel from "react-bootstrap/FormLabel";
import ModalBody from "react-bootstrap/ModalBody";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ApiAction from "../../../actions/ApiAction";
import "../../../assets/stylesheet/StudentRegistration.css";
import StudentDetails from "./StudentDetails";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

class StudentRegistration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: "",
            otp: ["", "", "", ""],
            otpSent: false,
            confirmOtpError: false,
            showResendOtp: false,
            verified: false,
        };
        this.sendOtp = this.sendOtp.bind(this);
        this.verifyOtp = this.verifyOtp.bind(this);
        this.updateData = this.updateData.bind(this);
        this.selectText = this.selectText.bind(this);
        this.setOtpData = this.setOtpData.bind(this);
    }

    render() {
        return (
            this.state.verified ? <StudentDetails mobile={this.state.mobile}/> : this.renderForm()
        );
    }

    renderForm() {
        return (
            <>
                <ModalHeader style={{borderBottom: "none", paddingLeft: "10%", paddingRight: "10%", paddingTop: "8%"}}
                             closeButton>
                    <ModalTitle>Student Registration</ModalTitle>
                </ModalHeader>
                <ModalBody style={{paddingLeft: "10%", paddingRight: "10%"}}>
                    <div className="signup container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <p>Get started with new Young Engine Account using your mobile number</p>
                                <Form /*onSubmit={this.state.otpSent ? this.verifyOtp : this.sendOtp}*/>
                                    <FormGroup className="mobile-detail">
                                        <FormLabel style={{width: "100%"}}>
                                            Enter Mobile No.
                                            {this.state.otpSent ?
                                                <button className="change-number" onClick={this.changeNumber}>Change
                                                    Number</button> : null}
                                        </FormLabel>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="mobilePrepend">+91</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl type="number" disabled={this.state.otpSent ? "disabled" : null}
                                                         onChange={this.setMobileData}
                                                         aria-describedby="mobilePrepend" name="mobile" placeholder=""/>
                                        </InputGroup>
                                    </FormGroup>
                                    {this.state.otpSent ? this.renderVerifyOTP() : null}
                                    {this.state.confirmOtpError ?
                                        <div className="otp-error">{this.state.confirmOtpError}</div> : null}
                                    {this.state.showResendOtp && this.state.confirmOtpError ?
                                        <div className="otp-resend">OTP resend</div> : null}
                                    <FormGroup>
                                        <Button variant="primary" className="otp-button"
                                                onClick={this.state.otpSent ? this.verifyOtp : this.sendOtp}>{this.state.otpSent ? "Verify Mobile" : "Send OTP"}</Button>
                                    </FormGroup>
                                </Form>
                                <div className="t-and-c">
                                    By sign up you accept our <a href="/terms" target="_blank">Terms &amp; Condition</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </>
        )
    }

    renderVerifyOTP() {
        let otp = this.state.otp;
        let showResendOtp = this.state.showResendOtp;
        return (
            <FormGroup className="verify-otp">
                <FormLabel style={{width: "100%"}}>
                    Verify OTP {showResendOtp ?
                    <button className="resend-otp" onClick={this.sendOtp}>Resend OTP</button> : null}
                </FormLabel>
                <FormLabel className="otp-input">
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="0" min="0" max="9"
                                 onChange={this.setOtpData} value={otp[0]} id="otp-input" name="otp-input" autoFocus/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="1" min="0" max="9"
                                 onChange={this.setOtpData} value={otp[1]} id="otp-input" name="otp-input"/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="2" min="0" max="9"
                                 onChange={this.setOtpData} value={otp[2]} id="otp-input" name="otp-input"/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="3" min="0" max="9"
                                 onChange={this.setOtpData} value={otp[3]} id="otp-input" name="otp-input"/>
                </FormLabel>
            </FormGroup>
        );
    }

    changeNumber = () => {
        this.setState({
            mobile: "",
            otp: ["", "", "", ""],
            otpSent: false,
            confirmOtpError: false,
            showResendOtp: false,
        });
    }

    selectText(event) {
        event.target.select();
    }

    setMobileData = (event) => {
        let mobile = event.target.value;
        if (mobile.length <= 10 && !isNaN(Number(mobile))) {
            this.setState({mobile: mobile});
        }
    }

    setOtpData(event) {
        let {otp} = this.state;
        let otpIndex = event.target.attributes["data-index"].value;
        if (otp[otpIndex].length <= 1) {
            otp[otpIndex] = event.target.value;
        }

        let otpInputs = document.getElementsByClassName("otp-input")[0].children;
        let otpElToFocus = otpInputs[Number(otpIndex) + 1];
        if (otpElToFocus && event.target.value !== "") {
            otpElToFocus.focus();
        }
        if (otpIndex === 3) {
            this.verifyOtp();
        }
        this.setState({otp: otp});
    }

    sendOtp() {
        // this.setState({showResendOtp: true});
        this.setState({otpSent: true, showResendOtp: true});
        // ApiAction.sendOtp(this.state.mobile)
        //     .then((response) => {
        //         console.log(response);
        //         if (response.data.success) {
        //             this.setState({otpSent: true, showResendOtp: true});
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        console.log("send otp");
    }

    verifyOtp() {
        this.setState({verified: true});
        // ApiAction.verifyOtp(parseInt(this.state.mobile, 10), parseInt(this.state.otp.join(''), 10))
        //     .then((response) => {
        //         console.log(response);
        //         if (response.data.success) {
        //             this.setState({verified: true});
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        // this.setState({verified: true});
        // console.log("Inside Otp verification");
        /* if otp is verified*/

    }

    updateData(response) {
        this.setState({otpSent: true});
        console.log("inside update data" + response);
    }

}

export default StudentRegistration;