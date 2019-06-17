/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../../assets/stylesheet/Offer.css';
import ModalHeader from "react-bootstrap/ModalHeader";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalDialog from "react-bootstrap/ModalDialog";
import {Link} from "react-router-dom";
import Converter from "../../utilities/Converter";
import ApiAction from "../../../actions/ApiAction";

class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availMessage: false,
            offerImage: "",
            termOpen: false
        };
    }

    componentWillMount() {
        let {offer} = this.props;
        this.setState({offerImage: Converter.bufferToBase64(offer.offerImage)});
    }

    render() {
        let {offer} = this.props;
        return (
            <>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="coupon">
                        <div className="container coupon-header border-bottom">
                            <div className="row">
                                <div className="org-logo rounded-circle">
                                    <img src={offer.companyLogo}/>
                                </div>
                                <div className="org-name">
                                    <h5 className="overflow-hidden">{offer.company}</h5>
                                </div>
                            </div>
                        </div>
                        <img src={this.state.offerImage} width="100%" height="100px"/>
                        <div className="container coupon-body border-top" style={{backgroundColor: "white"}}>
                            <h2>
                                <b>{offer.title}</b>
                            </h2>
                            <p>{offer.summary}</p>
                            <a href="javascript:void(0);"
                               onClick={() => this.setState({termOpen: !this.state.termOpen})}
                               aria-controls="terms-collapse-text"
                               aria-expanded={this.state.termOpen}><b>Terms</b>...</a>
                            {/*<Collapse in={this.state.termOpen}>*/}
                            {/*    <div className="terms-collapse-text">*/}
                            {/*        <p>{offer.terms}</p>*/}
                            {/*    </div>*/}
                            {/*</Collapse>*/}
                        </div>
                        <div className="container coupon-body">
                            {/*<p>Use promo code*/}
                            {/*    <span className="promo"> HGKT56</span>*/}
                            {/*</p>*/}
                            <p className="expire">Expires :
                                {this.calculateDuration(offer.duration.start, offer.duration.last)}
                            </p>
                        </div>
                        <div className="container coupon-footer border-top">
                            <div className="text-align-center">
                                <button className="btn transparent-button text-dark font-weight-bold"
                                        onClick={this.availOffer}>Grab Offer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.availMessage ? this.renderModal() : ""}
                {this.state.termOpen ? this.renderTerms() : ""}
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

    availOffer = () => {
        let {offer} = this.props;
        ApiAction.availOffer(offer)
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.setState({availMessage: true});
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    renderTerms() {
        let {offer} = this.props;
        let {termOpen} = this.state;
        return (
            <Modal show={termOpen} onHide={() => this.setState({termOpen: false})}>
                <ModalHeader closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="terms-and-condition" style={{maxHeight:"60%"}}>
                        <p>{offer.terms}</p>
                    </div>
                </ModalBody>
            </Modal>
        );
    }

    renderModal() {
        return (
            <Modal show={this.state.availMessage} onHide={() => this.setState({availMessage: false})}>
                <ModalHeader closeButton>
                    <Modal.Title>Congratulations!!</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="congratulations-message">
                        <div className="overflow-hidden">
                            {/*<img className="img-fluid" src={require("../../../assets/images/response/congratulation.jpg")}*/}
                            {/*     width="100" alt="congrats-image"/>*/}
                        </div>
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
}

export default Offer;