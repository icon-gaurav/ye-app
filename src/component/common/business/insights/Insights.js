/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import ApiAction from "../../../../actions/ApiAction";
import '../../../../assets/stylesheet/Insight.css';

class Insights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            companies: [],
            offers: [],
            availedOffers: [],
            internships: [],
            missions: [],
            active:0
        };
    }

    componentDidMount() {
        document.title = "Insights";
        this.fetchDetails();
    }

    fetchDetails = () => {
        ApiAction.getAllStudents()
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({
                        students: response.data.studentList,
                    });
                }
            })
            .catch((error) => {
                console.log(error)
            });

        ApiAction.getAllCompanies()
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({
                        companies: response.data.companyList,
                    });
                }
            })
            .catch((error) => {
                console.log(error)
            });
        ApiAction.getAllWork()
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    let works = response.data.workList;
                    let internships = [];
                    let missions = [];
                    works.map((work, key) => {
                        if (work.mode == "internship") {
                            internships.push(work);
                        } else if (work.mode == "mission") {
                            missions.push(work);
                        }
                    });
                    this.setState({internships: internships, missions: missions});
                }
            })
            .catch((error) => {
                console.log(error);
            });
        ApiAction.getAllOffers()
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({offers: response.data.offerList});
                }
            })
            .catch((error) => {
                console.log(error);
            });
        ApiAction.getAllAvailedOffer()
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({availedOffers: response.data.offerList});
                }
            })
            .catch((error) => {
                console.log(error);
            });
        ApiAction.getActiveUsers()
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({active: response.data.activeUser});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let {students, companies, internships, missions, offers, availedOffers,active} = this.state;
        return (
            <div>
                <header className="main-head"></header>
                <div className="insights p-4">
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
                                            <h2>{students.length+companies.length}</h2>
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
                                            <h2>{students.length}</h2>
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
                                            <h2>{companies.length}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="insight mb-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="center-align">
                                    <h5>Active Users : <span>{active}</span></h5>
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
                                            <h2>{internships.length}</h2>
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
                                            <h2>{missions.length}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-md-6 col-lg-4 mb-2">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-body">*/}
                        {/*            <div className="card-title">*/}
                        {/*                <h6>Total Tasks</h6>*/}
                        {/*            </div>*/}
                        {/*            <div className="row center-align">*/}
                        {/*                <h2 className="col-6">*/}
                        {/*                    <img src={require("../../../../assets/images/graph.svg")} width="50px"*/}
                        {/*                         height="50px"/>*/}
                        {/*                </h2>*/}
                        {/*                <div className="col-6 quantity">*/}
                        {/*                    <h2>2014</h2>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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
                                            <h2>{offers.length}</h2>
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
                                            <h2>{availedOffers.length}</h2>
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