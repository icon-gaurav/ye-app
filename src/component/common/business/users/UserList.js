/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../../../assets/stylesheet/UserList.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import {Link} from "react-router-dom";
import ApiAction from "../../../../actions/ApiAction";
import {Button, FormCheck, FormGroup, ModalBody} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationDialog: false,
            students: [],
            companies: [],
            specificUser: null,
            message: "",
            confirmation: false,
        };
        this.selectedUsers = [];
        this.users = [
            {
                id: 1,
                username: "username",
                fullname: "fullName",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            },
            {
                id: 2,
                username: "username",
                fullname: "fullName2",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "company"
            },
            {
                id: 3,
                username: "username",
                fullname: "fullName3",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            },
            {
                id: 4,
                username: "username",
                fullname: "fullName3",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            },
            {
                id: 5,
                username: "username",
                fullname: "fullName3",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            },
            {
                id: 6,
                username: "username",
                fullname: "fullName3",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            },
            {
                id: 7,
                username: "username",
                fullname: "fullName3",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            },
            {
                id: 8,
                username: "username",
                fullname: "fullName3",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            },
            {
                id: 9,
                username: "username",
                fullname: "fullName3",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            },
            {
                id: 10,
                username: "username",
                fullname: "fullName3",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            },
            {
                id: 11,
                username: "username",
                fullname: "fullName3",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            },
            {
                id: 12,
                username: "username",
                fullname: "fullName3",
                mobile: 12334,
                email: "roih@gmak.if",
                status: "not verfiy",
                role: "student"
            }
        ];

    }

    componentWillMount() {
        ApiAction.getAllStudents()
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({students: response.data.studentList})
                }
            })
            .catch((error) => {
                console.log(error)
            });

        ApiAction.getAllCompanies()
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({companies: response.data.companyList});
                }
            })
            .catch((error) => {
                console.log(error)
            });

    }

    render() {
        const selectRowPropForNotification = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.handleSelectedRowNotification,
            bgColor: function (row, isSelect) {
                if (isSelect) {
                    console.log(row)
                    let {role} = row;
                    if ('student' == role.toLowerCase()) {
                        return 'blue';
                    } else if ('company' == role.toLowerCase()) {
                        return 'red';
                    } else {
                        return 'pink';
                    }
                }
                return null;
            },
        };
        let {students, companies, notificationDialog, specificUser} = this.state;
        return (
            <div className="container-fluid">
                <div className="notification-button">
                    <button className="btn btn-info"
                            onClick={() => this.setState({
                                notificationDialog: !this.state.notificationDialog,
                                specificUser: null
                            })}>Send
                        Notification
                    </button>
                </div>
                {this.state.notificationDialog ? this.renderNotification() : ""}
                {specificUser ? this.renderVerifyUser() : ""}
                <div className="table-responsive">
                    <BootstrapTable data={students} striped hover version='4'
                                    selectRow={selectRowPropForNotification}>
                        <TableHeaderColumn isKey dataField="_id" hidden={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="username">Username</TableHeaderColumn>
                        <TableHeaderColumn dataField="name" dataFormat={this.nameFormatter}>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="contact"
                                           dataFormat={this.mobileFormatter}>Mobile</TableHeaderColumn>
                        <TableHeaderColumn dataField="contact"
                                           dataFormat={this.emailFormatter}>Email</TableHeaderColumn>
                        <TableHeaderColumn dataField="status"
                                           dataFormat={this.statusFormatter}>Status</TableHeaderColumn>
                        <TableHeaderColumn dataField="role">Role</TableHeaderColumn>
                    </BootstrapTable>
                </div>

                <div className="table-responsive">
                    <BootstrapTable data={companies} striped hover version='4'
                                    selectRow={selectRowPropForNotification}>
                        <TableHeaderColumn isKey dataField="_id" hidden={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="username">Username</TableHeaderColumn>
                        <TableHeaderColumn dataField="name" dataFormat={this.nameFormatter}>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="contact"
                                           dataFormat={this.mobileFormatter}>Mobile</TableHeaderColumn>
                        <TableHeaderColumn dataField="contact"
                                           dataFormat={this.emailFormatter}>Email</TableHeaderColumn>
                        <TableHeaderColumn dataField="status"
                                           dataFormat={this.statusFormatter}>Status</TableHeaderColumn>
                        <TableHeaderColumn dataField="role">Role</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }

    nameFormatter = (cell, row) => {
        if (cell.first) {
            return cell.first + " " + cell.last;
        } else {
            return cell;
        }
    }

    mobileFormatter = (cell, row) => {
        return cell.mobile;
    }

    emailFormatter = (cell, row) => {
        return cell.email;
    }

    statusFormatter = (cell, row) => {
        let status = cell;
        if (status == "Not Verified") {
            return <Link to={"/users/" + row._id}>Verify
            </Link>
        } else {
            return cell.status;
        }
    }

    renderNotification() {
        let {notificationDialog} = this.state;
        return (
            <Modal show={notificationDialog} onHide={() => this.setState({notificationDialog: false})}>
                <ModalBody>
                    <div className="notification-message">
                        <div className="form-group">
                            <label className="control-label">Message</label>
                            <textarea className="form-control" name="message" placeholder="Message"
                                      value={this.state.message}
                                      onChange={this.updateMessage}></textarea>
                        </div>
                        <FormGroup>
                            <FormCheck type="checkbox" name="confirm" label={"Confirmation Required"}
                                       checked={this.state.confirmation}
                                       onChange={this.updateConfirmation}/>
                        </FormGroup>
                        <div className="form-group">
                            <button className="btn btn-success" onClick={this.sendNotificationToSelectedUsers}>Send to
                                selected
                                users
                            </button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }

    updateConfirmation = (event) => {
        if (event.target.name == "confirm") {
            this.setState({confirmation: event.target.checked});
        }
    }

    updateMessage = (event) => {
        if (event.target.name == "message") {
            this.setState({message: event.target.value});
        }
    }

    sendNotificationToSelectedUsers = () => {
        console.log(this.state.confirmation)
        this.selectedUsers.map((user) => {
            let notification = {};
            notification.message = this.state.message;
            if (this.state.confirmation) {
                notification.type = "confirmation";
            } else {
                notification.type = "default";
            }
            notification.receiver = user;
            console.log(notification)
            ApiAction.sendNotification(notification)
                .then((response) => {
                    if (response.data.success) {
                        console.log("Notification send to " + user.username);
                    } else {
                        console.log(response.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        });
    }

    handleSelectedRowNotification = (row, isSelect, event) => {
        let index = this.selectedUsers.indexOf(row);
        if (isSelect && index < 0) {
            this.selectedUsers.push(row);
        } else if (!isSelect && index >= 0) {
            this.selectedUsers.splice(index, 1);
        }
        console.log(this.selectedUsers);
    }

    handleSelectedRowNormal = (row, isSelect, event) => {
        if (isSelect) {
            this.setState({specificUser: row});
        }
    }

    renderVerifyUser() {
        return (
            <div className="verify-user">
                <Link to={"/users/" + this.state.specificUser.id}>
                    <button className="btn btn-success">Verify User</button>
                </Link>
            </div>
        );
    }
}

export default UserList;