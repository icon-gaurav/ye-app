/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Application from "./Application";
import {Image, Tab, Tabs} from "react-bootstrap";
import WorkModal from "./WorkModal";
import ApiAction from "../../../../actions/ApiAction";

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationsDetails: false,
            applications: [],
            edit: false,
            selected: [],
            rejected: [],
        }
    }

    componentWillMount() {
        ApiAction.getApplication(this.props.work)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    let {selected, rejected} = this.state;
                    response.data.applications.map((app) => {
                        if (app.status == "Selected") {
                            selected.push(app);
                        } else if (app.status == "Rejected") {
                            rejected.push(app);
                        }
                    });
                    this.setState({applications: response.data.applications, selected: selected, rejected: rejected})
                }
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        let {work, user} = this.props;
        let {applications, edit, applicationsDetails, selected, rejected} = this.state;
        return (
            <div className="work-wrapper border mb-2 bg-white">
                <div className="work-abstract">
                    <div className="row m-1 p-2">
                        <div className="col-12">
                            <div className="d-flex">
                                <h6>{work.profile}</h6>
                                <div className="d-flex justify-content-end ml-auto">
                                    <button className="transparent-button" onClick={() => this.setState({edit: !edit})}><i
                                        className="fas fa-ellipsis-v"></i></button>
                                    <button className="transparent-button" onClick={() => this.setState({applicationsDetails: !applicationsDetails})}><i
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
                                    <span><b>Duration</b> : {work.duration.weeks}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {applicationsDetails ?
                    <Tabs>
                        <Tab eventKey="all" title="All Applications">
                            <div className="applications col-12">
                                {applications.length>0?
                                    applications.map((application, key) => {
                                    return <Application application={application} key={key} work={work}/>
                                }):
                                    <div>No applications</div>}
                            </div>
                        </Tab>
                        <Tab eventKey="selected" title="Selected">
                            <div className="applications col-12">
                                {selected.length>0?
                                    selected.map((application, key) => {
                                    return <Application application={application} key={key} work={work}/>
                                }):
                                    <div>No selected applications</div>}
                            </div>
                        </Tab>
                        <Tab eventKey="rejected" title="Rejected">
                            <div className="applications col-12">
                                {rejected.length>0?
                                    rejected.map((application, key) => {
                                    return <Application application={application} key={key} work={work}/>
                                }):
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
}

export default Work;