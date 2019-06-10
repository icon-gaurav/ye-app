/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import WorkModal from "./WorkModal";
import '../../../../assets/stylesheet/WorkList.css';
import ApiAction from "../../../../actions/ApiAction";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import Work from "./Work";

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
                    this.setState({workList: response.data.workList});
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
        return (
            <div className="container-fluid">
                <div className="">
                    {/*<header className="main-head">{this.props.work}</header>*/}
                    {user.role == "ADMIN" || user.role == "COMPANY" ? <div className="">
                        <button className="btn btn-info"
                                onClick={() => this.setState({modalShow: true, modalType: "Add"})}>+ Add
                        </button>
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
                        <TableHeaderColumn dataField="featured" dataFormat={this.featuredFormatter}>Featured</TableHeaderColumn>
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

    renderNewList(){
        let {workList} = this.state;
        let {user} = this.props;
        return(
            workList.map((work, key)=>{
                return(
                    <Work key={key} work={work} user={user}/>
                );
            })
        );
    }
}

export default WorkList;