import React from "react";
import Cipher from "../../util/Cipher";
import {Link} from "react-router-dom";
import "../../assets/stylesheet/ListingCard.css";
import Converter from "../utilities/Converter";
import ApiAction from "../../actions/ApiAction";

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

    renderOld() {

        /*let {data} = this.props;*/
        let {work} = this.props;
        return (
            <Link to={{pathname: `/${work.mode}s/${work._id}`, state: {work: work}}} target="_blank">
                <div className="listing-card-wrapper ye-border ye-hover">
                    {this.isFeatured(work) ? <div className="ribbon"><span>Featured</span></div> : null}
                    <div className="p-2">
                        <div className="d-flex align-items-center justify-content-center p-4">
                            {/*<div className="col-12 logo-wrapper">*/}
                            {/*    <div className="col logo-image">*/}
                            <img className="rounded-circle border"
                                 src={work.company.logo ? Converter.bufferToBase64(work.company.logo) : require("../../assets/images/avatar/company.png")}
                                 alt="" height="70px" width="70px"/>
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="border-top ml-2 mr-2 pt-2">
                            <div className="d-flex">
                                {/*<div className="profile-icon icon-wrapper">*/}
                                {/*    <i className="fa fa-briefcase" style={{color: "orange"}}*/}
                                {/*       aria-hidden="true"/></div>*/}
                                <div className="profile-title overflow-hidden"><h4>{work.profile}</h4></div>
                            </div>
                            <div className="d-flex">
                                <h6 className="overflow-hidden text-dark opacity-75">{work.company.name}</h6>
                            </div>
                            <div className="d-flex">
                                <div className="duration-icon icon-wrapper">
                                    <i className="fa fa-hourglass-half" style={{color: "orange"}}
                                       aria-hidden="true"/>
                                </div>
                                <div className="duration"><span
                                    className="opacity-60 text-dark">{work.duration.weeks} Weeks</span></div>
                            </div>
                            <div className="d-flex">
                                <div className="vacancy-icon icon-wrapper">
                                    <i className="fa fa-users" style={{color: "orange"}}
                                       aria-hidden="true"/>
                                </div>
                                <div className="vacancy"><span
                                    className="opacity-60 text-dark">{work.vacancy} Positions</span></div>
                            </div>
                            <hr style={{margin: "6px -15px 6px -15px", paddingTop: "0px"}}/>
                            <div className="d-flex">
                                <div className="stipend-icon icon-wrapper">
                                    <i className="fa fa-inr" style={{color: "orange"}}
                                       aria-hidden="true"/>
                                </div>
                                <div className="stipend"><span className="text-dark">Rs. {work.stipend}</span></div>
                            </div>
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

    render() {
        let {work} = this.props;
        return (
            <div className="p-3 ye-border listing-card-wrapper" style={{backgroundColor: "rgba(0,90,155,0.11)"}}>
                <div>
                    <Link to={{pathname: `/${work.mode}s/${work._id}`, state: {work: work}}} target="_blank" className="text-dark">
                        <div className="d-flex">
                            <div>
                                <img className="rounded-circle border"
                                     src={work.company.logo ? Converter.bufferToBase64(work.company.logo) : require("../../assets/images/avatar/company.png")}
                                     alt="" height="50px" width="50px"/>
                            </div>
                            <div className="justify-content-end ml-auto">
                                <div className="font-13 font-weight-300" style={{
                                    padding: "0px 5px",
                                    backgroundColor: "#fe8c00",
                                    borderRadius: 2,
                                    letterSpacing: "1.2px"
                                }}>FEATURED
                                </div>
                            </div>
                        </div>
                        <div className="font-16"><h2
                            className="mb-0 mt-0 font-16 font-weight-600 pt-1 pb-1">{work.profile}</h2></div>
                        <div><h5 className="font-12 opacity-75 mb-3">By : {work.company.name}</h5></div>
                        <div style={{width: "61px"}}>
                            <hr className="mb-0 mt-0 pt-0 pb-0" style={{borderColor: "#000000"}}/>
                        </div>
                        <div className="pt-2 pb-2">
                            <div className="d-flex">
                                <div className="duration-icon icon-wrapper d-flex align-items-center">
                                    <i className="fa fa-clock-o opacity-50" style={{color: "#000000"}}
                                       aria-hidden="true"/>
                                </div>
                                <div className="duration"><span
                                    className="font-15"
                                    style={{color: "rgba(13,3,0,0.89)"}}>{work.duration.weeks} Weeks</span></div>
                            </div>
                            <div className="d-flex">
                                <div className="vacancy-icon icon-wrapper d-flex align-items-center">
                                    <i className="fa fa-group opacity-50" style={{color: "#000000"}}
                                       aria-hidden="true"/>
                                </div>
                                <div className="vacancy"><span
                                    className="font-15"
                                    style={{color: "rgba(13,3,0,0.89)"}}>{work.vacancy} Positions</span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="stipend-icon icon-wrapper d-flex align-items-center">
                                    <i className="fa fa-money opacity-50" style={{color: "#000000"}}
                                       aria-hidden="true"/>
                                </div>
                                <div className="stipend"><span className="font-15"
                                                               style={{color: "rgba(13,3,0,0.89)"}}>Rs. {work.stipend}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "61px"}}>
                            <hr className="mb-0 mt-0 pt-0 pb-0" style={{borderColor: "#000000"}}/>
                        </div>
                    </Link>
                    <div className="d-flex pt-3">
                        <button className="ye-border" style={{
                            backgroundColor: "rgba(97,0,183,0.84)",
                            padding: "6px 22px",
                            color: "white"
                        }}
                                onClick={this.application}>Apply
                        </button>
                        <Link to={{pathname: `/${work.mode}s/${work._id}`, state: {work: work}}} target="_blank"
                              className="btn transparent-button justify-content-end ml-auto"
                              style={{padding: "6px 7px", border: "1px solid rgba(0,0,0,0.36)"}}>View Details</Link>
                    </div>
                </div>
            </div>
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
        // console.log(work.featured)
        return work.featured;
        // return true;
    }

    application = () => {
        let {work} = this.state;
        ApiAction.applyApplication(work)
            .then((response) => {
                console.log(response);
                this.setState({modalShow: true, success: response.data.success});
                window.setTimeout(() => {
                    this.setState({modalShow: false})
                }, 5000);
            })
            .catch(error => {
                console.log(error);
                this.setState({modalShow: true, error: true});
                window.setTimeout(() => {
                    this.setState({modalShow: false})
                }, 5000);
            });
    }
}

export default ListingCard;