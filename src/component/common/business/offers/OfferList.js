/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../../../assets/stylesheet/OfferList.css';
import ModalHeader from "react-bootstrap/ModalHeader";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Offer from "./Offer";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import OfferModal from "./OfferModal";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import ApiAction from "../../../../actions/ApiAction";

class OfferList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalType: "Add",
            modalShow: false,
            offerList: [],
            selectedOffer: ""
        };
    }

    handleModalView = () => {
        this.setState({modalShow: true});
    }

    componentWillMount() {
        ApiAction.getAllOffers()
            .then((response) => {
                if (response.data.success) {
                    this.setState({offerList: response.data.offerList});
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        let {user} = this.props;
        let {modalShow, selectedOffer} = this.state;
        return (
            <div className="container-fluid">
                <div className="main-head">
                    <header className="d-inline-block"></header>
                    {user.role == "ADMIN" ? <div className="d-inline-block">
                        <button className="btn btn-info" onClick={this.handleModalView}>+ Add</button>
                    </div> : ""}
                </div>
                {modalShow ? <OfferModal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})}
                                         type={"Add"} offer={selectedOffer}/> : ""}
                {/*{this.renderTopOffers()}*/}
                {/*{this.renderTable()}*/}
                {this.renderNewTable()}

            </div>
        );
    }

    renderTopOffers() {
        const options = {
            items: 2,
            nav: true,
            rewind: true,
            autoplay: true,
            center: true
        };
        return (
            <section>
                <div className="container-fluid">
                    {/*<div id="owl-example" className="owl-carousel owl-loaded owl-theme">*/}
                    {/*    <div className="owl-stage-outer">*/}
                    {/*        <div className="owl-stage">*/}
                    <OwlCarousel
                        className="owl-theme"
                        options={options}
                        ref="car">
                        <div className="d-inline-block">
                            <a href="google.com">
                                <div className="top-offer-slide">
                                    <div className="offer-image">
                                        <img src={require("../../../../assets/images/logo/YE-Merge-Black.png")} alt=""/>
                                    </div>
                                    <div className="offer-description overlay-slide">
                                        <div className="offer-organization">
                                            <div className="organization">
                                                <div className="org-logo">
                                                    <img
                                                        src={require("../../../../assets/images/logo/YE-Merge-Black.png")}
                                                        alt=""/>
                                                </div>
                                                <div className="org-name">Young Engine</div>
                                            </div>
                                        </div>
                                        <div className="offer-title">
                                            <span>Buy 1 Get 1 Free</span></div>

                                    </div>

                                </div>
                            </a>
                        </div>
                        <div className="">
                            <a href="google.com">
                                <div className="top-offer-slide">
                                    <div className="offer-image">
                                        <img src={require("../../../../assets/images/logo/YE-Merge-Black.png")} alt=""/>
                                    </div>
                                    <div className="offer-description overlay-slide">
                                        <div className="offer-organization">
                                            <div className="organization">
                                                <div className="org-logo">
                                                    <img
                                                        src={require("../../../../assets/images/logo/YE-Merge-Black.png")}
                                                        alt=""/>
                                                </div>
                                                <div className="org-name">Young Engine</div>
                                            </div>
                                        </div>
                                        <div className="offer-title">
                                            <span>Buy 1 Get 1 Free</span></div>

                                    </div>

                                </div>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        );
    }

    renderTable() {
        let {offerList} = this.state;
        return (
            <div className="table-responsive">
                <BootstrapTable data={offerList} striped hover version='4'>
                    <TableHeaderColumn isKey dataField="_id" hidden={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="title">Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="duration" dataFormat={this.lastDateFormatter}>Last
                        Date</TableHeaderColumn>
                    <TableHeaderColumn dataField="category">Category</TableHeaderColumn>

                </BootstrapTable>
            </div>
        );
    }

    lastDateFormatter = (cell, row) => {
        return cell.last;
    }

    renderNewTable() {
        let {offerList} = this.state;
        return (
            <div className="offer-list">
                {offerList.map((offer, key) =>
                    <Offer offer={offer} key={key} edit={() => this.setState({modalShow: true, selectedOffer: offer})}/>
                )}
            </div>
        );
    }
}

export default OfferList;