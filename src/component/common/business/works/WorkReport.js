/*
 * @author Gaurav Kumar    
*/

import React from "react";
import {Tab, Tabs} from "react-bootstrap";
import Application from "./Application";
import ApplicationCard from "./ApplicationCard";
import ApiAction from "../../../../actions/ApiAction";
import Loader from 'react-loader-spinner';

class WorkReport extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            work: undefined
        }
        console.log(this.props)
    }

    componentWillMount() {
        let {id, workMode} = this.props.match.params;
        ApiAction.getApplication(workMode, id)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({work: response.data.work})
                } else {
                    this.setState({work:response.data.work})
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        if (this.state.work) {
            return this.renderReport();
        } else {
            return (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <Loader type="Plane" color="#00BFFF"
                            height="100"
                            width="100"/>
                </div>
            );
        }
    }

    renderReport() {
        let selectedWork = this.state.work;
        let selected = [];
        let rejected = [];
        let work = selectedWork.work;
        selectedWork.applications.map((app) => {
            if (app.status == "Selected") {
                selected.push(app);
            } else if (app.status == "Rejected") {
                rejected.push(app);
            }
        });
        let {edit, applicationsDetails} = this.state;
        return (
            <div>
                <div className="header">WORK REPORT</div>
                <div className="bg-white ye-border">
                    <div className="work-abstract border-bottom">
                        <div className="row m-1 p-2">
                            <div className="col-12">
                                <div className="d-flex">
                                    <h6>{work.profile}</h6>
                                    <div className="d-flex justify-content-end ml-auto">
                                        <button className="transparent-button"
                                                onClick={() => this.setState({edit: !edit})}>
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
                                <div className="d-flex">
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

                    <Tabs>
                        <Tab eventKey="all" title="All Applications">
                            <div className="applications col-12 p-2">
                                <div className="row">
                                    {selectedWork.applications.length > 0 ?
                                        selectedWork.applications.map((application, key) => {
                                            // return <Application application={application} key={key} work={work}/>
                                            return <div className="col-lg-4 col-md-6 col-12" key={key}><ApplicationCard
                                                application={application} work={work}/></div>
                                        }) :
                                        <div>No applications</div>}
                                </div>
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
                </div>
            </div>
        );
    }
}

export default WorkReport;