/*
 * @author Gaurav Kumar    
*/

import React from 'react';
import './OfferCard.css';
import sale from '../../../assets/images/icons/sale.png';
import Converter from "../../utilities/Converter";

class OfferCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderP() {

        let {offer, className} = this.props;
        return (
            <div className={`offer-container p-4 ye-border ${className}`}>
                <div className="mb-4">
                    <img src={sale} alt="Offer"/>
                </div>
                <div className="heading-container ">
                    <h4 className="border-bottom pb-3 mb-3"><span className="heading-span"
                                                                  style={{fontSize: "20px"}}>{offer.title}</span></h4>
                </div>
                <p className="info">Display this offer to the staff and show them the code</p>
                <div className="coupon-code">
                    <h6>YOUR COUPON CODE</h6>
                    <h3 className="coupon-code-body mt-3 mb-3">123456</h3>
                </div>
                <div className="note">
                    <p><span>*</span>Cannot be used in conjunction with other discounts or offers</p>
                </div>
            </div>
        );
    }

    render() {
        let {offer} = this.props;
        let offerImage = Converter.bufferToBase64(offer.offerImage);
        return (
            <div className="offer-container p-4 ye-border"
                 style={{backgroundImage: offerImage?`url(${offerImage})`:""}}>
                <div className="pb-2">
                    <img src={offer.companyLogo ? Converter.bufferToBase64(offer.companyLogo) :
                        offer.companyId ? Converter.bufferToBase64(offer.companyId.logo) :
                            require("../../../assets/images/avatar/company.png")} alt="offer"
                         height={40}
                         className=""/>
                </div>
                <div className="">
                    {offer.company ? offer.company : offer.companyId.name}
                </div>
                <div className="pb-4 pt-4">{offer.title}</div>
                <div>
                    <button className="btn bg-white ye-hover">Get this</button>
                </div>
            </div>
        );
    }
}

export default OfferCard;