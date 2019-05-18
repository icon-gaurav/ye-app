import React from "react";
import Cipher from "../../util/Cipher";
import {Link} from "react-router-dom";
import "../../assets/stylesheet/ListingCard.css";

class ListingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        /*let {data} = this.props;*/
        let data = true;
        return (
            <Link to="/internships/id" target="_blank">
                <div className="listing-card-wrapper">
                    {this.isFeatured(data) ? <div className="ribbon"><span>Featured</span></div> : null}
                    <div className="top-items container">
                        <div className="row logo-container">
                            <div className="col-12 logo-wrapper">
                                <div className="col logo-image">
                                    <img src={require("../../assets/images/icons/facebook.svg")} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row work-profile-wrapper top-item">
                            <div className="profile-icon icon-wrapper">
                                <i className="fa fa-briefcase" style={{color: "orange"}}
                                   aria-hidden="true"/></div>
                            <div className="profile-title"><h4>Work-Profile</h4></div>
                        </div>
                        <div className="row company-name-wrapper top-item">
                            <h5>Company Name</h5>
                        </div>
                        <div className="row work-duration-wrapper top-item">
                            <div className="duration-icon icon-wrapper">
                                <i className="fa fa-hourglass-half" style={{color: "orange"}}
                                   aria-hidden="true"/>
                            </div>
                            <div className="duration"><span>Duration period</span></div>
                        </div>
                        <div className="row vacancy-wrapper top-item">
                            <div className="vacancy-icon icon-wrapper">
                                <i className="fa fa-users" style={{color: "orange"}}
                                   aria-hidden="true"/>
                            </div>
                            <div className="vacancy"><span>Vacancy</span></div>
                        </div>
                        <div className="hidden-xs">
                            <hr/>
                        </div>
                        <div className="row stipend-wrapper bottom-item  hidden-xs">
                            <div className="stipend-icon icon-wrapper">
                                <i className="fa fa-inr" style={{color: "orange"}}
                                   aria-hidden="true"/>
                            </div>
                            <div className="stipend"><span>Stipend</span></div>
                        </div>
                    </div>
                    <div className="bottom-items container visible-xs">
                        <hr/>
                        <div className="row stipend-wrapper visible-xs bottom-item">
                            <div className="stipend-icon icon-wrapper"><img
                                src={require("../../assets/images/icons/facebook.svg")} alt="" height="20px"
                                width="20px"/>
                            </div>
                            <div className="stipend"><span>Stipend</span></div>
                        </div>
                    </div>
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

    isFeatured(data) {
        /*if(data.entityData.featured){
            return true;
        }*/
        return true;
    }
}

export default ListingCard;