import React from "react";
import ListingCard from "../common/ListingCard";

class ListingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let arr = [0, 1, 2, 3, 4, 5];
        let stylesheet={
            paddingTop:10,
            borderRadius:10,
        };

        return (
            <div className="row list-wrapper" style={stylesheet}>
                {arr.map(index => (<div key={index} className="col-md-4 col-xs-12">
                    <ListingCard/>
                </div>))}

            </div>
        );
    }
}

export default ListingContainer;