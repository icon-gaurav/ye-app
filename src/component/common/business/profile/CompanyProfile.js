/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Converter from "../../../utilities/Converter";
import ProfileEdit from "./ProfileEdit";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class CompanyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }
    }

    render() {
        let {user} = this.props;
        let {edit} = this.state;
        return (
            <div className="profile-wrapper-item1 bg-white sticky shadow">
                <div className="abstract row">
                    <div className="pic-wrapper col-lg-3 col-md-4 col-sm-12 align-items-center">
                        <div>
                            <input type="image" src={Converter.bufferToBase64(user.logo)}
                                   onClick={() => this.setState({edit: true})}
                                   width="200px"/>
                        </div>
                    </div>
                    <div className="company-details col-lg-9 col-md-8 col-sm-12 position-relative">
                        <div>
                            <h5 className="user-name">{user.name}</h5>
                            <div className="opacity-50">{user.contact.address.city}</div>
                            <div className="mobile-wrapper">
                                <div className="d-inline-block icon-wrapper">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="d-inline-block opacity-50">{user.contact.mobile}</div>
                            </div>
                            <div className="email-wrapper">
                                <div className="d-inline-block icon-wrapper">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <div className="d-inline-block opacity-50"><p>{user.contact.email}</p></div>
                            </div>
                        </div>
                        <div className="position-absolute" style={{top: "10px", right: "30px"}}>
                            <button className="transparent-button" onClick={() => this.setState({edit: true})}><i
                                className="fa fa-ellipsis-h"></i></button>
                            <br/>
                            <div className="badge">
                                <Link to="/settings">
                                      {user.status}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h6>Description</h6>
                    <p className="opacity-75">{user.summary ? user.summary.description : ""}</p>
                    {user.social ?
                        <div className="social-wrapper">
                            <div align="center" style={{marginBottom: 20}}>
                                <a href={user.social.facebook}>
                                    <i className="fa fa-facebook-square fa-2x m-1"
                                       style={{color: "#00acee"}}
                                       aria-hidden="true"></i>
                                </a>
                                <a href={user.social.twitter}>
                                    <i className="fa fa-twitter-square fa-2x m-1" style={{color: "#00acee"}}
                                       aria-hidden="true"></i>
                                </a>
                                <a href={user.social.linkedIn}>
                                    <i className="fa fa-linkedin-square fa-2x m-1"
                                       style={{color: "#00acee"}}
                                       aria-hidden="true"></i>
                                </a>
                                <a href={user.social.github}>
                                    <i className="fa fa-github-square fa-2x m-1" style={{color: "#00acee"}}
                                       aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        : ""}
                    {edit ? <ProfileEdit user={user}
                                         show={edit} onHide={() => this.setState({edit: false})}/> : ""}
                </div>
                {/*<div className="pic-wrapper">*/}
                {/*    <input*/}
                {/*        type="image"*/}
                {/*        src={Converter.bufferToBase64(user.logo)}*/}
                {/*        onClick={() => this.setState({edit: true})}*/}
                {/*        width="200px"/>*/}
                {/*    <div className="rating-wrapper">*/}
                {/*        {this.renderRating()}*/}
                {/*    </div>*/}
                {/*    <div className="edit-button">*/}

                {/*    </div>*/}
                {/*</div>*/}
                {/*< div*/}
                {/*    className="info-wrapper">*/}
                {/*    < div*/}
                {/*        align="center">*/}
                {/*        < h5*/}
                {/*            className="user-name"> {user.name.first ? user.name.first + " " + user.name.last : user.name}*/}
                {/*        </h5>*/}
                {/*        <h6 className="user-city">{user.contact.address.city}</h6>*/}
                {/*        <h6 className="user-country">{user.contact.address.country}</h6>*/}
                {/*    </div>*/}
                {/*    <div className="about-me">*/}
                {/*        <div className="about-me-title text-align-center">*/}
                {/*            <span>Description</span>*/}
                {/*        </div>*/}
                {/*        <div className="text-left">*/}
                {/*            <p className="overflow-hidden">{user.summary.description}</p>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div className="personal-info">*/}
                {/*        <div className="mobile-wrapper">*/}
                {/*            <div className="d-inline-block icon-wrapper">*/}
                {/*                <i className="fa fa-phone" aria-hidden="true"></i>*/}
                {/*            </div>*/}
                {/*            <div className="d-inline-block">{user.contact.mobile}</div>*/}
                {/*        </div>*/}
                {/*        <div className="email-wrapper">*/}
                {/*            <div className="d-inline-block icon-wrapper">*/}
                {/*                <i className="fa fa-envelope" aria-hidden="true"></i>*/}
                {/*            </div>*/}
                {/*            <div className="d-inline-block"><p>{user.contact.email}</p></div>*/}
                {/*        </div>*/}
                {/*        {user.social ?*/}
                {/*            <div className="social-wrapper">*/}
                {/*                <div align="center" style={{marginBottom: 20}}>*/}
                {/*                    <a href={user.social.facebook}>*/}
                {/*                        <i className="fa fa-facebook-square fa-2x m-1" style={{color: "#00acee"}}*/}
                {/*                           aria-hidden="true"></i>*/}
                {/*                    </a>*/}
                {/*                    <a href={user.social.twitter}>*/}
                {/*                        <i className="fa fa-twitter-square fa-2x m-1" style={{color: "#00acee"}}*/}
                {/*                           aria-hidden="true"></i>*/}
                {/*                    </a>*/}
                {/*                    <a href={user.social.linkedIn}>*/}
                {/*                        <i className="fa fa-linkedin-square fa-2x m-1" style={{color: "#00acee"}}*/}
                {/*                           aria-hidden="true"></i>*/}
                {/*                    </a>*/}
                {/*                    <a href={user.social.github}>*/}
                {/*                        <i className="fa fa-github-square fa-2x m-1" style={{color: "#00acee"}}*/}
                {/*                           aria-hidden="true"></i>*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            : ""}*/}
                {/*        {edit ? <ProfileEdit user={user}*/}
                {/*                             show={edit} onHide={() => this.setState({edit: false})}/> : ""}*/}
                {/*    </div>*/}
                {/*</div>*/}
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

}

export default CompanyProfile;