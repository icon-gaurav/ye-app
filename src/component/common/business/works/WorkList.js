/*
 * @author Gaurav Kumar    
*/
import './WorkList.css'
import React, { Component } from 'react';
import WorkModal from "./WorkModal";
import '../../../../assets/stylesheet/WorkList.css';
import ApiAction from "../../../../actions/ApiAction";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Work from "./Work";
import { CSVLink, CSVDownload } from "react-csv";
const dataExport = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];
class WorkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalType: "Add",
            modalShow: false,
            workList: [],
            selectedWork: null,
            featuredList: [],


        };


    }

    componentWillMount() {
        ApiAction.getTypeWorks(this.props.work)
            .then((response) => {
                if (response.data.success) {
                    this.setState({ workList: response.data.workList });
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
        let { user } = this.props;
        let { workList } = this.state;

        return (
            <div className="container-fluid">
                <div className="d-flex m-2">
                    <header className="main-head"><h2><strong>Total {this.props.work} :</strong> {workList.length}</h2></header>
                     {user.role == "ADMIN" || user.role == "COMPANY" ?
                     <div className="float-right d-flex justify-content-end ml-auto form-group" width="100%">
                        <div className="inner-addon left-addon m-2 ">
                            <i className="glyphicon glyphicon-search"></i>
                            <input type="text" className="form-control" placeholder="Search" ref="search" />
                        </div>
                        <CSVLink data={dataExport}>
                            <button className="btn bg-white float-right m-1 " >
                                <span className="glyphicon glyphicon-download-alt"> Export Data</span>
                            </button>
                        </CSVLink>
                        <CSVDownload data={dataExport} target="_blank" />
                        <button className="btn btn-success float-right m-1"
                            onClick={() => this.setState({ modalShow: true, modalType: "Add" })}>
                            <span className="glyphicon glyphicon-plus"> App Request</span>

                        </button>





                    </div>: ""} 
                    
                </div>
                {this.state.modalShow ?
                    <WorkModal show={this.state.modalShow} onHide={() => this.setState({ modalShow: false })}
                        type={this.state.modalType} workType={this.props.work} user={user} /> : ""}
                {this.state.workList.length == 0 ? this.renderNoWork() : this.renderNewList()}

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
        const selectRow = {
            mode: "radio",
            clickToSelect: true,
            onSelect: this.handleSelectedRow,
            bgColor: "red"
        };
        let { workList } = this.state;
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
            this.setState({ selectedWork: row });
            console.log(row)
        }
    }

    renderNewList() {
        let { workList } = this.state;
        let { user } = this.props;
        return (
            workList.map((work, key) => {
                return (
                    <Work key={key} work={work} user={user} />
                );
            })
        );
    }
}

export default WorkList;