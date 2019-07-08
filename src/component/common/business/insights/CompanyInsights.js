/*
 * @author Gaurav Kumar    
*/

import React, {PureComponent} from 'react';
import ApiAction from "../../../../actions/ApiAction";
import {Link, Route} from "react-router-dom";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import WorkReport from "../works/WorkReport";
import Converter from "../../../utilities/Converter";

class CompanyInsights extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            internships: [],
            missions: [],
            activeInternships: [],
            activeMissions: [],
            selectedWork: undefined,
        };
        this.currInternshipIndex = 0;
        this.currMissionIndex = 0;
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
        ApiAction.getCurrentWorks(this.props.user)
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.setState({
                        activeInternships: response.data.activeInternships,
                        activeMissions: response.data.activeMissions
                    });
                } else {

                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        //     if (this.state.selectedWork) {
        //         return <WorkReport work={this.state.selectedWork}/>
        //     } else {
        return (
            <div>
                <Route exact path="/work" component={() => <WorkReport work={this.state.selectedWork}/>}/>
                <Route exact path="" component={() => this.renderInsights()}/>
            </div>
        );
        // }
    }

    renderInsights() {
        return (
            <div className="">
                <div className="header pl-0">DASHBOARD</div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="bg-white ye-border insight-item mt-0"
                             style={{padding: "15px 30px 15px 30px"}}>
                            <h2 className="mb-0" style={{color: "rgb(26, 96, 92)"}}>Account Summary</h2>
                            {this.renderAccountSummary()}
                        </div>
                        <div className="insight-item ye-border bg-white"
                             style={{padding: "15px 30px 15px 30px"}}>
                            <h2 className="mb-0" style={{color: "rgb(26, 96, 92)"}}>Current Internships</h2>
                            {this.renderCurrentInternshipsList()}
                        </div>
                        <div className="insight-item ye-border bg-white"
                             style={{padding: "15px 30px 15px 30px"}}>
                            <h2 className="mb-0" style={{color: "rgb(26, 96, 92)"}}>Current Missions</h2>
                            {this.renderCurrentMissionsList()}
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="insights text-center ye-border">
                            <h4 className="pl-4 py-3 border-bottom" style={{color: "rgb(26, 96, 92)"}}>Not
                                getting
                                enough applications?</h4>
                            {this.renderEnterprisePlan()}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    renderAccountSummary() {
        let {internships, missions} = this.state;
        return (
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="d-flex ye-border ye-hover insight-item">
                        <div className="card-image col-4 d-flex align-items-center justify-content-center">
                            <img src={require("../../../../assets/images/insights/plan.png")} width="50px"
                                 height="50px"/>
                        </div>
                        <div className="flex-column align-items-center pt-2 pb-2">
                            <div>
                                <div className="">
                                    <h6 className="mb-0">Current Plan</h6>
                                </div>
                                <div className="quantity">
                                    <h5 className="mb-0">Basic</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <Link to="/internships">
                        <div className="d-flex ye-border ye-hover insight-item">
                            <div className="card-image col-4 d-flex align-items-center justify-content-center">
                                <img src={require("../../../../assets/images/insights/intern.png")} width="50px"
                                     height="50px"/>
                            </div>
                            <div className="flex-column align-items-center pt-2 pb-2">
                                <div>
                                    <div className="overflow-hidden">
                                        <h6 className="mb-0">Internships</h6>
                                    </div>
                                    <div className="quantity">
                                        <h5 className="mb-0">{internships.length}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6 col-lg-3">
                    <Link to="/missions">
                        <div className="d-flex ye-border ye-hover insight-item">
                            <div className="card-image col-4 d-flex align-items-center justify-content-center">
                                <img src={require("../../../../assets/images/insights/mission.png")} width="50px"
                                     height="50px"/>
                            </div>
                            <div className="flex-column align-items-center pt-2 pb-2">
                                <div>
                                    <div className="">
                                        <h6 className="mb-0">Missions</h6>
                                    </div>
                                    <div className="quantity">
                                        <h5 className="mb-0">{missions.length}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6 col-lg-3">
                    <Link to="/missions">
                        <div className="d-flex ye-border ye-hover insight-item">
                            <div className="card-image col-4 d-flex align-items-center justify-content-center">
                                <img src={require("../../../../assets/images/insights/selected.png")} width="50px"
                                     height="50px"/>
                            </div>
                            <div className="flex-column align-items-center pt-2 pb-2">
                                <div>
                                    <div className="">
                                        <h6 className="mb-0">Offers</h6>
                                    </div>
                                    <div className="quantity">
                                        <h5 className="mb-0">0</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

    opportunityFormatter = (cell, row) => {
        return (
            <div className="col-lg-3 d-flex align-items-center">
                <div>
                    <div style={{color: "rgb(66, 173, 244)"}}>{cell.profile}</div>
                    <div>Application Deadline : {cell.duration.last.split("T")[0]}</div>
                    <div>Number Of Positions : {cell.vacancy}</div>
                </div>
            </div>
        )
    }

    totalApplicationsFormatter = (cell, row) => {
        let selected = 0;
        let rejected = 0;
        cell.map((app) => {
            if (app.status == "Selected") {
                selected++;
            } else if (app.status == "Rejected") {
                rejected++;
            }
        });

        return (
            <div className="col-lg-3 d-flex align-items-center">
                <div>
                    <div>Total Applications: {cell.length}</div>
                    <div>Selected: {selected}</div>
                    <div>Rejected: {rejected}</div>
                </div>
            </div>
        )
    }

    statusFormatter = (cell, row) => {
        return (
            <div className="col-lg-2 font-weight-bold d-flex align-items-center"
                 style={{color: "rgb(66, 173, 244)"}}>{cell.active ? "✔ OPEN" : "🔴 CLOSED"}</div>
        )
    }

    viewApplicationsFormatter = (cell, row) => {
        return (
            <div className="col-lg-3 d-flex align-items-center">
                <button className="btn btn-primary"
                        onClick={() => this.setState({selectedWork: row})}>View Applications
                </button>
            </div>
        )
    }

    idFormatter = (cell, row) => {
        this.currInternshipIndex++;
        return (
            <div className="col-lg-1 d-flex align-items-center">{this.currInternshipIndex}</div>
        )
    }

    renderCurrentInternshipsList() {
        const {activeInternships} = this.state;
        return (
            <div className="insight-item">
                {/*<BootstrapTable data={activeInternships}>*/}
                {/*    <TableHeaderColumn width="75px" isKey dataField="_id" dataFormat={this.idFormatter}>Sr.*/}
                {/*        No</TableHeaderColumn>*/}
                {/*    <TableHeaderColumn width="300px" dataField="work"*/}
                {/*                       dataFormat={this.opportunityFormatter}>Opportunity</TableHeaderColumn>*/}
                {/*    <TableHeaderColumn width="200px" dataField="applications"*/}
                {/*                       dataFormat={this.totalApplicationsFormatter}>Total*/}
                {/*        Applications</TableHeaderColumn>*/}
                {/*    <TableHeaderColumn width="100px" dataField="work"*/}
                {/*                       dataFormat={this.statusFormatter}>Status</TableHeaderColumn>*/}
                {/*    <TableHeaderColumn width="180px" dataField="view" dataFormat={this.viewApplicationsFormatter}>View*/}
                {/*        Applications</TableHeaderColumn>*/}
                {/*</BootstrapTable>*/}
                <div className="">
                    {activeInternships.map((internship, key) => {
                        let selected = 0;
                        let rejected = 0;
                        internship.applications.map((app) => {
                            if (app.status == "Selected") {
                                selected++;
                            } else if (app.status == "Rejected") {
                                rejected++;
                            }
                        });
                        let progress = (selected * 100) / internship.work.vacancy;
                        return (
                            <div className="col-12 insight-item " key={key}>
                                <Link to={`${internship.work.mode}/${internship.work._id}/report`} onClick={() => this.setState({selectedWork: internship})} className="text-dark">
                                    <div className="d-flex ye-border p-2 ye-hover row" key={key}>
                                        <div className="col-lg-3 col-md-3 col-8 d-flex border-right align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img
                                                        src={internship.company ? Converter.bufferToBase64(internship.company.logo) : require("../../../../assets/images/avatar/company.png")}
                                                        className="rounded-circle" width="40px" height="40px"/>
                                                </div>
                                            </div>
                                            <div className="d-flex pl-2 pr-2 align-items-center">
                                                {/*<Link to={`/internships/${internship.work._id}`}>*/}
                                                {/*    <div className="d-inline">{internship.work.profile}</div>*/}
                                                {/*</Link>*/}
                                                <div className=" pl-2 pr-2 flex-column align-items-center">
                                                    <div className="opacity-60"
                                                         style={{fontSize: "10px", fontWeight: 300}}>Internship Profile:
                                                    </div>
                                                    <div
                                                        style={{lineHeight: "1em"}}>{internship.work.profile}
                                                    </div>
                                                </div>
                                                <div className="dropdown float-right d-none">
                                                    <button className="btn btn-sm dropdown-toggle" type="button"
                                                            id="dropdownMenuButton" data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                                    </button>
                                                    <div className="dropdown-menu"
                                                         aria-labelledby="dropdownMenuButton">
                                                        {/*<a className="dropdown-item" href="#">a</a>*/}
                                                        {/*<a className="dropdown-item" href="#">b</a>*/}
                                                        {/*<a className="dropdown-item" href="#">c</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-4 border-right d-flex align-items-center">
                                            <div className="pl-2 pr-2 flex-column align-items-center">
                                                <div className="opacity-60"
                                                     style={{fontSize: "10px", fontWeight: 300}}>Company:
                                                </div>
                                                <div style={{fontSize: "13.5px"}}>{this.props.user.name}</div>
                                            </div>
                                        </div>

                                        <div className="col-lg-7 col-md-7 col-12 align-items-center flex-column">
                                            <div className="flex-fill" style={{paddingTop: "4px"}}>
                                                <div className="progress m-2 h-7">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: progress}}>
                                                        {/*{`${progress} % Complete`}*/}
                                                    </div>
                                                </div>
                                                <div className="m-2" style={{fontSize: "10px"}}>
                                                    <span>{selected} Selected</span><span
                                                    className="float-right">{internship.work.vacancy} Positions</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*</div>*/}
                                        {/*// <div className="progress m-2 d-none">*/}
                                        {/*//     <div className="progress-bar progress-bar-success progress-bar-striped"*/}
                                        {/*//          role="progressbar"*/}
                                        {/*//          aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"*/}
                                        {/*//          style={{width: progress}}>*/}
                                        {/*//         {`${progress} % Complete`}*/}
                                        {/*//     </div>*/}
                                        {/*// </div>*/}
                                        {/*// <div className="m-2 d-none" style={{fontSize: "10px"}}>*/}
                                        {/*//     <span>{internship.work.duration.start.split("T")[0]}</span><span*/}
                                        {/*//     className="float-right">{internship.work.duration.end.split("T")[0]}</span>*/}
                                        {/*// </div>*/}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }

    renderCurrentMissionsList() {
        const {activeMissions} = this.state
        return (
            <div className="insight-item">
                {/*<BootstrapTable data={activeMissions}>*/}
                {/*    <TableHeaderColumn width="75px" isKey dataField="_id" dataFormat={this.idFormatter}>Sr.*/}
                {/*        No</TableHeaderColumn>*/}
                {/*    <TableHeaderColumn width="300px" dataField="work"*/}
                {/*                       dataFormat={this.opportunityFormatter}>Opportunity</TableHeaderColumn>*/}
                {/*    <TableHeaderColumn width="200px" dataField="applications"*/}
                {/*                       dataFormat={this.totalApplicationsFormatter}>Total*/}
                {/*        Applications</TableHeaderColumn>*/}
                {/*    <TableHeaderColumn width="100px" dataField="work"*/}
                {/*                       dataFormat={this.statusFormatter}>Status</TableHeaderColumn>*/}
                {/*    <TableHeaderColumn width="180px" dataField="view" dataFormat={this.viewApplicationsFormatter}>View*/}
                {/*        Applications</TableHeaderColumn>*/}
                {/*</BootstrapTable>*/}
                {activeMissions.map((mission, key) => {
                    console.log(mission)
                    let selected = 0;
                    let rejected = 0;
                    mission.applications.map((app) => {
                        if (app.status == "Selected") {
                            selected++;
                        } else if (app.status == "Rejected") {
                            rejected++;
                        }
                    });
                    let progress = (selected * 100) / mission.work.vacancy;
                    return (
                        <div className="col-12">
                            <div className="d-flex ye-border p-2 ye-hover row" key={key}>
                                <div className="col-lg-3 col-md-3 col-8 d-flex border-right align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img
                                                src={mission.company ? Converter.bufferToBase64(mission.company.logo) : require("../../../../assets/images/avatar/company.png")}
                                                className="rounded-circle" width="40px" height="40px"/>
                                        </div>
                                    </div>
                                    <div className="d-flex pl-2 pr-2 align-items-center">
                                        {/*<Link to={`/internships/${internship.work._id}`}>*/}
                                        {/*    <div className="d-inline">{internship.work.profile}</div>*/}
                                        {/*</Link>*/}
                                        <div className=" pl-2 pr-2 flex-column align-items-center">
                                            <div className="opacity-60"
                                                 style={{fontSize: "10px", fontWeight: 300}}>Internship Profile:
                                            </div>
                                            <div style={{lineHeight: "1em"}}>{mission.work.profile} Development
                                            </div>
                                        </div>
                                        <div className="dropdown float-right d-none">
                                            <button className="btn btn-sm dropdown-toggle" type="button"
                                                    id="dropdownMenuButton" data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                <i className="fa fa-bars" aria-hidden="true"></i>
                                            </button>
                                            <div className="dropdown-menu"
                                                 aria-labelledby="dropdownMenuButton">
                                                {/*<a className="dropdown-item" href="#">a</a>*/}
                                                {/*<a className="dropdown-item" href="#">b</a>*/}
                                                {/*<a className="dropdown-item" href="#">c</a>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-4 border-right d-flex align-items-center">
                                    <div className="pl-2 pr-2 flex-column align-items-center">
                                        <div className="opacity-60"
                                             style={{fontSize: "10px", fontWeight: 300}}>Company:
                                        </div>
                                        <div style={{fontSize: "13.5px"}}>Young Engine</div>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-7 col-12 align-items-center flex-column">
                                    <div className="flex-fill" style={{paddingTop: "4px"}}>
                                        <div className="progress m-2 h-7">
                                            <div className="progress-bar progress-bar-success"
                                                 role="progressbar"
                                                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                 style={{width: progress}}>
                                                {/*{`${progress} % Complete`}*/}
                                            </div>
                                        </div>
                                        <div className="m-2" style={{fontSize: "10px"}}>
                                            <span>{selected} Selected</span><span
                                            className="float-right">{mission.work.vacancy} Positions</span>
                                        </div>
                                    </div>
                                </div>
                                {/*</div>*/}
                                {/*// <div className="progress m-2 d-none">*/}
                                {/*//     <div className="progress-bar progress-bar-success progress-bar-striped"*/}
                                {/*//          role="progressbar"*/}
                                {/*//          aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"*/}
                                {/*//          style={{width: progress}}>*/}
                                {/*//         {`${progress} % Complete`}*/}
                                {/*//     </div>*/}
                                {/*// </div>*/}
                                {/*// <div className="m-2 d-none" style={{fontSize: "10px"}}>*/}
                                {/*//     <span>{internship.work.duration.start.split("T")[0]}</span><span*/}
                                {/*//     className="float-right">{internship.work.duration.end.split("T")[0]}</span>*/}
                                {/*// </div>*/}
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }

    renderCurrentOffersList(){}

    renderEnterprisePlan = () => {
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