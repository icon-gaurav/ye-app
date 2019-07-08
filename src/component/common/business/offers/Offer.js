/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../../../assets/stylesheet/business/Offer.css';
import Collapse from "react-bootstrap/Collapse";
import ModalHeader from "react-bootstrap/ModalHeader";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Converter from "../../../utilities/Converter";
import {Button, Image} from "react-bootstrap";

class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availMessage: false,
            showDetails: false
        };
    }

    componentWillMount() {
        let {offer} = this.props;
        offer.offerImage = Converter.bufferToBase64(offer.offerImage);
        offer.companyLogo = Converter.bufferToBase64(offer.companyLogo);
        offer.duration.start = offer.duration.start.split("T")[0];
        offer.duration.last = offer.duration.last.split("T")[0];
        offer.terms = offer.terms;
    }

    renderoffer() {
        let {offer} = this.props;
        return (
            <>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="coupon bg-white">
                        <div className="container coupon-header">
                            <div className="row">
                                <div className="org-logo rounded-circle">
                                    <img src={require("../../../../assets/images/graph.svg")}/>
                                </div>
                                <div className="org-name">
                                    <h3>{offer.company}</h3>
                                </div>
                            </div>
                        </div>
                        <img src={offer.offerImage} width="100%"/>
                        <div className="container coupon-body" style={{backgroundColor: "white"}}>
                            <h2>
                                <b>{offer.title}</b>
                            </h2>
                            <a href="javascript:void(0);"
                               onClick={() => this.setState({termOpen: !this.state.termOpen})}
                               aria-controls="terms-collapse-text"
                               aria-expanded={this.state.termOpen}>Terms</a>
                            <Collapse in={this.state.termOpen}>
                                <div className="terms-collapse-text">
                                    <p>{offer.terms}</p>
                                </div>
                            </Collapse>
                        </div>
                        <div className="container coupon-body">
                            <p>Use promo code
                                <span className="promo"> HGKT56</span>
                            </p>
                            <p className="expire">Expires :
                                {this.calculateDuration(offer.duration.start, offer.duration.last)}
                            </p>
                        </div>
                        <div className="container coupon=footer">
                            <div className="text-align-center">
                                <button className="btn btn-success"
                                        onClick={() => this.setState({availMessage: !this.state.availMessage})}>Avail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.availMessage ? this.renderModal() : ""}
            </>
        );
    }

    calculateDuration = (start, end) => {
        let ms = new Date(end).getTime() - new Date().getTime();
        let days = Math.floor((((ms / 1000) / 60) / 60) / 24);
        let weeks = Math.floor(days / 7);
        days = days % 7;
        let result = weeks > 0 ? weeks + " Weeks " : "";
        result += days > 0 ? days + " Days " : "";
        return result;
    }

    renderModal() {
        return (
            <Modal show={this.state.availMessage} onHide={() => this.setState({availMessage: false})}>
                <ModalHeader closeButton>
                    <Modal.Title>Congratulations!!</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="congratulations-message">
                        <h2>Congratulations</h2>
                        <h6>You have successfully availed this offer</h6>
                        <p>See more offers</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="form-group">
                        <button className="btn btn-success" onClick={() => this.setState({availMessage: false})}>Close
                        </button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }

    render() {
        let {offer, edit} = this.props;
        let {showDetails} = this.state;
        return (
            <div className="mt-1 mb-2 bg-white">
                <div className="col-12 offer-abstract -danger">
                    <div className="row  position-relative">
                        <div className="category-code"></div>
                        <div className="col-2 col-lg-1 logo-wrapper align-self-center">
                            <Image className="img-fluid" src={offer.companyLogo} alt="companyLogo"/>
                        </div>
                        <div className="col-8 col-lg-9">
                            <div className="offer-title">
                                <h4> {offer.title}</h4>
                            </div>
                            <div className="offer-summary opacity-50">
                                {offer.summary}
                            </div>
                        </div>
                        <div className="col-2 text-align-right align-self-center">
                            <button className="m-1 transparent-button" onClick={() => this.setState({showDetails: !showDetails})}>
                                <i className="fas fa-greater-than"></i>
                            </button>
                            <button className="m-1 transparent-button" onClick={edit}>
                                <i className="far fa-edit"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {this.state.showDetails ? <div className="col-12 offer-detailed bg-white">
                    <div className="row ye-border">
                        <div className="col-6">
                            <div className="start-date">
                                <h6>Start Date</h6>
                                <span className="opacity-50">{offer.duration.start}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="last-date text-align-right">
                                <h6 className="">Last Date</h6>
                                <span className="opacity-50">{offer.duration.last}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row ye-border">
                        <div className="col-9 border">
                            <h6>Terms and Condition</h6>
                            <ul>
                                {offer.terms.map((term, key) =>
                                    <li className="opacity-50" key={key}>{term}</li>
                                )}
                            </ul>
                        </div>
                        <div className="col-3 border">
                            <Image className="img-fluid" src={offer.offerImage} alt="Offer Image"/>
                        </div>
                    </div>
                </div> : ""}

            </div>
        );
    }
}

export default Offer;