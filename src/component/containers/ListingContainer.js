import React from "react";
import ListingCard from "../common/ListingCard";

class ListingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let arr = [0, 1, 2, 3, 4, 5];
        let stylesheet = {
            paddingTop: 10,
            borderRadius: 10,
        };
        let {workList} = this.props;

        return (
            <div className="row list-wrapper" style={stylesheet}>
                {workList.map((work, key) => (
                    <div key={key} className="col-md-4 col-xs-12">
                        <ListingCard work={work}/>
                    </div>))}

            </div>
        );
    }
}

export default ListingContainer;