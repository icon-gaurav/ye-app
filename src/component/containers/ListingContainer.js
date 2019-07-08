import React from "react";
import ListingCard from "../common/ListingCard";
import ApiAction from "../../actions/ApiAction";
import Converter from "../utilities/Converter";

class ListingContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            adds: [],
    }
        ;
    }

    componentWillMount() {
        ApiAction.getAllAdvertisement()
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({adds: response.data.advertisementList});
                } else {

                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        let stylesheet = {
            padding: 15,
        };
        let {workList} = this.props;
        let {adds} = this.state;
        let addIndex = 0;
        return (
            <div className="row list-wrapper" style={stylesheet}>
                {workList.map((work, key) => {
                    if (key % 8 != 0)
                        return (
                            <div key={key} className="col-md-4 col-xs-12">
                                <ListingCard work={work}/>
                            </div>
                        );
                    else {
                        addIndex++;
                        return (
                            <React.Fragment>
                                <div key={key} className="col-md-4 col-xs-12">
                                    <ListingCard work={work}/>
                                </div>
                                {adds[addIndex] ?
                                    <div className="col-md-4 col-xs-12">
                                        <div className="listing-card-wrapper">
                                            <a href={adds[addIndex].url}>
                                                <img className="card-img"
                                                     src={Converter.bufferToBase64(adds[addIndex].image)}
                                                     alt="Card image"/>
                                            </a>
                                        </div>
                                    </div>
                                    : ""}

                            </React.Fragment>
                        );
                    }
                })}

            </div>
        );
    }
}

export default ListingContainer;