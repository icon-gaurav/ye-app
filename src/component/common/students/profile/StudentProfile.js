/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import "../../../../assets/stylesheet/StudentProfile.css";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Form from "react-bootstrap/Form";
import {FormControl, FormGroup, Image} from "react-bootstrap";
import FormLabel from "react-bootstrap/FormLabel";
import DatePicker from "react-datepicker/es";
import Button from "react-bootstrap/Button";
import PersonalDetailModal from "./PersonalDetailModal";
import ApiAction from "../../../../actions/ApiAction";
import Converter from "../../../utilities/Converter";
import {Link} from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

class StudentProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educationModalShow: false,
            tempEducation: {},
            experienceModalShow: false,
            tempExperience: {},
            certificateModalShow: false,
            tempCertificate: {},
            skillModalShow: false,
            tempSkill: {},
            personalDetailModalShow: false,
            modalType: "Add",
            experiences: [],
            education: [],
            skills: [],
            certificates: [],
            key: -1,
        };
    }

    componentWillMount() {
        let experiences = [
            {
                title: "title",
                organization: "organization",
                location: "location",
                responsibility: "back-end",
                duration: {
                    start: new Date(),
                    end: new Date()
                },
                summary: "summary of work here"
            },
            {
                title: "title2",
                organization: "organization2",
                location: "location2",
                responsibility: "back-end2",
                duration: {
                    start: new Date(),
                    end: new Date()
                },
                summary: "summary of work here2"
            }
        ];
        let education = [
            {
                school: "School1",
                degree: "degree1",
                field: "field1",
                duration: {
                    start: new Date(),
                    end: new Date()
                },
                grade: 9,
                summary: "sumary1"
            },
            {
                school: "School2",
                degree: "degree2",
                field: "field2",
                duration: {
                    start: new Date(),
                    end: new Date()
                },
                grade: 4,
                summary: "sumary2"
            }
        ];
        let certificates = [
            {
                name: "name1",
                organization: "organization1",
                duration: {
                    start: new Date(),
                    end: new Date()
                },
                credential: {
                    id: "id1",
                    url: "url1",
                }
            },
            {
                name: "name2",
                organization: "organization2",
                duration: {
                    start: new Date(),
                    end: new Date()
                },
                credential: {
                    id: "id2",
                    url: "url2",
                }
            }];
        let skills = [
            {
                skill: "skill1",
                level: "Advanced"
            },
            {
                skill: "skill2",
                level: "Average"
            }];
        // this.setState({experiences: experiences, education: education, certificates: certificates, skills: skills});
    }

    render() {
        return (
            <div className="main-app">
                <div className="header">PROFILE</div>
                <div className="row">
                    <div className="col-lg-4  col-md-5 col-12 mb-4">
                        {this.renderProfileSummary()}
                    </div>
                    <div className="col-lg-8 col-md-7 col-12">
                        <div className="">
                            {this.renderDetails()}
                        </div>
                    </div>
                </div>
                {this.state.educationModalShow ? this.renderEducationModal() : ""}
                {this.state.experienceModalShow ? this.renderExperienceModal() : ""}
                {this.state.certificateModalShow ? this.renderCertificateModal() : ""}
                {this.state.skillModalShow ? this.renderSkillModal() : ""}
                {this.state.personalDetailModalShow ? <PersonalDetailModal
                    user={this.props.user}
                    show={this.state.personalDetailModalShow}
                    onHide={() => this.setState({personalDetailModalShow: false})}/> : ""}
            </div>
        );
    }

    renderProfileSummary() {
        let {user} = this.props;
        let percentage = 10;
        return (
            <div className=" bg-white ye-border max-h-100">
                <div className="d-flex justify-content-center">
                    <div className="rounded w-100 position-relative"
                         style={{backgroundImage: "url(" + require("../insight/Mobile4.jpg") + ")"}}>
                        {user.logo || user.profilePic ?
                            <input type="image" className="rounded-circle position-relative m-auto"
                                   src={Converter.bufferToBase64(user.logo ? user.logo : user.profilePic)}
                                   height="100px" width="100px"
                                   style={{display: "block", top: "50%", border: "5px solid orange"}}
                                   onClick={() => this.setState({personalDetailModalShow: true})}></input>
                            : <input type="image" className="rounded-circle position-relative m-auto"
                                     src={require("../insight/rock.png")}
                                     height="100px" width="100px"
                                     style={{display: "block", top: "50%", border: "5px solid orange"}}
                                     onClick={() => this.setState({personalDetailModalShow: true})}></input>}

                    </div>
                    {/*<Image className="rounded-circle"*/}
                    {/*       src={Converter.bufferToBase64(user.logo ? user.logo : user.profilePic)}*/}
                    {/*       width="100" height="100"/>*/}
                </div>
                <div className="summary-wrapper mt-4">
                    <div className="d-flex justify-content-center">
                    <span
                        style={{padding: "3% 0%"}}>
                        <strong>{user.name.first ? user.name.first + " " + user.name.last : user.name}</strong>
                    </span>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        <div><span>Bio</span></div>
                        <div>{user.summary.description}</div>
                    </div>
                    <div className="mt-2 mb-2">
                        <div>
                            <ProgressBar variant="success" now={percentage} label={`${percentage}%`}/>
                        </div>
                    </div>
                    <div className="flex-row justify-content-center">
                        <div className="d-flex justify-content-center">
                            {this.renderRating()}
                        </div>
                        <div className="d-flex justify-content-center opacity-50">({user.rating.length} reviews)</div>
                    </div>
                    <div className="d-flex">
                        <div className="personal-info">
                            <div className="mobile-wrapper">
                                <div className="d-inline-block icon-wrapper">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="d-inline-block">{user.contact.mobile}</div>
                            </div>
                            <div className="email-wrapper">
                                <div className="d-inline-block icon-wrapper">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <div className="d-inline-block"><p>{user.contact.email}</p></div>
                            </div>
                            {user.social ?
                                <div className="social-wrapper">
                                    <div align="center" style={{marginBottom: 20}}>
                                        <a href={user.social.facebook} target="_blank">
                                            <i className="fa fa-facebook-square fa-2x m-1" style={{color: "#00acee"}}
                                               aria-hidden="true"></i>
                                        </a>
                                        <a href={user.social.twitter} target="_blank">
                                            <i className="fa fa-twitter-square fa-2x m-1" style={{color: "#00acee"}}
                                               aria-hidden="true"></i>
                                        </a>
                                        <a href={user.social.linkedIn} target="_blank">
                                            <i className="fa fa-linkedin-square fa-2x m-1" style={{color: "#00acee"}}
                                               aria-hidden="true"></i>
                                        </a>
                                        <a href={user.social.github} target="_blank">
                                            <i className="fa fa-github-square fa-2x m-1" style={{color: "#00acee"}}
                                               aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                                :
                                ""}

                        </div>
                    </div>
                </div>
                <div className="text-align-center">
                    <Link to="/settings">{user.status}</Link>
                </div>
            </div>
        );
    }

    renderPersonalDetails() {
        let {user} = this.props;
        return (
            <div className="profile-wrapper-item1 bg-white sticky shadow">
                <div className="pic-wrapper position-relative">
                    <input type="image"
                           src={user.profilePic ? Converter.bufferToBase64(user.profilePic) : require("../../../../assets/images/icons/no-image.png")}
                           onClick={() => this.setState({personalDetailModalShow: true})}/>
                    <div className="rating-wrapper">
                        {this.renderRating()}
                    </div>
                    <div className="edit-button">

                    </div>
                </div>
                <div className="info-wrapper">
                    <div align="center">
                        <h5 className="user-name">{user.name.first ? user.name.first + " " + user.name.last : user.name}</h5>
                        <h6 className="user-city">{user.contact.address.city}</h6>
                        <h6 className="user-country">{user.contact.address.country}</h6>
                    </div>
                    <div className="about-me">
                        <div className="about-me-title text-align-center">
                            <span>About Me</span>
                        </div>
                        <div className="text-left">
                            <p className="overflow-hidden">{user.summary.aboutMe}</p>
                        </div>

                    </div>
                    <div className="personal-info">
                        <div className="mobile-wrapper">
                            <div className="d-inline-block icon-wrapper">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <div className="d-inline-block">{user.contact.mobile}</div>
                        </div>
                        <div className="email-wrapper">
                            <div className="d-inline-block icon-wrapper">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div className="d-inline-block"><p>{user.contact.email}</p></div>
                        </div>
                        {user.social ?
                            <div className="social-wrapper">
                                <div align="center" style={{marginBottom: 20}}>
                                    <a href={user.social.facebook}>
                                        <i className="fa fa-facebook-square fa-2x m-1" style={{color: "#00acee"}}
                                           aria-hidden="true"></i>
                                    </a>
                                    <a href={user.social.twitter}>
                                        <i className="fa fa-twitter-square fa-2x m-1" style={{color: "#00acee"}}
                                           aria-hidden="true"></i>
                                    </a>
                                    <a href={user.social.linkedIn}>
                                        <i className="fa fa-linkedin-square fa-2x m-1" style={{color: "#00acee"}}
                                           aria-hidden="true"></i>
                                    </a>
                                    <a href={user.social.github}>
                                        <i className="fa fa-github-square fa-2x m-1" style={{color: "#00acee"}}
                                           aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            : ""}
                    </div>
                </div>
                <div className="text-align-center">
                    <Link to="/settings">{user.status}</Link>
                </div>
            </div>
        );
    }

    renderRating = () => {
        let {rating} = this.props.user;
        let cumulativeRating = 0;
        rating.map((rate) => {
            cumulativeRating += rate;
        });
        cumulativeRating = Math.floor(cumulativeRating / rating.length);
        let items = [];
        let i = 0;
        while (i < 5) {
            if (i <= cumulativeRating) {
                items.push(<span><i className="fa fa-star" id="star1" aria-hidden="true"></i></span>);
            } else {
                items.push(<span><i className="fa fa-star-o" id="star1" aria-hidden="true"></i></span>);
            }
            i++;
        }
        return items;
    }

    renderDetails() {
        let {user} = this.props;
        return (
            <div className="">
                <div className="ye-border mb-4">
                    <div className="bg-white">
                        <div className="intro-header">
                            <div className="d-inline-block">
                                <h4>
                                    <b>Experience</b>
                                </h4>
                            </div>
                            <div className="d-inline-block float-right">
                                <div className="text-align-right">
                                    <button className="btn plus"
                                            onClick={() => this.setState({
                                                experienceModalShow: true,
                                                modalType: "Add",
                                                tempExperience: {
                                                    title: "",
                                                    organization: "",
                                                    location: "",
                                                    responsibility: "",
                                                    duration: {
                                                        start: new Date(),
                                                        end: new Date()
                                                    },
                                                    summary: ""
                                                }
                                            })}>
                                        <i className="fas fa-plus text-success "
                                           data-toggle="modal" data-target="#addexperience"
                                           aria-hidden="true">
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="intro-item">
                            {user.experience.map((exp, key) => {
                                return (
                                    <div className="item-wrapper" key={key}>
                                        <div className="position-relative">
                                            <div className="row">
                                                <div className="logo-wrapper col-2 text-align-center">
                                                    <a href="#">
                                                        <img
                                                            src={require("../../../../assets/images/icons/enterprise.svg")}
                                                            className="image-cover-rect"/>
                                                    </a>
                                                </div>
                                                <div className="col-10 px-5">
                                                    <div className="item-details">
                                                        <div>{exp.title}</div>
                                                        <div>{exp.organization}</div>
                                                        <div className="duration">
                                                            {exp.duration.start +
                                                            " -- " +
                                                            exp.duration.end}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="edit-button">
                                                <div className="text-align-right">
                                                    <button className="btn edit"
                                                            onClick={() => this.setState({
                                                                experienceModalShow: true,
                                                                modalType: "Edit",
                                                                tempExperience: Object.assign({}, exp),
                                                                key: key
                                                            })}>
                                                        <i className="fa fa-pencil-square-o text-danger"
                                                           data-toggle="modal" data-target="#editexperience"
                                                           aria-hidden="true">
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row px-5 pt-3">{exp.summary}</div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
                <div className="ye-border mb-4">
                    <div className="bg-white">
                        <div className="intro-header">
                            <div className="d-inline-block">
                                <h4>
                                    <b>Education</b>
                                </h4>
                            </div>
                            <div className="d-inline-block float-right">
                                <div className="text-align-right">
                                    <button className="btn plus"
                                            onClick={() => this.setState({
                                                educationModalShow: true,
                                                modalType: "Add",
                                                tempEducation: {
                                                    school: "",
                                                    degree: "",
                                                    field: "",
                                                    duration: {
                                                        start: new Date(),
                                                        end: new Date()
                                                    },
                                                    grade: "",
                                                    summary: ""
                                                }
                                            })}>
                                        <i className="fas fa-plus text-success "
                                           data-toggle="modal" data-target="#addexperience"
                                           aria-hidden="true">
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="intro-item">
                            {user.education.map((edu, key) => {
                                return (
                                    <div className="item-wrapper" key={key}>
                                        <div className="position-relative">
                                            <div className="row">
                                                <div className="logo-wrapper col-2 text-align-center">
                                                    <a href="#">
                                                        <img
                                                            src={require("../../../../assets/images/icons/graduation.svg")}
                                                            className="image-cover-rect"/>
                                                    </a>
                                                </div>
                                                <div className="col-10 px-5">
                                                    <div className="item-details">
                                                        <div>{edu.degree}</div>
                                                        <div>{edu.school}</div>
                                                        <div className="duration">
                                                            <span>{edu.duration.start + " -- " + edu.duration.end}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="edit-button">
                                                <div className="text-align-right">
                                                    <button className="btn edit"
                                                            onClick={() => this.setState({
                                                                educationModalShow: true,
                                                                modalType: "Edit",
                                                                tempEducation: Object.assign({}, edu),
                                                                key: key,
                                                            })}>
                                                        <i className="fa fa-pencil-square-o text-danger"
                                                           data-toggle="modal" data-target="#editexperience"
                                                           aria-hidden="true">
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row px-5 pt-3">{edu.summary}</div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
                <div className="ye-border mb-4">
                    <div className="bg-white">
                        <div className="intro-header">
                            <div className="d-inline-block">
                                <h4>
                                    <b>Certificate</b>
                                </h4>
                            </div>
                            <div className="d-inline-block float-right">
                                <div className="text-align-right">
                                    <button className="btn plus"
                                            onClick={() => this.setState({
                                                certificateModalShow: true,
                                                modalType: "Add",
                                                tempCertificate: {
                                                    name: "",
                                                    organization: "",
                                                    duration: {
                                                        start: new Date(),
                                                        end: new Date()
                                                    },
                                                    credential: {
                                                        id: "",
                                                        url: "",
                                                    }
                                                }
                                            })}>
                                        <i className="fas fa-plus text-success "
                                           data-toggle="modal" data-target="#addexperience"
                                           aria-hidden="true">
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="intro-item">
                            {user.certificates.map((cer, key) => {
                                return (
                                    <div className="item-wrapper" key={key}>
                                        <div className="position-relative">
                                            <div className="row">
                                                <div className="logo-wrapper col-2 text-align-center">
                                                    <a href="#">
                                                        <img
                                                            src={require("../../../../assets/images/icons/medal.svg")}
                                                            className="image-cover-rect"/>
                                                    </a>
                                                </div>
                                                <div className="col-10 px-5">
                                                    <div className="item-details">
                                                        <div>{cer.name}</div>
                                                        <div>{cer.organization}</div>
                                                        <div className="duration">
                                                            <span>{cer.duration.start
                                                            + " -- " +
                                                            cer.duration.end}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="edit-button">
                                                <div className="text-align-right">
                                                    <button className="btn edit"
                                                            onClick={() => this.setState({
                                                                certificateModalShow: true,
                                                                modalType: "Edit",
                                                                tempCertificate: Object.assign({}, cer),
                                                                key: key
                                                            })}>
                                                        <i className="fa fa-pencil-square-o text-danger"
                                                           data-toggle="modal" data-target="#editexperience"
                                                           aria-hidden="true">
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row px-5 pt-3">{cer.summary}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="ye-border">
                    <div className="bg-white">
                        <div className="intro-header">
                            <div className="d-inline-block">
                                <h4>
                                    <b>Skills</b>
                                </h4>
                            </div>
                            <div className="d-inline-block float-right">
                                <div className="text-align-right">
                                    <button className="btn plus transparent-button" onClick={() => this.setState({
                                        skillModalShow: true,
                                        modalType: "Add",
                                        tempSkill: {
                                            skill: "",
                                            level: ""
                                        },
                                    })}>
                                        <i className="fas fa-plus text-success "
                                           data-toggle="modal" data-target="#addexperience"
                                           aria-hidden="true">
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="intro-item">
                            {user.skills.length > 0 ?
                                <div className="item-wrapper">
                                    <div className="skill-list">
                                        <ul>
                                            {user.skills.map((skill, key) => {
                                                return (
                                                    <li key={key}>
                                                        <div className="position-relative">
                                                            <div>
                                                                {/*<i>*/}
                                                                {/*<img*/}
                                                                {/*    src={require("../../../../assets/images/icons/talent.svg")}*/}
                                                                {/*    width={15}/>*/}
                                                                {/*</i>*/}
                                                                <i className="fa fa-bolt" aria-hidden="true"></i>
                                                                <span>{skill.skill}</span>
                                                            </div>
                                                            <div className="edit-button">
                                                                <div className="text-align-right">
                                                                    <button className="btn edit"
                                                                            onClick={() => this.setState({
                                                                                skillModalShow: true,
                                                                                modalType: "Edit",
                                                                                tempSkill: Object.assign({}, skill),
                                                                                key: key
                                                                            })}>
                                                                        <i className="fa fa-pencil-square-o text-danger"
                                                                           data-toggle="modal"
                                                                           data-target="#editexperience"
                                                                           aria-hidden="true">
                                                                        </i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    editPersonalDetails = () => {
        console.log("inside edit details");
    }

    renderExperienceModal() {
        let exp = this.state.tempExperience;
        let type = this.state.modalType;
        return (
            <Modal show={this.state.experienceModalShow} onHide={() => this.setState({experienceModalShow: false})}
                   centered>
                <ModalHeader>
                    <Modal.Title>{type} Experience</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="scrollable-modal-div">
                        <Form>
                            <FormGroup>
                                <FormLabel>Title</FormLabel>
                                <FormControl type="text" name="title"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Title" value={exp.title} onChange={this.updateExpTitle}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Organization</FormLabel>
                                <FormControl type="text" name="organization"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Organization" value={exp.organization}
                                             onChange={this.updateExpOrganization}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Location</FormLabel>
                                <FormControl type="text" name="location"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Location" value={exp.location}
                                             onChange={this.updateExpLocation}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Responsibility</FormLabel>
                                <FormControl type="text" name="responsibility"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Responsibility" value={exp.responsibility}
                                             onChange={this.updateExpResponsibility}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className="d-block">Duration</FormLabel>
                                <DatePicker placeholderText="Start Date" name="start-date"
                                            className="border-top-0 border-right-0 border-left-0 mb-2"
                                            maxDate={new Date()} selected={new Date(exp.duration.start)}
                                            onChange={this.updateExpDurationStart}/>
                                <div className="d-inline p-1">to</div>
                                <DatePicker placeholderText="End date" name="end-date"
                                            className="border-top-0 border-right-0 border-left-0 mb-2"
                                            maxDate={new Date()} selected={new Date(exp.duration.end)}
                                            onChange={this.updateExpDurationEnd}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className="d-block">Description</FormLabel>
                                <FormControl type="text" name="summary"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Description" value={exp.summary}
                                             onChange={this.updateSummary}/>
                            </FormGroup>
                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    {type == "Edit" ?
                        <button type="button" className="mr-auto btn btn-danger"
                                onClick={this.deleteExperience}> Delete</button> : ""}
                    <button type="button" className="btn btn-success"
                            onClick={type == "Edit" ? this.editExperience : this.addExperience}>Save
                    </button>
                </ModalFooter>
            </Modal>
        );
    }

    updateExpTitle = (event) => {
        if (event.target.name == "title") {
            let {tempExperience} = this.state;
            tempExperience.title = event.target.value;
            this.setState({tempExperience: tempExperience});
        }
    }

    updateExpOrganization = (event) => {
        if (event.target.name == "organization") {
            let {tempExperience} = this.state;
            tempExperience.organization = event.target.value;
            this.setState({tempExperience: tempExperience});
        }
    }

    updateExpLocation = (event) => {
        if (event.target.name == "location") {
            let {tempExperience} = this.state;
            tempExperience.location = event.target.value;
            this.setState({tempExperience: tempExperience});
        }
    }

    updateExpResponsibility = (event) => {
        if (event.target.name == "responsibility") {
            let {tempExperience} = this.state;
            tempExperience.responsibility = event.target.value;
            this.setState({tempExperience: tempExperience});
        }
    }

    updateExpDurationStart = (date) => {
        let {tempExperience} = this.state;
        tempExperience.duration.start = date;
        this.setState({tempExperience: tempExperience});
    }

    updateExpDurationEnd = (date) => {
        let {tempExperience} = this.state;
        tempExperience.duration.end = date;
        this.setState({tempExperience: tempExperience});
    }

    updateSummary = (event) => {
        if (event.target.name == "summary") {
            let {tempExperience} = this.state;
            tempExperience.summary = event.target.value;
            this.setState({tempExperience: tempExperience});
        }
    }

    deleteExperience = () => {
        let {experiences, key, tempExperience} = this.state;
        ApiAction.deleteExperience(this.props.user, tempExperience)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    experiences.splice(key, 1);
                    this.setState({experiences: experiences, experienceModalShow: false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    editExperience = () => {
        let {experiences, key, tempExperience} = this.state;
        ApiAction.updateExperience(this.props.user, tempExperience)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    experiences[key] = response.data.experience;
                    this.setState({experiences: experiences, experienceModalShow: false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    addExperience = () => {
        let {experiences, tempExperience} = this.state;
        ApiAction.addExperience(this.props.user, tempExperience)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    experiences.push(response.data.experience);
                    this.setState({experiences: experiences, experienceModalShow: false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderEducationModal() {
        let edu = this.state.tempEducation;
        let type = this.state.modalType;
        return (
            <Modal show={this.state.educationModalShow} onHide={() => this.setState({educationModalShow: false})}
                   centered>
                <ModalHeader>
                    <Modal.Title>{type} Education</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="scrollable-modal-div">
                        <Form>
                            <FormGroup className="form-group">
                                <FormLabel>School / College</FormLabel><br/>
                                <FormControl type="text" name="school"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="School / College" value={edu.school}
                                             onChange={this.updateEduSchool}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Degree</FormLabel>
                                <FormControl type="text" name="degree"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Degree" value={edu.degree} onChange={this.updateEduDegree}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Field of study</FormLabel>
                                <FormControl type="text" name="field"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Field of study" value={edu.field}
                                             onChange={this.updateEduField}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className="d-block">Duration</FormLabel>
                                <DatePicker placeholderText="From" name="start-date"
                                            className="border-top-0 border-right-0 border-left-0 mb-2"
                                            selected={new Date(edu.duration.start)}
                                            onChange={this.updateEduDurationStart}/>
                                <div className="d-inline p-1">to</div>
                                <DatePicker placeholderText="To" name="end-date"
                                            className="border-top-0 border-right-0 border-left-0 mb-2"
                                            selected={new Date(edu.duration.end)} onChange={this.updateEduDurationEnd}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Grades</FormLabel>
                                <FormControl type="text" name="grades"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Grades" value={edu.grade} onChange={this.updateEduGrade}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className="d-block">Description</FormLabel>
                                <FormControl type="text" as="textarea" name="summary"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Description" onChange={this.updateEduSummary}/>
                            </FormGroup>
                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    {type === "Edit" ?
                        <button type="button" className="mr-auto btn btn-danger"
                                onClick={this.deleteEducation}> Delete</button> : ""}
                    <button type="button" className="btn btn-success"
                            onClick={type === "Edit" ? this.editEducation : this.addEducation}>Save
                    </button>
                </ModalFooter>
            </Modal>
        );
    }

    updateEduSchool = (event) => {
        if (event.target.name == "school") {
            let {tempEducation} = this.state;
            tempEducation.school = event.target.value;
            this.setState({tempExperience: tempEducation});
        }
    }

    updateEduDegree = (event) => {
        if (event.target.name == "degree") {
            let {tempEducation} = this.state;
            tempEducation.degree = event.target.value;
            this.setState({tempExperience: tempEducation});
        }
    }

    updateEduField = (event) => {
        if (event.target.name == "field") {
            let {tempEducation} = this.state;
            tempEducation.field = event.target.value;
            this.setState({tempExperience: tempEducation});
        }
    }

    updateEduDurationStart = (date) => {
        let {tempEducation} = this.state;
        tempEducation.duration.start = date;
        this.setState({tempExperience: tempEducation});
    }

    updateEduDurationEnd = (date) => {
        let {tempEducation} = this.state;
        tempEducation.duration.end = date;
        this.setState({tempExperience: tempEducation});
    }

    updateEduGrade = (event) => {
        if (event.target.name == "grades") {
            let {tempEducation} = this.state;
            tempEducation.grade = event.target.value;
            this.setState({tempExperience: tempEducation});
        }
    }

    updateEduSummary = (event) => {
        if (event.target.name == "summary") {
            let {tempEducation} = this.state;
            tempEducation.summary = event.target.value;
            this.setState({tempExperience: tempEducation});
        }
    }

    deleteEducation = () => {
        let {education,key, tempEducation} = this.state;
        ApiAction.deleteEducation(this.props.user, tempEducation)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    education.splice(key, 1);
                    this.setState({education:education, educationModalShow:false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    editEducation = () => {
        let {education, key, tempEducation} = this.state;
        ApiAction.updateEducation(this.props.user, tempEducation)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    education[key] = response.data.education;
                    this.setState({education:education, educationModalShow:false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    addEducation = () => {
        let {education, tempEducation} = this.state;
        ApiAction.addEducation(this.props.user, tempEducation)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    education.push(response.data.education);
                    this.setState({education:education, educationModalShow:false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderCertificateModal() {
        let cer = this.state.tempCertificate;
        let type = this.state.modalType;
        return (
            <Modal show={this.state.certificateModalShow} onHide={() => this.setState({certificateModalShow: false})}
                   centered>
                <ModalHeader>
                    <Modal.Title>{type} Certificate</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="scrollable-modal-div">
                        <Form>
                            <FormGroup className="form-group">
                                <FormLabel>Name</FormLabel>
                                <FormControl type="text" name="name"
                                             className="border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Title" value={cer.name} onChange={this.updateCerName}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Issuing Organisation</FormLabel>
                                <FormControl type="text" name="organization"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Organisation" value={cer.organization}
                                             onChange={this.updateCerOrganization}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className="">Issue Date</FormLabel>
                                <strong style={{float: "right", marginRight: "25%"}}>Expiry Date</strong>
                                <div className="d-block"></div>
                                <DatePicker type="date" name="start-date"
                                            className="form-control d-inline border-top-0 border-right-0 border-left-0 mb-2"
                                            placeholder="From" style={{width: "45%"}}
                                            selected={new Date(cer.duration.start)}
                                            onChange={this.updateCerDurationStart}/>
                                <DatePicker type="date" name="end-date"
                                            className="form-control d-inline border-top-0 border-right-0 border-left-0 mb-2"
                                            placeholder="To" style={{width: "45%", float: "right"}}
                                            selected={new Date(cer.duration.end)} onChange={this.updateCerDurationEnd}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Credential ID</FormLabel>
                                <FormControl type="text" name="credential-id"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Credential ID/" value={cer.credential.id}
                                             onChange={this.updateCerCredentialId}/>
                                <FormLabel>Credential URL</FormLabel>
                                <FormControl type="url" name="credential-url"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="https:/" value={cer.credential.url}
                                             onChange={this.updateCerCredentialUrl}/>
                            </FormGroup>
                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    {type == "Edit" ?
                        <button type="button" className="mr-auto btn btn-danger"
                                onClick={this.deleteCertificate}> Delete</button> : ""}
                    <button type="button" className="btn btn-success"
                            onClick={type == "Edit" ? this.editCertificate : this.addCertificate}>Save
                    </button>
                </ModalFooter>
            </Modal>
        );
    }

    updateCerName = (event) => {
        if (event.target.name == "name") {
            let {tempCertificate} = this.state;
            tempCertificate.name = event.target.value;
            this.setState({tempCertificate: tempCertificate});
        }
    }

    updateCerOrganization = (event) => {
        if (event.target.name == "organization") {
            let {tempCertificate} = this.state;
            tempCertificate.organization = event.target.value;
            this.setState({tempCertificate: tempCertificate});
        }
    }

    updateCerDurationStart = (date) => {
        let {tempCertificate} = this.state;
        tempCertificate.duration.start = date;
        this.setState({tempCertificate: tempCertificate});
    }

    updateCerDurationEnd = (date) => {
        let {tempCertificate} = this.state;
        tempCertificate.duration.end = date;
        this.setState({tempCertificate: tempCertificate});
    }

    updateCerCredentialId = (event) => {
        if (event.target.name == "credential-id") {
            let {tempCertificate} = this.state;
            tempCertificate.credential.id = event.target.value;
            this.setState({tempCertificate: tempCertificate});
        }
    }

    updateCerCredentialUrl = (event) => {
        if (event.target.name == "credential-url") {
            let {tempCertificate} = this.state;
            tempCertificate.credential.url = event.target.value;
            this.setState({tempCertificate: tempCertificate});
        }
    }

    deleteCertificate = () => {
        let {certificates, key, tempCertificate} = this.state;
        ApiAction.deleteCertificate(this.props.user, tempCertificate)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    certificates.splice(key, 1);
                    this.setState({certificates: certificates, certificateModalShow: false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    editCertificate = () => {
        let {certificates, key, tempCertificate} = this.state;
        ApiAction.updateCertificate(this.props.user, tempCertificate)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    certificates[key] = response.data.certificate;
                    this.setState({certificates: certificates, certificateModalShow: false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    addCertificate = () => {
        let {certificates, key, tempCertificate} = this.state;
        ApiAction.addCertificate(this.props.user, tempCertificate)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    certificates.push(response.data.certificate);
                    this.setState({certificates: certificates, certificateModalShow: false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderSkillModal() {
        let skill = this.state.tempSkill;
        let type = this.state.modalType;
        return (
            <Modal show={this.state.skillModalShow} onHide={() => this.setState({skillModalShow: false})}
                   centered>
                <ModalHeader>
                    <Modal.Title>{type} Skill</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="scrollable-modal-div">
                        <Form>
                            <FormGroup className="form-group">
                                <input type="hidden" id="skill-id" name="skill-id"/>
                                <FormLabel> Skill</FormLabel>
                                <FormControl type="text" name="skill"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Skill" value={skill.skill} onChange={this.updateSkill}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel> Level</FormLabel>
                                <FormControl type="text" name="level"
                                             className="form-control border-top-0 border-right-0 border-left-0 mb-2"
                                             placeholder="Level" value={skill.level} onChange={this.updateSkillLevel}/>
                            </FormGroup>
                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    {type == "Edit" ?
                        <button type="button" className="mr-auto btn btn-danger"
                                onClick={this.deleteSkill}> Delete</button> : ""}
                    <button type="button" className="btn btn-success"
                            onClick={type == "Edit" ? this.editSkill : this.addSkill}>Save
                    </button>
                </ModalFooter>
            </Modal>
        );
    }

    updateSkill = (event) => {
        if (event.target.name == "skill") {
            let {tempSkill} = this.state;
            tempSkill.skill = event.target.value;
            this.setState({tempSkill: tempSkill});
        }
    }

    updateSkillLevel = (event) => {
        if (event.target.name == "level") {
            let {tempSkill} = this.state;
            tempSkill.level = event.target.value;
            this.setState({tempSkill: tempSkill});
        }
    }

    deleteSkill = () => {
        let {skills, key, tempSkill} = this.state;
        ApiAction.deleteSkill(this.props.user, tempSkill)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    skills.splice(key, 1);
                    this.setState({skills: skills, skillModalShow: false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    editSkill = () => {
        let {skills, key, tempSkill} = this.state;
        ApiAction.updateSkill(this.props.user, tempSkill)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    skills[key] = response.data.skill;
                    this.setState({skills: skills, skillModalShow: false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    addSkill = () => {
        let {skills, tempSkill} = this.state;
        ApiAction.addSkill(this.props.user, tempSkill)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    skills.push(response.data.skill);
                    this.setState({skills: skills, skillModalShow: false});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default StudentProfile;