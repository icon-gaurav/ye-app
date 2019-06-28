/*
 * @author Gaurav Kumar    
*/

import React, { PureComponent } from 'react';
import ApiAction from "../../../../actions/ApiAction";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

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
                    this.setState({ internships: response.data.workList })
                }
            })
            .catch((error) => {
                console.log(error)
            })
        ApiAction.getTypeWorks("missions")
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.setState({ missions: response.data.workList })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        // let { internships, missions } = this.state;
        return (
            <div>
                <header className="main-head"></header>
                <div className="row">

                    <div className="col-lg-9 mt-2">
                        <div className="insights">
                            <h2 className="pl-4 pt-4" style={{ color: "rgb(26, 96, 92)" }}>Account Summary</h2>
                            {this.renderAccountSummary()}
                        </div>
                        <div className="insights">
                            <h2 className="pl-4 py-3" style={{ color: "rgb(26, 96, 92)" }}>Current Internships</h2>
                            {/* {this.renderCurrentInternshipsHeader()} */}
                            <div className="m-2 p-2">
                            {this.renderCurrentInternshipsList()}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-2">
                        <div className="insights text-center">
                            <h4 className="pl-4 py-3 border-bottom" style={{ color: "rgb(26, 96, 92)" }}>Not getting enough applications?</h4>
                            {this.renderEnterprisePlan()}
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    renderAccountSummary() {
        let { internships, missions } = this.state;
        return (
            <div className="insight row p-4 mb-4">
                <div className="col-md-6 col-lg-3 mb-2">
                    {/* <Link to="/missions"> */}
                    <div className="card">
                        <div className="card-body row">
                            <div className="card-image col-4 d-flex align-items-center justify-content-center">
                                <img src={require("../../../../assets/images/insights/plan.png")} width="50px"
                                    height="50px" />
                            </div>
                            <div className="col-8">
                                <div className="card-title">
                                    <h6>Current Plan</h6>
                                </div>
                                <div className="col-6 quantity">
                                    <h2>{missions.length}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
                <div className="col-md-6 col-lg-3 mb-2">
                    {/* <Link to="/internships"> */}
                    <div className="card">
                        <div className="card-body row">
                            <div className="card-image col-4 d-flex align-items-center justify-content-center">
                                <img src={require("../../../../assets/images/insights/intern.png")} width="50px"
                                    height="50px" />
                            </div>
                            <div className="col-8">
                                <div className="card-title" >
                                    <h6 style={{ fontSize: "15px" }}>Total Internships</h6>
                                </div>
                                <div className="col-6 quantity">
                                    <h2>{internships.length}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
                <div className="col-md-6 col-lg-3 mb-2">
                    {/* <Link to="/missions"> */}
                    <div className="card">
                        <div className="card-body row">
                            <div className="card-image col-4 d-flex align-items-center justify-content-center">
                                <img src={require("../../../../assets/images/insights/mission.png")} width="50px"
                                    height="50px" />
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
                    {/* </Link> */}
                </div>
                <div className="col-md-6 col-lg-3 mb-2">
                    {/* <Link to="/missions"> */}
                    <div className="card">
                        <div className="card-body row">
                            <div className="card-image col-4 d-flex align-items-center justify-content-center">
                                <img src={require("../../../../assets/images/insights/selected.png")} width="50px"
                                    height="50px" />
                            </div>
                            <div className="col-8">
                                <div className="card-title">
                                    <h6>Total Selected</h6>
                                </div>
                                <div className="col-6 quantity" >
                                    <h2 >{missions.length}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
        )
    }

    // renderCurrentInternshipsHeader() {
    //     return (
    //         <div className="row mx-3 mt-3 p-2" style={{ color: "darkgreen" }}>
    //             <div className="col-lg-1 font-weight-bold">Sr.No</div>
    //             <div className="col-lg-3 font-weight-bold">Oppurtunity</div>
    //             <div className="col-lg-3 font-weight-bold">Total Applications</div>
    //             <div className="col-lg-2 font-weight-bold">Status</div>
    //             <div className="col-lg-3 font-weight-bold">View Applications</div>
    //         </div>
    //     )
    // }

    oppurtunityFormatter(cell, row) {
        return (
            <div className="col-lg-3 d-flex align-items-center">
                <div>
                    <div style={{ color: "rgb(66, 173, 244)" }}>{cell.profile}</div>
                    <div>Application Deadline : {cell.deadline}</div>
                    <div>Number Of Positions : {cell.postions}</div>
                </div>
            </div>
        )
    }

    totalApplicationsForamtter(cell, row) {
        return (
            <div className="col-lg-3 d-flex align-items-center">
                <div>
                    <div>Total Applications: {cell.totalApplications}</div>
                    <div>Shortlisted: {cell.shortlisted}</div>
                    <div>Selected: {cell.selected}</div>
                </div>
            </div>
        )
    }

    statusFormatter(cell, row) {
        return (
            <div className="col-lg-2 font-weight-bold d-flex align-items-center" style={{ color: "rgb(66, 173, 244)" }}>{cell ? "✔ OPEN" : "🔴 CLOSED"}</div>
        )
    }

    viewApplicationsFormatter(cell, row) {
        return (
            <div className="col-lg-3 d-flex align-items-center">
                <button className="btn btn-primary">View Applications</button>
            </div>
        )
    }

    idFormatter(cell, row) {
        return (
            <div className="col-lg-1 d-flex align-items-center">{cell}</div>
        )
    }

    renderCurrentInternshipsList() {
        // const { internships } = this.state

        const internships = [
            {
                id: 1,
                workDetails: {
                    profile: "React Developer",
                    deadline: "June 15, 2019",
                    positions: "5"
                },
                totalApplications: {
                    totalApplications: "5",
                    shortlisted: "0",
                    selected: "1"
                },
                status: true,
                view: true
            }
        ]

        return (
            <BootstrapTable data={internships}>
                <TableHeaderColumn width="75px" isKey dataField="id" dataFormat={this.idFormatter}>Sr. No</TableHeaderColumn>
                <TableHeaderColumn width="300px" dataField="workDetails" dataFormat={this.oppurtunityFormatter}>Oppurtunity</TableHeaderColumn>
                <TableHeaderColumn width="200px" dataField="totalApplications" dataFormat={this.totalApplicationsForamtter}>Total Applications</TableHeaderColumn>
                <TableHeaderColumn width="100px" dataField="status" dataFormat={this.statusFormatter}>Status</TableHeaderColumn>
                <TableHeaderColumn width="180px" dataField="view" dataFormat={this.viewApplicationsFormatter}>View Applications</TableHeaderColumn>
            </BootstrapTable>
        )

    }

    // renderCurrentInternshipsItem(internship) {
    //     return (
    //         <div className="row m-3 my-3 p-2 current-internship" >
    //             <div className="col-lg-1 d-flex align-items-center">1</div>
    //             <div className="col-lg-3 d-flex align-items-center">
    //                 <div>
    //                     <div style={{ color: "rgb(66, 173, 244)" }}>React Developer Intern</div>
    //                     <div>Application Deadline : Jun 15, 2019</div>
    //                     <div>Number Of Positions : 5</div>
    //                 </div>
    //             </div>
    //             <div className="col-lg-3 d-flex align-items-center">
    //                 <div>
    //                     <div>Total Applications:5</div>
    //                     <div>Shortlisted:0</div>
    //                     <div>Selected:1</div>
    //                 </div>
    //             </div>
    //             <div className="col-lg-2 font-weight-bold d-flex align-items-center" style={{ color: "rgb(66, 173, 244)" }}>🔴 CLOSED</div>
    //             <div className="col-lg-3 d-flex align-items-center">
    //                 <button className="btn btn-primary">View Applications</button>
    //             </div>
    //         </div>
    //     )
    // }

    renderEnterprisePlan() {
        return (
            <div>
                <div className="p-2 pb-4">
                    <h5 className="p-2">Enterprise Plan</h5>
                    <div className="text-left">
                        <div className="p-2">30 Internship Postings</div>
                        <div className="p-2">Internship Booster for every posting</div>
                        <div className="p-2">Featuring in our NewsLetters, Home &amp; FB page</div>
                        <div className="p-2">Featured in Search Results</div>
                        <div className="p-2">Dedicated Adspot for 4 postings on our site</div>
                        <div className="p-2">Priority chat Support</div>
                    </div>
                </div>
                <div className="p-4">
                    <button className="btn btn-primary">Upgrade</button>
                </div>
            </div>
        )
    }

}

export default CompanyInsights;