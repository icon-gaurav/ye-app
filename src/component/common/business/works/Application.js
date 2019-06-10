/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Converter from "../../../utilities/Converter";
import ApiAction from "../../../../actions/ApiAction";

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: false
        }
    }

    componentWillMount() {

    }

    render() {
        let {application} = this.props;
        console.log(application)
        let {student} = application;
        let {summary} = this.state;
        return (
            <div className="user-wrapper border">
                <div className="row p-2">
                    <div className="col-lg-1 col-md-2 col-sm-2">
                        <Image className="rounded-circle"
                               src={Converter.bufferToBase64(student.profilePic)}
                               width="50px" height="50px"/>
                    </div>
                    <div className="col-lg-10 col-md-8 col-sm-8">
                        <div className="d-inline">
                            <h6>{student.name.first + " " + student.name.last}</h6>
                        </div>
                        <div className="rating-wrapper">
                            {this.renderRating()}
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-2">
                        <Button onClick={() => this.setState({summary: !summary})}><i className="fas fa-angle-down"></i></Button>
                    </div>
                </div>
                {summary ? this.renderSummary() : ""}
            </div>
        );
    }

    renderRating = () => {
        let {rating} = this.props.application.student;
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

    renderSummary() {
        let {student} = this.props.application;
        let {application} = this.props;
        return (
            <div className="col-12">
                <div className="container-fluid">
                    <div className="col-12">
                        Contact : <span>+91 {student.contact.mobile}</span><br/>
                        Email : <span>{student.contact.email}</span>
                    </div>
                    <hr/>
                    <div className="">
                        <div className="experience-wrapper">
                            <h6>EXPERIENCE</h6>
                            <ul>
                                {student.experience.map((exp, key) => {
                                    return <li key={key}>{exp.title}</li>
                                })}
                            </ul>
                        </div>
                        <div className="education-wrapper">
                            <h6>EDUCATION</h6>
                            <ul>
                                {student.education.map((edu, key) => {
                                    return <li key={key}>{edu.degree}</li>
                                })}
                            </ul>
                        </div>
                        <div className="certificate-wrapper">
                            <h6>CERTIFICATES</h6>
                            <ul>
                                {student.certificates.map((cer, key) => {
                                    return <li key={key}>{cer.name}</li>
                                })}
                            </ul>
                        </div>
                        <div className="skills-wrapper">
                            <h6>SKILLS</h6>
                            <ul>
                                {student.skills.map((sk, key) => {
                                    return <li key={key}>{sk.skill}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    {application.status == "Applied" ?
                        <div className="pb-3">
                            <Button className="btn-danger" onClick={this.reject}>Reject</Button>
                            <Button className="btn-success float-right ml-auto" onClick={this.accept}>Accept</Button>
                        </div>
                        : ""}

                    <div>
                        {/*<div className="col-12"><h5>UPLOADED FILES</h5></div>*/}
                        {/*{uploads.map((upload, key) => {*/}
                        {/*    return (*/}
                        {/*        <div className="col-12" key={key}>*/}
                        {/*            <div className="row">*/}
                        {/*                <div className="col-2">*/}
                        {/*                    <div className="verify-upload text-align-center">*/}
                        {/*                        <input type="image"*/}
                        {/*                               src={Converter.bufferToBase64(upload.document)}*/}
                        {/*                               style={{width: "100px", height: "80px"}}*/}
                        {/*                               onClick={(event) => this.openFullImage(event, Object.assign({}, upload))}/>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="col-10">*/}
                        {/*                    <div>*/}
                        {/*                        <h6>{upload.status}</h6>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="opacity-50">*/}
                        {/*                        <p>{upload.remark}</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    );*/}
                        {/*})}*/}
                    </div>
                </div>
                {/*{this.state.fullImage ? this.renderFullImage() : ""}*/}
            </div>
        );
    }

    reject = () => {
        let {application, work} = this.props;
        let notification = {
            message: "Sorry! You are not selected for the internships.",
            type: "default",
            receiver: application.student
        };
        application.status = "Rejected";
        ApiAction.updateApplication(work, notification, application)
            .then((response) => {
                if (response.data.success) {
                    console.log("notification send to user for rejection")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    accept = () => {
        let {application, work} = this.props;
        let notification = {
            message: "Congratulations! You are selected for this internship",
            type: "confirmation",
            receiver: {
                _id: application.student._id,
                name: application.student.name
            }
        };
        application.status = "Selected";
        ApiAction.updateApplication(work, notification, application)
            .then((response) => {
                if (response.data.success) {
                    console.log("notification send to user for rejection")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default Application;