/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Offer from "./Offer";
import ApiAction from "../../../actions/ApiAction";
class CategoryOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offers:[]
        };
    }

    componentWillMount() {
        let category = "";
        let {match} = this.props;
        if (match.isExact) {
            category = match.params.category;
        }
        ApiAction.getCategoryOffers(category)
            .then((response)=>{
                if(response.data.success){
                    this.setState({offers:response.data.offerList});
                }
                console.log(response)

            })
            .catch((error)=>{
                console.log(error);
            });

        let offers = [
            {
                company: "young engine",
                logo: "../../assets/images/categories/",
                title: "Offer title",
                summary: "Offers summary",
                duration: {
                    start: new Date(),
                    end: new Date(new Date().getTime() + 2000000000)
                },
                terms: "Terms 1\nTerms 2\nTerms 3",
                offerImage: "../../assets/images/categories/" + category + ".jpg",
                category: "Food"
            },
            {
                company: "young engine",
                logo: "../../assets/images/categories/",
                title: "Offer title 2",
                summary: "Offers summary 2",
                duration: {
                    start: new Date(),
                    end: new Date(new Date().getTime() + 2000000000),
                },
                terms: "Terms 1\nTerms 2\nTerms 3",
                offerImage: "../../assets/images/categories/" + category + ".jpg",
                category: "Travel"
            },
            {
                company: "young engine",
                logo: "../../assets/images/categories/",
                title: "Offer title 3",
                summary: "Offers summary 3",
                duration: {
                    start: new Date(),
                    end: new Date(new Date().getTime() + 2000000000)
                },
                terms: "Terms 1\nTerms 2\nTerms 3",
                offerImage: "../../assets/images/categories/" + category + ".jpg",
                category: "Entertainment"
            }
        ];
        // this.setState({offers: offers});
    }

    render() {
        return (
            <div className="row">
                {this.state.offers.map((offer, key) =>
                    <Offer offer={offer} key={key}/>
                )}
            </div>
        );
    }
}

export default CategoryOffers;