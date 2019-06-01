/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../../../assets/stylesheet/UserList.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import {Link} from "react-router-dom";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationDialog: false,
            users: [],
            specificUser: null
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
        this.setState({users: this.users});
    }

    render() {
        const selectRowPropForNotification = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.handleSelectedRowNotification,
            bgColor: function (row, isSelect) {
                if (isSelect) {
                    const {role} = row;
                    if ('student' == role) {
                        return 'blue';
                    } else if ('company' == role) {
                        return 'red';
                    } else {
                        return 'pink';
                    }
                }
                return null;
            },
        };
        const selectRowPropNormal = {
            mode: "radio",
            clickToSelect: true,
            onSelect: this.handleSelectedRowNormal,
            bgColor: function (row, isSelect) {
                if (isSelect) {
                    const {role} = row;
                    if ('student' == role) {
                        return 'blue';
                    } else if ('company' == role) {
                        return 'red';
                    } else {
                        return 'pink';
                    }
                }
                return null;
            },
        };
        let {users, notificationDialog, specificUser} = this.state;
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
                    <BootstrapTable data={users} striped hover version='4'
                                    selectRow={notificationDialog ? selectRowPropForNotification : selectRowPropNormal}>
                        <TableHeaderColumn isKey dataField="id" hidden={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="username">Username</TableHeaderColumn>
                        <TableHeaderColumn dataField="fullname">Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="mobile">Mobile</TableHeaderColumn>
                        <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
                        <TableHeaderColumn dataField="status">Status</TableHeaderColumn>
                        <TableHeaderColumn dataField="role">Role</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }

    renderNotification() {
        return (
            <div className="notification-message">
                <div className="form-group">
                    <label className="control-label">Message</label>
                    <textarea className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" onClick={this.sendNotificationToSelectedUsers}>Send to selected
                        users
                    </button>
                </div>
            </div>
        );
    }

    sendNotificationToSelectedUsers() {
        // console.log(rows);
    }

    handleSelectedRowNotification = (row, isSelect, event) => {
        let index = this.selectedUsers.indexOf(row.id);
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
                <Link to={"/users/"+this.state.specificUser.id}>
                    <button className="btn btn-success">Verify User</button>
                </Link>
            </div>
        );
    }
}

export default UserList;