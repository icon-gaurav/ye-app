/*
 * @author Gaurav Kumar    
*/

import React from "react";
import "./OnBoarding.css";
import {Tabs, Tab, ButtonToolbar, Button, FormControl, FormGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import StudentDetails from "../../signup-module/StudentDetails";
import FormLabel from "react-bootstrap/FormLabel";
import Input from "reactstrap/es/Input";
import Converter from "../../../utilities/Converter";

class OnBoarding extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            internshipPref: [],
            missionPref: [],
            fName: "",
            lName: "",
            email: "",
            mobile: "",
            gender: "",
            dob: "",
            password: "",
            cnfPass: "",
            profilePic: "",
            college: "",
            state: "",
            exp: [],
            social: {},
            skills: [],
            otherAcc: {platform: "", ex: ""}
        }

    }

    componentWillMount() {
        let student = JSON.parse(localStorage.getItem("user"));
        console.log(student.preferences)
        this.setState({
            internshipPref: student.preferences.internship,
            missionPref: student.preferences.mission,
            fName: student.name.fName,
            lName: student.name.lName,
            email: student.contact.email,
            mobile: student.contact.mobile,
            gender: student.gender,
            dob: student.dob,
            password: "",
            cnfPass: "",
            profilePic: Converter.bufferToBase64(student.profilePic),
            college: student.college,
            state: student.contact.address.state,
            exp: [],
            social: student.social,
            skills: student.skills
        })
    }

    render() {

        let student = localStorage.getItem("user");
        return (
            <div className="">
                <div>{this.welcomeMessage()}</div>
            </div>
        );
    }

    welcomeMessage() {
        return (
            <div className='flex-column justify-content-center align-items-center bg-white'>

                <div className="d-flex justify-content-center p-4">
                    <div className="w-50">
                        <h2 className="d-flex justify-content-center">Welcome!</h2>
                        <p className="text-align-center opacity-50 mb-0">you're step away from defining the milestone
                            for your project
                            if you want you can personalize
                            your account to make the platform more friendly for you</p>
                    </div>
                </div>
                <div>
                    {this.renderTabs()}
                </div>
            </div>
        );
    }

    renderTabs() {
        return (
            <Tabs className="d-flex justify-content-between onboarding-tabs" style={{padding: "0% 10%"}}>
                <Tab eventKey="basic" title="Step 1: Basic Details" tabClassName="onboarding-tab">
                    <div className="ye-bg-loader" style={{padding: "2% 10%"}}>
                        {this.renderBasicDetails()}
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Step 2: Setup Profile" tabClassName="onboarding-tab">
                    <div className="ye-bg-loader" style={{padding: "2% 10%"}}>
                        {this.renderProfile()}
                    </div>
                </Tab>
                <Tab eventKey="preferences" title="Step 3: Preferences" tabClassName="onboarding-tab">
                    <div className="ye-bg-loader" style={{padding: "2% 10%"}}>
                        {this.renderPreferences()}
                    </div>
                </Tab>
            </Tabs>
        );
    }

    renderBasicDetails() {
        let {profilePic, fName, lName, email, mobile, gender, dob, password, cnfPass} = this.state;
        return (
            <div className="profile ye-border bg-white">
                <div className="d-flex border-bottom pl-lg-5 pl-3">
                    <div className="d-flex align-items-center">
                        <img src={require("../../../../assets/images/avatar/profile.svg")}
                             height={25} alt="profile-icon"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <h3 className="ml-3 mb-0">Profile</h3>
                    </div>
                    <hr/>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{padding: "2%"}}>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12 d-flex justify-content-center align-items-center">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="">
                                    <img src={profilePic ? profilePic : "https://via.placeholder.com/150"}
                                         className="ye-border" height={150}
                                         width={150}></img>
                                    <div className="d-flex justify-content-center mt-3">
                                        <FormGroup as={Row}>
                                            <FormLabel htmlFor="upload-profile-pic" className="btn btn-success">Upload
                                                photo</FormLabel>
                                            <FormControl type="file" hidden id="upload-profile-pic" accept="image/*"
                                                         onChange={this.updateProfilePic}/>
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-12 d-flex">
                            <div className="d-flex justify-content-center align-items-center">
                                <Form className="">
                                    <Form.Group as={Row}>
                                        <Form.Label column lg="3">Email </Form.Label>
                                        <Col lg={9}>
                                            <Form.Control type="text" placeholder="email@example.com"/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column lg="3">
                                            Name
                                        </Form.Label>
                                        <Col lg="9">
                                            <Row>
                                                <Col>
                                                    <Form.Control type="text" placeholder="First name"/>
                                                </Col>
                                                <Col>
                                                    <Form.Control type="text" placeholder="Last name"/>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column lg="3">
                                            Phone No.
                                        </Form.Label>
                                        <Col lg="9">
                                            <Form.Control type="text" placeholder="Phone No."/>
                                        </Col>
                                    </Form.Group>

                                    <FormGroup as={Row}>
                                        <FormLabel column lg={3}>Gender</FormLabel>
                                        <div className="col-lg-9 d-flex align-items-center">
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <FormControl type="radio" className="custom-control-input"
                                                             id="customRadio"
                                                             name="gender"
                                                             value="Male" onChange={this.updateGender}/>
                                                <FormLabel className="custom-control-label"
                                                           htmlFor="customRadio">Male </FormLabel>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <FormControl type="radio" className="custom-control-input"
                                                             id="customRadio1"
                                                             name="gender"
                                                             value="Female"
                                                             onChange={this.updateGender}/>
                                                <FormLabel className="custom-control-label"
                                                           htmlFor="customRadio1">Female </FormLabel>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <FormControl type="radio" className="custom-control-input"
                                                             id="customRadio2"
                                                             name="gender"
                                                             value="Other"
                                                             onChange={this.updateGender}/>
                                                <FormLabel className="custom-control-label"
                                                           htmlFor="customRadio2">Other </FormLabel>
                                            </div>
                                        </div>
                                    </FormGroup>

                                    <Form.Group as={Row}>
                                        <Form.Label column lg="3">
                                            D.O.B.
                                        </Form.Label>
                                        <Col lg="9">
                                            <Form.Control type="text" placeholder="Phone No."/>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mr-3 mb-3">
                    <div className="profilebutton">
                        <ButtonToolbar>
                            {/*<Button variant="outline-secondary" disabled>cancel</Button>*/}
                            <Button variant="primary" className='ml-2'>Save and Proceed</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        );
    }

    updateProfilePic = (event) => {
        Converter.imageFileToBase64(event.target.files[0])
            .then((base64) => {
                this.setState({profilePic: base64})
            })
    }

    renderProfile() {
        let stateList = [{"code": "AN", "name": "Andaman and Nicobar Islands"},
            {"code": "AP", "name": "Andhra Pradesh"},
            {"code": "AR", "name": "Arunachal Pradesh"},
            {"code": "AS", "name": "Assam"},
            {"code": "BR", "name": "Bihar"},
            {"code": "CG", "name": "Chandigarh"},
            {"code": "CH", "name": "Chhattisgarh"},
            {"code": "DH", "name": "Dadra and Nagar Haveli"},
            {"code": "DD", "name": "Daman and Diu"},
            {"code": "DL", "name": "Delhi"},
            {"code": "GA", "name": "Goa"},
            {"code": "GJ", "name": "Gujarat"},
            {"code": "HR", "name": "Haryana"},
            {"code": "HP", "name": "Himachal Pradesh"},
            {"code": "JK", "name": "Jammu and Kashmir"},
            {"code": "JH", "name": "Jharkhand"},
            {"code": "KA", "name": "Karnataka"},
            {"code": "KL", "name": "Kerala"},
            {"code": "LD", "name": "Lakshadweep"},
            {"code": "MP", "name": "Madhya Pradesh"},
            {"code": "MH", "name": "Maharashtra"},
            {"code": "MN", "name": "Manipur"},
            {"code": "ML", "name": "Meghalaya"},
            {"code": "MZ", "name": "Mizoram"},
            {"code": "NL", "name": "Nagaland"},
            {"code": "OR", "name": "Odisha"},
            {"code": "PY", "name": "Puducherry"},
            {"code": "PB", "name": "Punjab"},
            {"code": "RJ", "name": "Rajasthan"},
            {"code": "SK", "name": "Sikkim"},
            {"code": "TN", "name": "Tamil Nadu"},
            {"code": "TS", "name": "Telangana"},
            {"code": "TR", "name": "Tripura"},
            {"code": "UK", "name": "Uttarakhand"},
            {"code": "UP", "name": "Uttar Pradesh"},
            {"code": "WB", "name": "West Bengal"}];

        let socialList = [{platform: "Instagram", ex: "https://www.twitter.com/"},
            {platform: "Facebook", ex: "https://www.facebook.com/"},
            {platform: "LinkedIn", ex: "https://www.linkedin.com/"},
            {platform: "Github", ex: "https://www.github.com/"},
        ];

        let {otherAcc} = this.state;
        return (
            <div className="profile ye-border bg-white">
                <div className="d-flex border-bottom pl-lg-5 pl-3">
                    <div className="d-flex align-items-center">
                        <img src={require("../../../../assets/images/avatar/profile.svg")}
                             height={25} alt="profile-icon"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <h3 className="ml-3 mb-0">Profile</h3>
                    </div>
                    <hr/>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{padding: "2%"}}>
                    <Form>
                        <FormGroup as={Row}>
                            <FormLabel column lg={3}>College</FormLabel>
                            <Col lg={9}>
                                <FormControl type="text" placeholder="College"/>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row}>
                            <FormLabel column lg={3}>State</FormLabel>
                            <Col lg={9}>
                                <Input type="select" innerRef="category" name="category"
                                       required
                                       value=""
                                       onChange={this.updateState}>
                                    <option value="">Select State</option>
                                    {stateList.map((state, key) =>
                                        <option value={state.name} key={key}>{state.name}</option>
                                    )}
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row}>
                            <FormLabel column lg={3}>Work</FormLabel>
                            <Col lg={9}>
                                <FormControl type="text" placeholder="College"/>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row}>
                            <FormLabel column lg={3}>Social</FormLabel>
                            <Col lg={9}>
                                <div className="d-flex">
                                    <Row>
                                        <Col className="col-9">
                                            <FormControl type="text" placeholder={otherAcc.ex}/>
                                        </Col>
                                        <Col className="col-3 pl-0">
                                            <Input type="select" innerRef="category" name="category"
                                                   required
                                                   onChange={
                                                       (event) => {
                                                           let platform = event.target.value;
                                                           let id = platform.substring(0, 1);
                                                           this.setState({otherAcc: socialList[id - 1]});
                                                       }
                                                   }>
                                                <option value="">Select Platform</option>
                                                {socialList.map((item, key) =>
                                                    <option value={`${key + 1}. ${item.platform}`} key={key}
                                                            id={key}>{item.platform}</option>
                                                )}
                                            </Input>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row}>
                            <FormLabel column lg={3}>Skills</FormLabel>
                            <Col lg={9}>
                                <FormControl type="text" placeholder="Skills"/>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <div className="d-flex justify-content-end mr-3 mb-3">
                    <div className="profilebutton">
                        <ButtonToolbar>
                            <Button variant="outline-secondary" >Skip</Button>
                            <Button variant="primary" className='ml-2'>Save and Proceed</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        );
    }

    renderPreferences() {
        let internshipList = ['Engineering and Technology',
            'Science',
            'Marketing and Sales',
            'Operations',
            'Finance',
            'Strategy',
            'Analytics',
            'Events',
            'Media',
            'Design and Architecture',
            'Social Volunteering',
            'Teaching',
            'Travel and Hospitality',
            'Law',
            'Unique Experiences',
            'Campus Ambassadors'];
        let missionList = ['Social Media Tasks',
            'Campus Tasks',
            'Promotional Tasks',
            'Feedback and Review Tasks'];

        return (
            <div className="ye-border bg-white">
                <div className="d-flex border-bottom pl-lg-5 pl-3">
                    <div className="d-flex align-items-center">
                        <img src={require("../../../../assets/images/avatar/profile.svg")}
                             height={25} alt="profile-icon"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <h3 className="ml-3 mb-0">Preferences</h3>
                    </div>
                    <hr/>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{padding: "2%"}}>
                    <div className="row col-12">
                        <div className="col-lg-6 col-12 p-2">
                            <div className="d-flex pl-3">
                                <h5 className="">Internship Preferences</h5>
                            </div>
                            <div className="font-13 p-3 ye-border">
                                {internshipList.map((cat, key) => {
                                    return (
                                        <div className="pref-item d-inline-block internship" data-id={key} key={key}
                                             data-value={cat}
                                             onClick={this.updateInternshipPrefList}>
                                            {cat}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 p-2">
                            <div className="d-flex pl-3">
                                <h5>Missions Preferences</h5>
                            </div>
                            <div className="font-13 p-3 ye-border">
                                {missionList.map((cat, key) => {
                                    return (
                                        <div className="pref-item d-inline-block mission" data-id={key} key={key}
                                             data-value={cat}
                                             onClick={this.updateMissionPrefList}>
                                            {cat}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mr-3 mb-3">
                    <div className="profilebutton">
                        <ButtonToolbar>
                            <Button variant="outline-secondary" >Skip</Button>
                            <Button variant="primary" className='ml-2'>Save and Proceed</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        );
    }

    updateInternshipPrefList = (event) => {
        let list = this.state.internshipPref;
        let pref = event.target.getAttribute("data-value");
        let index = list.indexOf(pref);
        if (index >= 0) {
            list.splice(index, 1);
            let classes = event.target.getAttribute("class");
            classes = classes.split("selected")[0];
            event.target.setAttribute("class", classes);
            this.setState({internshipPref: list})
        } else {
            list.push(pref);
            let classes = event.target.getAttribute("class");
            classes += " selected";
            event.target.setAttribute("class", classes);
            this.setState({internshipPref: list});
        }
    }

    updateMissionPrefList = (event) => {
        let list = this.state.missionPref;
        let pref = event.target.getAttribute("data-value");
        let index = list.indexOf(pref);
        if (index >= 0) {
            list.splice(index, 1);
            let classes = event.target.getAttribute("class");
            classes = classes.split("selected")[0];
            event.target.setAttribute("class", classes);
            this.setState({missionPref: list})
        } else {
            list.push(pref);
            let classes = event.target.getAttribute("class");
            classes += " selected";
            event.target.setAttribute("class", classes);
            this.setState({missionPref: list});
        }
    }

    updateDetails() {

    }
}

export default OnBoarding;