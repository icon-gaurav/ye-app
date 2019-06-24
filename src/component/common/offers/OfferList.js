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
import 'react-owl-carousel2/lib/styles.css';
import OfferModal from "./OfferModal";
import ApiAction from "../../../actions/ApiAction";
import Converter from "../../utilities/Converter";

class OfferList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalType: "Add",
            modalShow: false,
            topOffers: []
        };
        console.log(this.props);
    }

    handleModalView = () => {
        this.setState({modalShow: true});
    }

    componentWillMount() {
        ApiAction.getTopOffers()
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({topOffers: response.data.offers});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let {user} = this.props;
        let {modalShow} = this.state;
        return (
            <div className="container-fluid">
                {this.renderOffersCarousel()}
                {this.renderTopOffers()}
                <div className="main-head">
                    <header className="d-inline-block"></header>
                    {user.role == "ADMIN" ? <div className="d-inline-block">
                        <button className="btn btn-info" onClick={this.handleModalView}>+ Add</button>
                    </div> : ""}
                </div>
                {modalShow ? <OfferModal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})}
                                         type={"Add"}/> : ""}
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

    renderOffersCarousel() {
        const options = {
            items: 1,
            rewind: true,
            autoplay: true,
            marginRight: "20px",
            loop: true,
        };
        return (
            <section>
                <div className="">
                    <OwlCarousel
                        className="owl-theme owl-carousel"
                        options={options}
                        lazyLoad={true}>
                        <div>
                            <img src={require("../../../assets/images/random.jpg")} height="300px"/>
                        </div>
                        <div>
                            <img src={require("../../../assets/images/categories/fitness.jpg")} height="300px"/>
                        </div>
                        <div>
                            <img src={require("../../../assets/images/categories/entertainment.jpg")} height="300px"/>
                        </div>
                        <div>
                            <img src={require("../../../assets/images/categories/shopping.jpg")} height="300px"/>
                        </div>
                        <div>
                            <img src={require("../../../assets/images/categories/education.jpg")} height="300px"/>
                        </div>

                    </OwlCarousel>
                </div>
            </section>
        );
    }

    renderTopOffers() {
        const options = {
            items: 6,
            nav: true,
            rewind: true,
            margin: 10,
            center: true,
            loop: true,
        };

        let {topOffers} = this.state;
        console.log(topOffers)
        return (
            <section>
                <div className="">
                    {/*<div id="owl-example" className="owl-carousel owl-loaded owl-theme">*/}
                    {/*    <div className="owl-stage-outer">*/}
                    {/*        <div className="owl-stage">*/}
                    <OwlCarousel
                        className="owl-theme owl-carousel"
                        options={options}
                        ref="car">
                        {topOffers.map((offer, key) => {
                                return (
                                    <div className="">
                                        <Link href="google.com">
                                            <div className="top-offer-slide">
                                                <div className="offer-image">
                                                    <img src={Converter.bufferToBase64(offer.offerImage)} alt=""/>
                                                </div>
                                                <div className="offer-description overlay-slide">
                                                    <div className="offer-organization">
                                                        <div className="organization">
                                                            <div className="org-logo">
                                                                <img
                                                                    src={Converter.bufferToBase64(offer.companyLogo)}
                                                                    alt=""/>
                                                            </div>
                                                            <div className="org-name">{offer.company}</div>
                                                        </div>
                                                    </div>
                                                    <div className="offer-title">
                                                        <span>{offer.title}</span></div>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            }
                        )}
                        {/*<div className="">*/}
                        {/*    <Link href="google.com">*/}
                        {/*        <div className="top-offer-slide">*/}
                        {/*            <div className="offer-image">*/}
                        {/*                <img src={require("../../../assets/images/logo/YE-Merge-Black.png")} alt=""/>*/}
                        {/*            </div>*/}
                        {/*            <div className="offer-description overlay-slide">*/}
                        {/*                <div className="offer-organization">*/}
                        {/*                    <div className="organization">*/}
                        {/*                        <div className="org-logo">*/}
                        {/*                            <img src={require("../../../assets/images/logo/YE-Merge-Black.png")}*/}
                        {/*                                 alt=""/>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="org-name">Young Engine</div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="offer-title">*/}
                        {/*                    <span>Buy 1 Get 1 Free</span></div>*/}

                        {/*            </div>*/}

                        {/*        </div>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                        {/*<div className="">*/}
                        {/*    <Link href="google.com">*/}
                        {/*        <div className="top-offer-slide">*/}
                        {/*            <div className="offer-image">*/}
                        {/*                <img src={require("../../../assets/images/logo/YE-Merge-Black.png")} alt=""/>*/}
                        {/*            </div>*/}
                        {/*            <div className="offer-description overlay-slide">*/}
                        {/*                <div className="offer-organization">*/}
                        {/*                    <div className="organization">*/}
                        {/*                        <div className="org-logo">*/}
                        {/*                            <img src={require("../../../assets/images/logo/YE-Merge-Black.png")}*/}
                        {/*                                 alt=""/>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="org-name">Young Engine</div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="offer-title">*/}
                        {/*                    <span>Buy 1 Get 1 Free</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}

                    </OwlCarousel>
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
                            <div className="col-md-3 col-lg-3 col-3">
                                <Link to="/offers/fitness" target="_blank">
                                    <div className="category">
                                        <div>
                                            <img src={require("../../../assets/images/categories/fitness.jpg")} alt=""/>
                                        </div>
                                        <div className="text-align-center title-wrapper">
                                            <div>
                                                <h5>Fitness</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3 col-lg-3 col-3">
                                <Link to="/offers/living" target="_blank">
                                    <div className="category">
                                        <div>
                                            <img src={require("../../../assets/images/categories/living.jpg")} alt=""/>
                                        </div>
                                        <div className="text-align-center title-wrapper">
                                            <div>
                                                <h5>Living</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3 col-lg-3 col-3">
                                <Link to="/offers/education" target="_blank">
                                    <div className="category">
                                        <div>
                                            <img src={require("../../../assets/images/categories/education.jpg")}
                                                 alt=""/>
                                        </div>
                                        <div className="text-align-center title-wrapper">
                                            <div>
                                                <h5>Education</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3 col-lg-3 col-3">
                                <Link to="/offers/entertainment" target="_blank">
                                    <div className="category">
                                        <div>
                                            <img src={require("../../../assets/images/categories/entertainment.jpg")}
                                                 alt=""/>
                                        </div>
                                        <div className="text-align-center title-wrapper">
                                            <div>
                                                <h5>Entertainment</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3 col-lg-3 col-3">
                                <Link to="/offers/shopping" target="_blank">
                                    <div className="category">
                                        <div>
                                            <img src={require("../../../assets/images/categories/shopping.jpg")}
                                                 alt=""/>
                                        </div>
                                        <div className="text-align-center title-wrapper">
                                            <h5>Shopping</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3 col-lg-3 col-3">
                                <Link to="/offers/travel" target="_blank">
                                    <div className="category">
                                        <div>
                                            <img src={require("../../../assets/images/categories/travel.jpg")} alt=""/>
                                        </div>
                                        <div className="text-align-center title-wrapper">
                                            <div>
                                                <h5>Travel</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/*<div className="col-md-4 col-lg-4 col-6">*/}
                            {/*    <div className="category">*/}
                            {/*        <img src={require("../../../assets/images/categories/fitness.jpg")} alt=""/>*/}
                            {/*        <div className="title-wrapper">*/}
                            {/*            <div className="category-title">*/}
                            {/*                <div className="title">*/}
                            {/*                    <Link to="/offers/fitness" target="_blank">*/}
                            {/*                        <h5>Fitness</h5>*/}
                            {/*                    </Link>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-4 col-lg-4 col-6">*/}
                            {/*    <div className="category">*/}
                            {/*        <img src={require("../../../assets/images/categories/living.jpg")} alt=""/>*/}
                            {/*        <div className="title-wrapper">*/}
                            {/*            <div className="category-title">*/}
                            {/*                <div className="title">*/}
                            {/*                    <Link to="/offers/living" target="_blank">*/}
                            {/*                        <h5>Living</h5>*/}
                            {/*                    </Link>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-4 col-lg-4 col-6">*/}
                            {/*    <div className="category">*/}
                            {/*        <img src={require("../../../assets/images/categories/education.jpg")} alt=""/>*/}
                            {/*        <div className="title-wrapper">*/}
                            {/*            <div className="category-title">*/}
                            {/*                <div className="title">*/}
                            {/*                    <Link to="/offers/education" target="_blank">*/}
                            {/*                        <h5>Education</h5>*/}
                            {/*                    </Link>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-4 col-lg-4 col-6">*/}
                            {/*    <div className="category">*/}
                            {/*        <img src={require("../../../assets/images/categories/entertainment.jpg")} alt=""/>*/}
                            {/*        <div className="title-wrapper">*/}
                            {/*            <div className="category-title">*/}
                            {/*                <div className="title">*/}
                            {/*                    <Link to="/offers/entertainment" target="_blank">*/}
                            {/*                        <h5>Entertainment</h5>*/}
                            {/*                    </Link>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-4 col-lg-4 col-6">*/}
                            {/*    <div className="category">*/}
                            {/*        <img src={require("../../../assets/images/categories/shopping.jpg")} alt=""/>*/}
                            {/*        <div className="title-wrapper">*/}
                            {/*            <div className="category-title">*/}
                            {/*                <div className="title">*/}
                            {/*                    <Link to="/offers/shopping" target="_blank">*/}
                            {/*                        <h5>Shopping</h5>*/}
                            {/*                    </Link>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-4 col-lg-4 col-6">*/}
                            {/*    <div className="category">*/}
                            {/*        <img src={require("../../../assets/images/categories/travel.jpg")} alt=""/>*/}
                            {/*        <div className="title-wrapper">*/}
                            {/*            <div className="category-title">*/}
                            {/*                <div className="title">*/}
                            {/*                    <Link to="/offers/travel" target="_blank">*/}
                            {/*                        <h5>Travel</h5>*/}
                            {/*                    </Link>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferList;