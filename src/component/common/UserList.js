/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../assets/stylesheet/UserList.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationDialog: false
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
            }];
    }

    render() {
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.handleSelectedRow,
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
        return (
            <div className="container-fluid">
                {}
                <div className="notification-button">
                    <button className="btn btn-info"
                            onClick={() => this.setState({notificationDialog: !this.state.notificationDialog})}>Send
                        Notification
                    </button>
                </div>
                {this.state.notificationDialog ? this.renderNotification() : ""}
                <div className="table-responsive">
                    <BootstrapTable data={this.users} striped hover version='4' selectRow={selectRowProp}>
                        <TableHeaderColumn isKey dataField="id"  hidden={true}>ID</TableHeaderColumn>
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

    handleSelectedRow = (row, isSelect, event) => {
        let index=this.selectedUsers.indexOf(row.id);
        if(isSelect && index<0){
            this.selectedUsers.push(row.id);
        }else if(!isSelect && index>=0){
            this.selectedUsers.splice(index,1);
        }

        console.log(this.selectedUsers);
    }
}

export default UserList;