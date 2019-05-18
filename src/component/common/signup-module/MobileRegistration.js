import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import ApiAction from "../../../actions/ApiAction";

class MobileRegistration extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mobile:"",
            otp:["","","",""],
            showResendOtp:false,
        }
    }

    render(){
        let {otpSent,mobile, confirmOtpError, otpResent} = this.state;
        return(
            <Form onSubmit={otpSent?this.verifyOtp:this.sendOtp}>
                <FormGroup>
                    <FormLabel>
                        Enter Mobile Number
                        {otpSent?<Button>Change Number</Button>:null}
                    </FormLabel>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="mobilePrepend">+91</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number" disabled={otpSent?"disabled":null} onChange={this.setMobileData} aria-describedby="mobilePrepend" name="mobile" placeholder="" />
                    </InputGroup>
                    {otpSent?this.renderVerifyOTP():null}
                    {confirmOtpError?<div className="otp-error">{confirmOtpError}</div>:null}
                    {otpResent && confirmOtpError?<div className="otp-resend">OTP resend</div>:null}
                    <Button  variant="primary" type="submit">{otpSent?"Verify Mobile":"Send OTP"}</Button>
                </FormGroup>
            </Form>
        )
    }

    renderVerifyOTP() {
        let {otp, showResendOtp} = this.state;
        return(
            <FormGroup classname="verify-otp">
                <FormLabel>
                    Verify OTP
                    {showResendOtp?<span className="resend-otp" onClick={this.sendOtp}>Resend OTP</span>:null}
                </FormLabel>
                <FormLabel className="otp-input">
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="0" onChange={this.setOtpData} value={otp[0]} id="otp-input" name="otp-input" autoFocus/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="1" onChange={this.setOtpData} value={otp[1]} id="otp-input" name="otp-input"/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="2" onChange={this.setOtpData} value={otp[2]} id="otp-input" name="otp-input"/>
                    <FormControl onFocus={this.selectText} type="number" maxLength="1" data-index="3" onChange={this.setOtpData} value={otp[3]} id="otp-input" name="otp-input"/>
                </FormLabel>
            </FormGroup>
        );
    }

    selectText(event){
        event.target.select();
    }

    setMobileData(event){
        let mobile = event.target.value;
        if(mobile.length <=10 && isNaN(Number(mobile))){
            this.setState({mobile});
        }
    }

    setOtpData(event){
        let {otp} = this.state;
        let otpIndex = event.target.attributes["data-index"].value;
        if(otp[otpIndex].length<=1){
            otp[otpIndex] = event.target.value;
        }

        let otpInputs = document.getElementsByClassName("otp-input")[0].children;
        let otpElToFocus = otpInputs[Number(otpIndex)+1];
        if(otpElToFocus && event.target.value!==""){
            otpElToFocus.focus();
        }
        if(otpIndex==3){
            this.form.submit();
        }
        this.setState({otp})
    }

    sendOtp(){
        /*this.setState({showResendOtp:true},
            ()=> {ApiAction.sendOtp(this.state.mobile).then(this.updateData)});*/
        console.log("send otp");
    }

    verifyOtp(){
        return true;
    }

    updateData(){
        console.log("inside update data");
    }
}

export default MobileRegistration;