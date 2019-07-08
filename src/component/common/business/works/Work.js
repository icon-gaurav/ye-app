/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Application from "./Application";
import {Image, Tab, Tabs} from "react-bootstrap";
import WorkModal from "./WorkModal";
import ApiAction from "../../../../actions/ApiAction";
import {Link} from "react-router-dom";
import Converter from "../../../utilities/Converter";
import WorkLoader from "../../../loaders/WorkLoader";

class Work extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            applicationsDetails: false,
            applications: [],
            edit: false,
            selected: [],
            rejected: [],
            work: undefined,
        }
    }

    componentWillMount() {
        let {work} = this.props;
        ApiAction.getApplication(work.mode, work._id)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    // let {selected, rejected} = this.state;
                    // response.data.applications.map((app) => {
                    //     if (app.status == "Selected") {
                    //         selected.push(app);
                    //     } else if (app.status == "Rejected") {
                    //         rejected.push(app);
                    //     }
                    // });
                    // this.setState({applications: response.data.applications, selected: selected, rejected: rejected})
                    this.setState({work: response.data.work});
                } else {
                    this.setState({work: {work: work, applications:[]}});
                }
            })
            .catch(error => {
                console.log(error)
            });
    }

    renderOld() {
        let {work, user} = this.props;
        let {applications, edit, applicationsDetails, selected, rejected} = this.state;
        return (
            <div className="work-wrapper ye-border mb-2 bg-white">
                <div className="work-abstract border-bottom">
                    <div className="row m-1 p-2">
                        <div className="col-12">
                            <div className="d-flex">
                                <h6>{work.profile}</h6>
                                <div className="d-flex justify-content-end ml-auto">
                                    <button className="transparent-button" onClick={() => this.setState({edit: !edit})}>
                                        <i
                                            className="fas fa-ellipsis-v"></i></button>
                                    <button className="transparent-button"
                                            onClick={() => this.setState({applicationsDetails: !applicationsDetails})}>
                                        <i
                                            className="fas fa-list-ul"></i></button>
                                </div>
                            </div>
                            <div>
                                <p className="opacity-75">{work.workDetails}</p>
                            </div>
                            <div className="d-flex col-lg-4 col-md-3 col-sm-12">
                                <div className="">
                                    <span><b>Last date</b> : {work.duration.last.split('T')[0]}</span>
                                </div>
                                <div className="justify-content-end ml-auto">
                                    <span><b>Duration</b> : {work.duration.weeks} weeks</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {applicationsDetails ?
                    <Tabs>
                        <Tab eventKey="all" title="All Applications">
                            <div className="applications col-12 p-2">
                                {applications.length > 0 ?
                                    applications.map((application, key) => {
                                        return <Application application={application} key={key} work={work}/>
                                    }) :
                                    <div>No applications</div>}
                            </div>
                        </Tab>
                        <Tab eventKey="selected" title="Selected">
                            <div className="applications col-12 p-2">
                                {selected.length > 0 ?
                                    selected.map((application, key) => {
                                        return <Application application={application} key={key} work={work}/>
                                    }) :
                                    <div>No selected applications</div>}
                            </div>
                        </Tab>
                        <Tab eventKey="rejected" title="Rejected">
                            <div className="applications col-12 p-2">
                                {rejected.length > 0 ?
                                    rejected.map((application, key) => {
                                        return <Application application={application} key={key} work={work}/>
                                    }) :
                                    <div>No rejected applications</div>}
                            </div>
                        </Tab>
                    </Tabs>
                    : ""}
                {edit ?
                    <WorkModal show={edit} onHide={() => this.setState({edit: false})}
                               type="Edit" workType={this.props.work} user={user}
                               work={work}/>
                    : ""}

            </div>
        );
    }
    render(){
        if(this.state.work){
            return this.renderWork();
        }else{
            return <WorkLoader/>;
        }
    }

    renderWork() {
        let internship = this.state.work;
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
            <div className="col-12 mb-3 bg-white">
                <Link to={`${internship.work.mode}/${internship.work._id}/report`} className="text-dark"
                      onClick={() => this.setState({selectedWork: internship})}>
                    <div className="d-flex ye-border p-2 ye-hover row">
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
                                        style={{lineHeight: "1em"}}>{internship.work.profile} Development
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
    }
}

export default Work;