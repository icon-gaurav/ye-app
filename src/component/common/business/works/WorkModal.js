/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Form from "react-bootstrap/Form";
import {FormCheck, FormLabel} from "react-bootstrap";
import FormGroup from "react-bootstrap/es/FormGroup";
import FormControl from "react-bootstrap/es/FormControl";
import FormFeedback from "reactstrap/es/FormFeedback";
import DatePicker from "react-datepicker/es";
import ApiAction from "../../../../actions/ApiAction";
import Converter from "../../../utilities/Converter";
import Image from "react-bootstrap/Image";

class WorkModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "",
            company: this.props.user._id,
            profile: "",
            startDate: new Date(),
            endDate: new Date(),
            lastDate: new Date(),
            weeks: "",
            vacancy: 1,
            stipend: 0,
            workDetails: "",
            skillSet: [],
            location: "",
            benefits: "",
            selectionProcedure: "",
            featured: false,
            currentSkill: "",
            companyName: "",
            companyLogo: ""
        }

    }

    componentWillMount() {
        let {work} = this.props;
        if (work) {
            this.setState({
                mode: work.mode,
                company: work.company,
                profile: work.profile,
                startDate: work.duration.start,
                lastDate: work.duration.last,
                endDate: work.duration.end,
                weeks: work.duration.weeks,
                vacancy: work.vacancy,
                stipend: work.stipend,
                workDetails: work.workDetails,
                skillSet: work.skillSet,
                location: work.location,
                benefits: work.benefits,
                selectionProcedure: work.selectionProcedure,
                companyName: work.company.name,
                companyLogo: Converter.bufferToBase64(work.company.logo)
            });
        }
    }

    render() {
        let {
            mode, company, profile, startDate, endDate, lastDate,
            weeks, vacancy, stipend, workDetails, skillSet, currentSkill,
            location, benefits, selectionProcedure, featured, companyLogo, companyName
        } = this.state;
        let {user} = this.props;
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <ModalHeader closeButton>
                    <Modal.Title>{this.props.type}</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="scrollable-modal-div">
                        <Form className="work-wrapper">
                            <div className="row">
                                <div className="col-6">
                                    <FormGroup className="d-none">
                                        <FormLabel className="form-label">Company ID</FormLabel>
                                        <FormControl type="text" name="company" className="" placeholder="Company ID"
                                                     value={company} onChange={this.updateCompany}
                                                     disabled={user.role == "ADMIN" ? false : true}/>
                                        <FormFeedback>Company Details could not be empty</FormFeedback>
                                    </FormGroup>
                                    <FormGroup className={user.role != "ADMIN" ? "d-none" : ""}>
                                        <FormLabel className="form-label">Company Details</FormLabel>
                                        <FormControl type="text" name="companyName" className=""
                                                     placeholder="Company Name"
                                                     value={companyName} onChange={this.updateCompanyName}
                                                     disabled={user.role == "ADMIN" ? false : true}/>
                                        <FormGroup className="d-flex">
                                            <Image src={companyLogo}
                                                   className="rounded-circle border" width="50px" height="50px"/>
                                            <FormControl type="file" name="companyLogo" className=""
                                                         onChange={this.updateCompanyLogo}
                                                         disabled={user.role != "ADMIN" && this.props.type == "Edit"}/>
                                        </FormGroup>
                                        <FormFeedback>Company Details could not be empty</FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel className="form-label">Profile</FormLabel>
                                        <FormControl type="text" name="profile" className="form-control"
                                                     placeholder="Profile" value={profile}
                                                     onChange={this.updateProfile}/>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <FormLabel className="form-label">Duration</FormLabel>
                                        <FormControl type="number" name="duration" className="form-control"
                                                     placeholder="Duration (in weeks)" value={weeks}
                                                     onChange={this.updateWeeks}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel className="form-label">Last Date</FormLabel>
                                        <DatePicker placeholderText="Click to select a date (mm/dd/yyyy)"
                                                    minDate={new Date()} onChange={this.updateLastDate}
                                                    selected={new Date(lastDate)}/>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <FormLabel className="form-label">Stipend</FormLabel>
                                        <FormControl type="number" name="stipend" className="form-control"
                                                     placeholder="Stipend" value={stipend}
                                                     onChange={this.updateStipend}/>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <FormLabel className="form-label">Work Location</FormLabel>
                                        <FormControl type="text" name="location" className="form-control"
                                                     placeholder="Work Location" value={location}
                                                     onChange={this.updateLocation}/>
                                    </FormGroup>
                                </div>
                                <div className="col-6">
                                    <FormGroup className="">
                                        <FormLabel className="">Work Details</FormLabel>
                                        <FormControl type="text" as="textarea" name="work-details" className=""
                                                     placeholder="Work Details" value={workDetails}
                                                     onChange={this.updateWorkDetails}/>
                                    </FormGroup>
                                    <FormGroup className="">
                                        <FormLabel className="">Benefits</FormLabel>
                                        <FormControl type="text" as="textarea" name="benefits" className=""
                                                     placeholder="Benefits and Rewards" value={benefits}
                                                     onChange={this.updateBenefits}/>
                                    </FormGroup>
                                    <FormGroup className="">
                                        <FormLabel className="">Selection Procedure</FormLabel>
                                        <FormControl type="text" as="textarea" name="selectionProcedure" className=""
                                                     placeholder="Selection Procedure" value={selectionProcedure}
                                                     onChange={this.updateSelectionProcedure}/>
                                    </FormGroup>
                                    <FormGroup className="">
                                        <FormLabel className="">Skills required</FormLabel>
                                        <FormControl type="text" name="skills" className=""
                                                     placeholder="Skill" value={currentSkill}
                                                     onChange={this.updateCurrentSkill} onKeyUp={this.addSkillSet}/>
                                        <div style={{height: "50px"}}>
                                            <ul style={{maxHeight: "50px", overflow: "overlay"}}>
                                                {skillSet.map((skill, key) => {
                                                    return (
                                                        <li key={key}>
                                                            <div className="d-inline-block">
                                                                <span>{skill}</span>
                                                            </div>
                                                            <div className="d-inline-block">
                                                                <button type="button"
                                                                        className="transparent-btn float-none ml-0"
                                                                        onClick={this.deleteSkillSet}>
                                                                    <i className="far fa-times-circle"><span
                                                                        className="sr-only">{key}</span> </i>
                                                                </button>
                                                            </div>
                                                        </li>
                                                    );
                                                })}

                                            </ul>
                                        </div>
                                    </FormGroup>
                                    {this.props.user.role == "ADMIN" ?
                                        <FormGroup className="form-check">
                                            <FormCheck type="checkbox" name="featured" label={"Featured"}
                                                       checked={featured}
                                                       onChange={this.updateFeatured}/>
                                        </FormGroup> : ""}
                                </div>
                            </div>
                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success" onClick={this.submitDetails}>Save</button>
                </ModalFooter>
            </Modal>
        );
    }

    updateCompanyName = (event) => {
        if (event.target.name == "companyName") {
            this.setState({companyName: event.target.value});
        }
    }

    updateCompanyLogo = (event) => {
        if (event.target.name == "companyLogo") {
            Converter.imageFileToBase64(event.target.files[0])
                .then((base64) => {
                    this.setState({companyLogo: base64});
                })
            // this.setState({companyLogo: event.target.value});
        }
    }

    updateCompany = (event) => {
        if (event.target.name == "company") {
            this.setState({company: event.target.value});
        }
    }

    updateProfile = (event) => {
        if (event.target.name == "profile") {
            this.setState({profile: event.target.value});
        }
    }

    updateLastDate = (date) => {
        this.setState({lastDate: date});
    }

    updateWeeks = (event) => {
        if (event.target.name == "duration") {
            this.setState({weeks: event.target.value});
        }
    }

    updateStipend = (event) => {
        if (event.target.name == "stipend") {
            this.setState({stipend: event.target.value});
        }
    }

    updateLocation = (event) => {
        if (event.target.name == "location") {
            this.setState({location: event.target.value});
        }
    }

    updateWorkDetails = (event) => {
        if (event.target.name == "work-details") {
            this.setState({workDetails: event.target.value});
        }
    }
    updateBenefits = (event) => {
        if (event.target.name == "benefits") {
            this.setState({benefits: event.target.value});
        }
    }

    updateSelectionProcedure = (event) => {
        if (event.target.name == "selectionProcedure") {
            this.setState({selectionProcedure: event.target.value});
        }
    }

    updateCurrentSkill = (event) => {
        if (event.target.name == "skills") {
            this.setState({currentSkill: event.target.value});
        }
    }

    addSkillSet = (event) => {
        if (event.target.name == "skills") {
            let {skillSet, currentSkill} = this.state;
            if (event.keyCode == 13) {
                skillSet.unshift(currentSkill);
                this.setState({skillSet: skillSet, currentSkill: ""});
            }
        }
    }

    deleteSkillSet = (event) => {
        let key = event.target.children[0].innerText;
        let {skillSet} = this.state;
        skillSet.splice(key, 1);
        this.setState({skillSet: skillSet});
    }

    updateFeatured = (event) => {
        if (event.target.name == "featured") {
            this.setState({featured: event.target.checked});
        }
    }

    submitDetails = () => {
        let {
            mode, company, profile, startDate, endDate, lastDate,
            weeks, vacancy, stipend, workDetails, skillSet, currentSkill,
            location, benefits, selectionProcedure, featured, companyName, companyLogo
        } = this.state;
        let {user} = this.props;
        let work = {
            mode: this.props.workType,
            company: user.role == "ADMIN" ? {name: companyName, logo: companyLogo} : company,
            profile: profile,
            duration: {
                start: startDate,
                end: endDate,
                last: lastDate,
                weeks: weeks,
            },
            vacancy: vacancy,
            stipend: stipend,
            workDetails: workDetails,
            benefits: benefits,
            selectionProcedure: selectionProcedure,
            skillSet: skillSet,
            location: location,
            featured: featured,
        };
        console.log(featured)
        ApiAction.addWork(work, featured)
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.props.onHide();
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export default WorkModal;