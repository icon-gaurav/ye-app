/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../assets/stylesheet/OfferList.css';
import ModalHeader from "react-bootstrap/ModalHeader";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Offer from "./Offers";

class OfferList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalType: "Add",
            modalShow: false
        };
    }

    handleModalView = () => {
        this.setState({modalShow: true});
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="list-header">

                    <header className="main-head">Header</header>
                    <button className="btn btn-info" onClick={this.handleModalView}>+ Add</button>
                </div>
                {this.renderModal()}
                <div className="offers-row">
                    <Offer/>
                    <Offer/>
                    <Offer/>
                    <Offer/>
                </div>
            </div>
        );
    }

    renderModal() {
        return (
            <Modal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})}>
                <ModalHeader closeButton>
                    <Modal.Title>{this.state.modalType}</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="offer-wrapper">
                        <div className="form-group">
                            <label className="form-label">Company ID</label>
                            <input type="text" placeholder="Company ID" id="companyId" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Offer Title</label>
                            <input type="text" placeholder="Offer Title" id="title" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Category</label>
                            <select className="custom-select">
                                <option selected>Select Category</option>
                                <option value="Food">Food</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Health">Health</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Duration</label>
                            <div className="form-inline">
                                <input type="date" placeholder="Company ID" id="start-date" className="form-control"/>
                                <div> to</div>
                                <input type="date" placeholder="Company ID" id="end-date" className="form-control"/>
                            </div>

                        </div>
                        <div className="form-group">
                            <label className="form-label">Terms & Condition</label>
                            <textarea placeholder="Terms and condition" id="terms" className="form-control"></textarea>
                        </div>

                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value="Featured"/> Featured
                            </label>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success">Add</button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default OfferList;