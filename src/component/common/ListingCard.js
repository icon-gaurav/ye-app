import React from "react";
import Cipher from "../../util/Cipher";
import {Link} from "react-router-dom";
import "../../assets/stylesheet/ListingCard.css";
import Converter from "../utilities/Converter";

class ListingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    calculateDuration = (start, end) => {
        let ms = end.getTime() - start.getTime();
        let days = Math.floor((((ms / 1000) / 60) / 60) / 24);
        let weeks = Math.floor(days / 7);
        days = days % 7;
        let result = weeks > 0 ? weeks + " Weeks " : "";
        result += days > 0 ? days + " Days " : "";
        console.log(result)
        return result;
    }
    render() {

        /*let {data} = this.props;*/
        let {work} = this.props;
        return (
            <Link to={{pathname: "/internships/" + work._id, state:{work:work}}} target="_blank">
                <div className="listing-card-wrapper">
                    {this.isFeatured(work) ? <div className="ribbon"><span>Featured</span></div> : null}
                    <div className="top-items container">
                        <div className="row logo-container">
                            <div className="col-12 logo-wrapper">
                                <div className="col logo-image">
                                    <img src={Converter.bufferToBase64(work.company.logo)} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row work-profile-wrapper top-item">
                            <div className="profile-icon icon-wrapper">
                                <i className="fa fa-briefcase" style={{color: "orange"}}
                                   aria-hidden="true"/></div>
                            <div className="profile-title"><h4>{work.profile}</h4></div>
                        </div>
                        <div className="row company-name-wrapper top-item">
                            <h5>{work.company.name}</h5>
                        </div>
                        <div className="row work-duration-wrapper top-item">
                            <div className="duration-icon icon-wrapper">
                                <i className="fa fa-hourglass-half" style={{color: "orange"}}
                                   aria-hidden="true"/>
                            </div>
                            <div className="duration"><span>{work.duration.weeks}</span></div>
                        </div>
                        <div className="row vacancy-wrapper top-item">
                            <div className="vacancy-icon icon-wrapper">
                                <i className="fa fa-users" style={{color: "orange"}}
                                   aria-hidden="true"/>
                            </div>
                            <div className="vacancy"><span>{work.vacancy}</span></div>
                        </div>
                        <div className="hidden-xs">
                            <hr/>
                        </div>
                        <div className="row stipend-wrapper bottom-item  hidden-xs">
                            <div className="stipend-icon icon-wrapper">
                                <i className="fa fa-inr" style={{color: "orange"}}
                                   aria-hidden="true"/>
                            </div>
                            <div className="stipend"><span>{work.stipend}</span></div>
                        </div>
                    </div>
                    {/*<div className="bottom-items container visible-xs">*/}
                    {/*    <hr/>*/}
                    {/*    <div className="row stipend-wrapper visible-xs bottom-item">*/}
                    {/*        <div className="stipend-icon icon-wrapper"><img*/}
                    {/*            src={require("../../assets/images/icons/facebook.svg")} alt="" height="20px"*/}
                    {/*            width="20px"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="stipend"><span>Stipend</span></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </Link>
        );
    }

    getPath(data) {
        /* let id = Cipher.encrypt(data.id);
         let entity = data.entity;
         if (entity === "internship") {
             return `/${data.entity}/${id}-${data.title}-internship-at-${data.subTitle}`;
         } else
             return `/${data.entity}/${id}-mini-internship-from-${data.subTitle}-${data.title}`;*/
    }

    isFeatured = (work) => {
        console.log(work.featured)
        return work.featured;
    }
}

export default ListingCard;