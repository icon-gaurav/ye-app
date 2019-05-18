/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Filters from "./Filters";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ListingContainer from "../containers/ListingContainer";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

import '../../assets/stylesheet/WorkList.css';

class WorkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalType: "Add",
            modalShow: false
        }
    }

    handleModalView = () => {
        this.setState({modalShow: true});
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="list-header">
                    <header className="main-head">Header</header>
                    <button className="btn btn-info" onClick={this.handleModalView}>+ Add</button>
                </div>
                {this.renderAddWorkModal()}
                <div className="row listing-details">
                    <div className="col-md-3 col-xs-12">
                        <div className="filter-static">
                            <Filters/>
                        </div>
                    </div>
                    <div className="col-md-9 col-xs-12 list">
                        <ListingContainer/>
                        {/*<Tabs defaultActiveKey="internship">*/}
                        {/*    <Tab eventKey="internship" title="Internship"><ListingContainer/></Tab>*/}
                        {/*    <Tab eventKey="mission" title="Mission"><ListingContainer/></Tab>*/}
                        {/*    <Tab eventKey="tasks" title="Tasks"><ListingContainer/></Tab>*/}
                        {/*</Tabs>*/}
                    </div>
                </div>
            </div>
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
}

export default WorkList;