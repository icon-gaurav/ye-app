/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';

import '../../../../assets/stylesheet/Insight.css';

class Insights extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <header className="main-head"></header>
                <div className="insights">
                    <div className="insight row">
                        <div className="col-md-6 col-lg-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h6>Total Users</h6>
                                    </div>
                                    <div className="row center-align">
                                        <h2 className="col-6">
                                            <img src={require("../../../../assets/images/graph.svg")} width="50px"
                                                 height="50px"/>
                                        </h2>
                                        <div className="col-6 quantity">
                                            <h2>2014</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h6>Total Students</h6>
                                    </div>
                                    <div className="row center-align">
                                        <h2 className="col-6">
                                            <img src={require("../../../../assets/images/graph.svg")} width="50px"
                                                 height="50px"/>
                                        </h2>
                                        <div className="col-6 quantity">
                                            <h2>2014</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h6>Total Companies</h6>
                                    </div>
                                    <div className="row center-align">
                                        <h2 className="col-6">
                                            <img src={require("../../../../assets/images/graph.svg")} width="50px"
                                                 height="50px"/>
                                        </h2>
                                        <div className="col-6 quantity">
                                            <h2>2014</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="insight row">
                        <div className="card">
                            <div className="card-body">
                                <div className="center-align">
                                    <h5>Active Users : <span>10</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="insight row">
                        <div className="col-md-6 col-lg-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h6>Total Internships</h6>
                                    </div>
                                    <div className="row center-align">
                                        <h2 className="col-6">
                                            <img src={require("../../../../assets/images/graph.svg")} width="50px"
                                                 height="50px"/>
                                        </h2>
                                        <div className="col-6 quantity">
                                            <h2>2014</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h6>Total Missions</h6>
                                    </div>
                                    <div className="row center-align">
                                        <h2 className="col-6">
                                            <img src={require("../../../../assets/images/graph.svg")} width="50px"
                                                 height="50px"/>
                                        </h2>
                                        <div className="col-6 quantity">
                                            <h2>2014</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h6>Total Tasks</h6>
                                    </div>
                                    <div className="row center-align">
                                        <h2 className="col-6">
                                            <img src={require("../../../../assets/images/graph.svg")} width="50px"
                                                 height="50px"/>
                                        </h2>
                                        <div className="col-6 quantity">
                                            <h2>2014</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="insight row">
                        <div className="col-md-6 col-lg-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h6>Total Offers</h6>
                                    </div>
                                    <div className="row center-align">
                                        <h2 className="col-6">
                                            <img src={require("../../../../assets/images/graph.svg")} width="50px"
                                                 height="50px"/>
                                        </h2>
                                        <div className="col-6 quantity">
                                            <h2>2014</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h6>Availed Offers</h6>
                                    </div>
                                    <div className="row center-align">
                                        <h2 className="col-6">
                                            <img src={require("../../../../assets/images/graph.svg")} width="50px"
                                                 height="50px"/>
                                        </h2>
                                        <div className="col-6 quantity">
                                            <h2>2014</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Insights;