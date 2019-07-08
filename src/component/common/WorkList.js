/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Filters from "./Filters";
import ListingContainer from "../containers/ListingContainer";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import WorkModal from "./business/works/WorkModal";

import '../../assets/stylesheet/WorkList.css';
import ApiAction from "../../actions/ApiAction";

class WorkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalType: "Add",
            modalShow: false,
            workList: [],
            filteredList: [],
            filterModal: false,
        };
        console.log(this.props);
    }

    componentWillMount() {
        ApiAction.getTypeWorks(this.props.work)
            .then((response) => {
                if (response.data.success) {
                    this.setState({workList: response.data.workList, filteredList: response.data.workList});
                } else {

                }
            })
            .catch((error) => {
                console.log(error);
            });
        // let workList = [
        //     {
        //         mode: "internship",
        //         company: "young engine",
        //         profile: "webprofile",
        //         duration: {
        //             start: new Date(),
        //             end: new Date(new Date().getTime() + 2000000000),
        //             last: new Date()
        //         },
        //         vacancy: 3,
        //         stipend: 5000,
        //         workDetails: "here is work details",
        //         skillSet: ["skill1", "skill2", "skill3"],
        //         location: "Home"
        //     },
        //     {
        //         mode: "mission",
        //         company: "young engine mission",
        //         profile: "web profile mission",
        //         duration: {
        //             start: new Date(),
        //             end: new Date(new Date().getTime() + 2000000000),
        //             last: new Date()
        //         },
        //         vacancy: 4,
        //         stipend: 5000,
        //         workDetails: "here is work details mission",
        //         skillSet: ["skill1", "skill2", "skill3"],
        //         location: "Home mission"
        //     }
        // ];
        // this.setState({workList: workList});
    }

    handleModalView = () => {
        this.setState({modalShow: true});
    }

    render() {
        let {user} = this.props;
        return (
            <div className="main-app position-relative">
                <div className="header">{this.props.work.toUpperCase()}S</div>
                <div className="">
                    {/*<header className="main-head">{this.props.work}</header>*/}
                    {user.role == "ADMIN" ? <div className="">
                        <button className="btn btn-info"
                                onClick={() => this.setState({modalShow: true, modalType: "Add"})}>+ Add
                        </button>
                    </div> : ""}
                </div>
                {this.state.modalShow ?
                    <WorkModal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})}
                               type={this.state.modalType} workType={this.props.work}/> : ""}
                {this.state.workList.length == 0 ? this.renderNoWork() : this.renderList()}
                {this.state.filterModal ? this.renderFiltersInModal() : ""}
            </div>
        );
    }

    renderNoWork() {
        return (
            <div>
                <p>No work</p>
            </div>
        );
    }

    renderList() {
        let {workList, filteredList} = this.state;
        return (
            <div className="row workList-details">
                <div className="ye-filter-icon d-lg-none d-md-none d-block">
                    <button className="transparent-button"
                            onClick={() => this.setState({filterModal: !this.state.filterModal})}>
                        <img src={require("../../assets/images/icons/filter.svg")}
                             className="rounded-circle ye-glow bg-white border p-1"
                             height={30} width={30} alt="filter icon"/>
                    </button>
                </div>
                <div className="mb-lg-0 mb-4 col-lg-3 col-sm-12">
                    <Filters workList={workList} filter={this.filter}/>
                </div>
                {/*<div className="col-md-3 col-xs-12">*/}
                {/*    <div className="filter-static">*/}
                {/*        <Filters/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="col-lg-9 col-sm-12">
                    <div className="bg-white ye-border">
                        <div className="border-bottom p-2">
                            {`${this.props.work.toUpperCase()}S`}<span
                            className="opacity-60"
                            style={{fontSize: "12px"}}>{` (${filteredList.length} results)`}</span>
                        </div>
                        <div className="col-12">
                            <ListingContainer workList={filteredList}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderFiltersInModal() {
        return (
            <Modal show={this.state.filterModal} onHide={() => this.setState({filterModal: false})}>
                <ModalBody>
                    <Filters workList={this.state.workList} filter={this.filter}/>
                </ModalBody>
            </Modal>
        );
    }

    renderAddWorkModal() {
        return (
            <Modal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})}>
                <ModalHeader closeButton>
                    <Modal.Title>{this.state.modalType}</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="work-wrapper">
                        <div className="form-group">
                            <label className="form-label">Company ID</label>
                            <input type="text" className="form-control" placeholder="Company ID"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Profile</label>
                            <input type="text" className="form-control" placeholder="Profile"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Duration</label>
                            <div className="form-inline">
                                <input type="date" className="form-control" placeholder="from"/>
                                <div>to</div>
                                <input type="date" className="form-control" placeholder="to"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Stipend</label>
                            <input type="number" className="form-control" placeholder="Stipend"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Work Details</label>
                            <input type="text" className="form-control" placeholder="Work Details"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Work Location</label>
                            <input type="text" className="form-control" placeholder="Work Location"/>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value="Featured"/> Featured
                            </label>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success">Add</button>
                </ModalFooter>
            </Modal>
        );
    }

    filter = (workList) => {
        this.setState({filteredList: workList});
    }
}

export default WorkList;