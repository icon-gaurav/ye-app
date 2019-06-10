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
            <div className="work-wrapper border">
                <div className="work-abstract">
                    <div className="row m-1 p-2">
                        <div className="col-11">
                            <div>
                                <h6>{work.profile}</h6>
                            </div>
                            <div>
                                <p className="opacity-75">{work.workDetails}</p>
                            </div>
                            <div>
                                <div className="d-inline px-1">
                                    <span><b>Last date</b> : {work.duration.last}</span>
                                </div>
                                <div className="d-inline">
                                    <span><b>Duration</b> : {work.duration.weeks}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <Button className="" onClick={() => this.setState({edit: !edit})}><i
                                className="fas fa-ellipsis-v"></i></Button>
                            <Button onClick={() => this.setState({applicationsDetails: !applicationsDetails})}><i
                                className="fas fa-list-ul"></i></Button>
                        </div>
                    </div>
                </div>
                {applicationsDetails ?
                    <Tabs>
                        <Tab eventKey="all" title="All Applications">
                            <div className="applications col-12">
                                {applications.map((application, key) => {
                                    return <Application application={application} key={key} work={work}/>
                                })}
                            </div>
                        </Tab>
                        <Tab eventKey="selected" title="Selected">
                            <div className="applications col-12">
                                {selected.map((application, key) => {
                                    return <Application application={application} key={key} work={work}/>
                                })}
                            </div>
                        </Tab>
                        <Tab eventKey="rejected" title="Rejected">
                            <div className="applications col-12">
                                {rejected.map((application, key) => {
                                    return <Application application={application} key={key} work={work}/>
                                })}
                            </div>
                        </Tab>
                    </Tabs>
                    : ""}
                {edit ? <WorkModal show={edit} onHide={() => this.setState({edit: false})}
                                   type="Edit" workType={this.props.work} user={user}
                                   work={work}/> : ""}

            </div>
        );
    }
}

export default Work;