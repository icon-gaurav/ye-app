/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../assets/stylesheet/Offer.css';
import Collapse from "react-bootstrap/Collapse";
import ModalHeader from "react-bootstrap/ModalHeader";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalDialog from "react-bootstrap/ModalDialog";

class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availMessage: false
        };
    }

    render() {
        return (
            <>
                <div className="col=xs-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="coupon">
                        <div className="container coupon-header">
                            <div className="row">
                                <div className="org-logo rounded-circle">
                                    <img src={require("../../assets/images/graph.svg")}/>
                                </div>
                                <div className="org-name">
                                    <h3>Company</h3>
                                </div>
                            </div>
                        </div>
                        <img src={require("../../assets/images/fitness.jpg")} width="100%"/>
                        <div className="container coupon-body" style={{backgroundColor: "white"}}>
                            <h2>
                                <b>Offer Title</b>
                            </h2>
                            <a href="javascript:void(0);"
                               onClick={() => this.setState({termOpen: !this.state.termOpen})}
                               aria-controls="terms-collapse-text"
                               aria-expanded={this.state.termOpen}>Terms</a>
                            <Collapse in={this.state.termOpen}>
                                <div className="terms-collapse-text">
                                    <p>
                                        Terms and conditions Lorem inovhfhncewfcijbucvwbuvwbovbbfwebjnjhekhow hfwor kh
                                        iuh
                                        ihfrt3uh uihrfuwy65461f54 65464 654
                                        uifhhc y hfhu ufw h
                                        abfohfsbouhgijbvvinvhgaigu;ijr
                                        jbgibiuhgouerhhgohvb
                                        ibiuhgihghvhg
                                        biuagaoghshi
                                    </p>
                                </div>
                            </Collapse>
                        </div>
                        <div className="container coupon-body">
                            <p>Use promo code
                                <span className="promo"> HGKT56</span>
                            </p>
                            <p className="expire">
                                Expires duration
                            </p>
                        </div>
                        <div className="container coupon=footer">
                            <div className="text-align-center">
                                <button className="btn btn-success" onClick={()=>this.setState({availMessage:!this.state.availMessage})}>Avail</button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.availMessage ? this.renderModal() : ""}
            </>
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
                        <h2>Congratulations</h2>
                        <h6>You have successfully availed this offer</h6>
                        <p>See more offers</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="form-group">
                        <button className="btn btn-success" onClick={() => this.setState({availMessage: false})}>Close</button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}

export default Offer;