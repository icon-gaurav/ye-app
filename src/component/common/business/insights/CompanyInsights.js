/*
 * @author Gaurav Kumar    
*/

import React, {PureComponent} from 'react';
import ApiAction from "../../../../actions/ApiAction";
import {Link} from "react-router-dom";

class CompanyInsights extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            internships: [],
            missions: [],
        }
    }

    componentWillMount() {
        this.fetchDetails()
    }

    fetchDetails = () => {
        ApiAction.getTypeWorks("internship")
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.setState({internships: response.data.workList})
                }
            })
            .catch((error) => {
                console.log(error)
            })
        ApiAction.getTypeWorks("missions")
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.setState({missions: response.data.workList})
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        let {internships, missions} = this.state;
        return (
            <div>
                <header className="main-head"></header>
                <div className="insights">
                    <div className="insight row">
                        <div className="col-md-6 col-lg-4 mb-2">
                            <Link to="/internships">
                                <div className="card">
                                    <div className="card-body row">
                                        <div className="card-image col-4 d-flex align-items-center justify-content-center">
                                            <img src={require("../../../../assets/images/insights/intern.png")} width="50px"
                                                 height="50px"/>
                                        </div>
                                        <div className="col-8">
                                            <div className="card-title">
                                                <h6>Total Internships</h6>
                                            </div>
                                            <div className="col-6 quantity">
                                                <h2>{internships.length}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-2">
                            <Link to="/missions">
                                <div className="card">
                                    <div className="card-body row">
                                        <div className="card-image col-4 d-flex align-items-center justify-content-center">
                                            <img src={require("../../../../assets/images/insights/mission.png")} width="50px"
                                                 height="50px"/>
                                        </div>
                                        <div className="col-8">
                                            <div className="card-title">
                                                <h6>Total Missions</h6>
                                            </div>
                                            <div className="col-6 quantity">
                                                <h2>{missions.length}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyInsights;