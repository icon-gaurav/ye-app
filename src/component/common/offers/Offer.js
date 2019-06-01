/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../../assets/stylesheet/Offer.css';
import Collapse from "react-bootstrap/Collapse";
import ModalHeader from "react-bootstrap/ModalHeader";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalDialog from "react-bootstrap/ModalDialog";
import {Link} from "react-router-dom";
import Converter from "../../utilities/Converter";

class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availMessage: false,
            offerImage: "",
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
                        <div className="container coupon-header">
                            <div className="row">
                                <div className="org-logo rounded-circle">
                                    <img src={offer.companyLogo}/>
                                </div>
                                <div className="org-name">
                                    <h3>{offer.company}</h3>
                                </div>
                            </div>
                        </div>
                        <img src={this.state.offerImage} width="100%"/>
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
}

export default Offer;