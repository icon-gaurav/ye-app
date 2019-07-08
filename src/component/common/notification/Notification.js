/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import "../../../assets/stylesheet/notifications/Notification.css"
import ApiAction from "../../../actions/ApiAction";

class Notification extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            notification: this.props.notification
        }
    }

    componentDidMount() {
        let {user, notification} = this.props;
        if (notification.status == "NOT SEEN") {
            ApiAction.notificationSeen(notification, user)
                .then((response) => {
                    console.log(response)
                    if (response.data.success) {
                        this.setState({notification: response.data.notification});
                    } else {

                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }

    render() {
        let {notification} = this.state;
        return (
            <div
                className={`${notification.status == "NOT SEEN" ? "not-seen" : "bg-white"} ye-border d-flex position-relative insight-item overflow-hidden`}>
                <div
                    className={`${notification.type == "confirmation" ? "confirmation-msg" : ""} category-code ye-border`}></div>
                <div
                    className="col-1 border-right d-flex align-items-center justify-content-center"
                    align="center">
                    <div>
                        <div>{notification.createdAt.split("T")[1].slice(0, 5)}</div>
                        <div className="opacity-60"
                             style={{fontSize: "12px"}}>{notification.createdAt.split("T")[0]}</div>
                    </div>
                </div>
                <div className="col-11 d-flex align-items-center">
                    <div className="pt-2 pb-2">
                        <div className="">
                            <h6 className="mb-0">Message Title</h6>
                        </div>
                        <div className="opacity-50">
                            <p className="mb-0">{notification.message}</p>
                        </div>
                        {notification.type == "confirmation" && notification.status != "responded" ?
                            <div className="col-11">
                                <button className="btn m-1 btn-success float-right" onClick={this.acceptOffer}>Accept
                                </button>
                                <button className="m-1 btn btn-danger float-right" onClick={this.rejectOffer}>Reject
                                </button>
                            </div>
                            : ""}
                    </div>
                </div>

            </div>
        );
    }

    acceptOffer = () => {
        let {notification} = this.state;
        ApiAction.acceptCompanyOffer(null, notification)
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    notification.status = "responded";
                    this.setState({notification: notification});
                } else {

                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    rejectOffer = () => {
        let {notification} = this.props;
        ApiAction.rejectCompanyOffer(null, notification)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    notification.status = "responded";
                    this.setState({notification: notification});
                } else {

                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default Notification;