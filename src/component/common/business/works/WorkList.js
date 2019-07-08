/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import WorkModal from "./WorkModal";
import '../../../../assets/stylesheet/WorkList.css';
import ApiAction from "../../../../actions/ApiAction";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import Work from "./Work";
import {CSVLink, CSVDownload} from "react-csv";
import Loader from "react-loader-spinner";
import WorkReport from "./WorkReport";
import {Link} from "react-router-dom";
import Converter from "../../../utilities/Converter";

class WorkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalType: "Add",
            modalShow: false,
            workList: [],
            selectedWork: null,
            featuredList: [],
            searchedList: [],
        };
    }

    componentWillMount() {
        ApiAction.getTypeWorks(this.props.work)
            .then((response) => {
                if (response.data.success) {
                    this.setState({workList: response.data.workList, searchedList: response.data.workList});
                } else {

                }
            })
            .catch((error) => {
                console.log(error);
            });
        let workList = [
            {
                _id: "fogegneiongvk",
                mode: "internship",
                company: "young engine",
                profile: "webprofile",
                duration: {
                    start: new Date(),
                    end: new Date(new Date().getTime() + 2000000000),
                    last: new Date(),
                    weeks: 5
                },
                vacancy: 3,
                stipend: 5000,
                workDetails: "here is work details",
                skillSet: ["skill1", "skill2", "skill3"],
                location: "Home",
                featured: true
            },
            {
                _id: "grewgnuiwhguih",
                mode: "mission",
                company: "young engine mission",
                profile: "web profile mission",
                duration: {
                    start: new Date(),
                    end: new Date(new Date().getTime() + 2000000000),
                    last: new Date(),
                    weeks: 10
                },
                vacancy: 4,
                stipend: 5000,
                workDetails: "here is work details mission",
                skillSet: ["skill1", "skill2", "skill3"],
                location: "Home mission"
            }
        ];
        let featured = [
            {
                _id: "veihgne",
                work: "fogegneiongvk"
            }
        ];
        // this.setState({workList: workList, featuredList: featured});
    }

    render() {
        let {user} = this.props;
        let {workList, searchedList} = this.state;
        return (
            <div className="container-fluid">
                <div className="d-flex header">
                    <div className="">TOTAL {this.props.work.toUpperCase()} : {workList.length}</div>
                    {user.role == "ADMIN" || user.role == "COMPANY" ?
                        <div className="d-flex justify-content-end ml-auto" width="100%">
                            <div className="">
                                <input type="text" className="form-control" placeholder="Search" ref="search"/>
                            </div>
                            <div className="ml-2 mr-2">
                                <CSVLink data={searchedList}>
                                    <button className="btn bg-white ye-border ye-hover">
                                        <i className="fas fa-download mr-1"></i>
                                        <span>Export Data</span>
                                    </button>
                                </CSVLink>
                            </div>
                            {/*<CSVDownload data={searchedList} target="_blank"/>*/}
                            <div>
                                <button className="btn ye-hover ye-border btn-success"
                                        onClick={() => this.setState({modalShow: true, modalType: "Add"})}>+ Add
                                </button>
                            </div>
                        </div> : ""}
                </div>
                {this.state.modalShow ?
                    <WorkModal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})}
                               type={this.state.modalType} workType={this.props.work} user={user}/> : ""}
                {this.state.workList.length == 0 ? this.renderNoWork() : this.renderNewList()}

            </div>
        );
    }

    renderNoWork() {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Loader type="Plane" color="#00BFFF"
                        height="100"
                        width="100"/>
            </div>
        );
    }

    renderList() {
        const selectRow = {
            mode: "radio",
            clickToSelect: true,
            onSelect: this.handleSelectedRow,
            bgColor: "red"
        };
        let {workList} = this.state;
        return (
            <div className="row listing-details">
                <div className="table-responsive">
                    <BootstrapTable data={workList} striped hover version='4'
                                    selectRow={selectRow}>
                        <TableHeaderColumn isKey dataField="_id" hidden={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="profile">Profile</TableHeaderColumn>
                        <TableHeaderColumn dataField="duration" dataFormat={this.lastDateFormatter}>Last
                            Date</TableHeaderColumn>
                        <TableHeaderColumn dataField="duration"
                                           dataFormat={this.weeksFormatter}>Durations(weeks)</TableHeaderColumn>
                        <TableHeaderColumn dataField="vacancy">Vacancy</TableHeaderColumn>
                        <TableHeaderColumn dataField="stipend">Stipend</TableHeaderColumn>
                        <TableHeaderColumn dataField="location">Location</TableHeaderColumn>
                        <TableHeaderColumn dataField="featured"
                                           dataFormat={this.featuredFormatter}>Featured</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }

    lastDateFormatter = (cell, row) => {
        return cell.last;
    }

    weeksFormatter = (cell, row) => {
        return cell.weeks;
    }

    featuredFormatter = (cell, row) => {
        return cell ? "Featured" : "";
    }

    handleSelectedRow = (row, isSelect, event) => {
        if (isSelect) {
            this.setState({selectedWork: row});
            console.log(row)
        }
    }

    renderNewList() {
        let {workList} = this.state;
        return (
            <div className="bg-white ye-border pt-3 pl-3 pr-3">
                {workList.map((work, key) => <Work work={work} key={key}/>)}
            </div>
        );
    }
}

export default WorkList;