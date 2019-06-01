/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../../assets/stylesheet/OfferList.css';
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

class OfferList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalType: "Add",
            modalShow: false
        };
        console.log(this.props);
    }

    handleModalView = () => {
        this.setState({modalShow: true});
    }

    componentWillMount() {

    }

    render() {
        let {user} = this.props;
        let {modalShow} = this.state;
        return (
            <div className="container-fluid">
                <div className="main-head">
                    <header className="d-inline-block"></header>
                    {user.role == "ADMIN" ? <div className="d-inline-block">
                        <button className="btn btn-info" onClick={this.handleModalView}>+ Add</button>
                    </div> : ""}
                </div>
                {modalShow?<OfferModal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})} type={"Add"}/>:""}
                {/*{this.renderTopOffers()}*/}
                {this.renderCategories()}

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
                                        <img src={require("../../../assets/images/logo/YE-Merge-Black.png")} alt=""/>
                                    </div>
                                    <div className="offer-description overlay-slide">
                                        <div className="offer-organization">
                                            <div className="organization">
                                                <div className="org-logo">
                                                    <img src={require("../../../assets/images/logo/YE-Merge-Black.png")}
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
                                        <img src={require("../../../assets/images/logo/YE-Merge-Black.png")} alt=""/>
                                    </div>
                                    <div className="offer-description overlay-slide">
                                        <div className="offer-organization">
                                            <div className="organization">
                                                <div className="org-logo">
                                                    <img src={require("../../../assets/images/logo/YE-Merge-Black.png")}
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

                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                </div>

            </section>
        );
    }

    renderCategories() {
        return (
            <section>
                <div className="">
                    <div className="categories">
                        <div className="row">
                            {/*- let categories=[{img:"food.jpg", catName:"Food"},{img:"education.jpg", catName:"Education"},{img:"entertainment.jpg", catName:"Entertainment"},{img:"fitness.jpg", catName:"Fitness"}, {img:"living.jpg", catName:"Living"}];*/}
                            {/*each category in categories*/}
                            <div className="col-md-4 col-lg-4 col-6">
                                <div className="category">
                                    <img src={require("../../../assets/images/categories/fitness.jpg")} alt=""/>
                                    <div className="title-wrapper">
                                        <div className="category-title">
                                            <div className="title">
                                                <Link to="/offers/fitness" target="_blank">
                                                    <h5>Fitness</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-6">
                                <div className="category">
                                    <img src={require("../../../assets/images/categories/living.jpg")} alt=""/>
                                    <div className="title-wrapper">
                                        <div className="category-title">
                                            <div className="title">
                                                <Link to="/offers/living" target="_blank">
                                                    <h5>Living</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-6">
                                <div className="category">
                                    <img src={require("../../../assets/images/categories/education.jpg")} alt=""/>
                                    <div className="title-wrapper">
                                        <div className="category-title">
                                            <div className="title">
                                                <Link to="/offers/education" target="_blank">
                                                    <h5>Education</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-6">
                                <div className="category">
                                    <img src={require("../../../assets/images/categories/entertainment.jpg")} alt=""/>
                                    <div className="title-wrapper">
                                        <div className="category-title">
                                            <div className="title">
                                                <Link to="/offers/entertainment" target="_blank">
                                                    <h5>Entertainment</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-6">
                                <div className="category">
                                    <img src={require("../../../assets/images/categories/shopping.jpg")} alt=""/>
                                    <div className="title-wrapper">
                                        <div className="category-title">
                                            <div className="title">
                                                <Link to="/offers/shopping" target="_blank">
                                                    <h5>Shopping</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-6">
                                <div className="category">
                                    <img src={require("../../../assets/images/categories/travel.jpg")} alt=""/>
                                    <div className="title-wrapper">
                                        <div className="category-title">
                                            <div className="title">
                                                <Link to="/offers/travel" target="_blank">
                                                    <h5>Travel</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferList;