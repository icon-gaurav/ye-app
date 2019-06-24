/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import "../../../assets/stylesheet/notifications/Notification.css"
import ApiAction from "../../../actions/ApiAction";

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state={
            notification:this.props.notification
        }
    }

    componentDidMount() {
        let {user, notification} = this.props;
        if (notification.status == "NOT SEEN") {
            ApiAction.notificationSeen(notification, user)
                .then((response) => {
                    console.log(response)
                    if (response.data.success) {
                        this.setState({notification:response.data.notification});
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
            <div className="main-wrapper p-2 row border position-relative">
                <div
                    className={notification.type == "confirmation" ? "confirmation-msg category-code" : "category-code"}></div>
                <div
                    className=" col-lg-2 col-sm-2 col-md-2 border-right d-flex align-items-center justify-content-center"
                    align="center">
                    {notification.createdAt.split("T")[1].slice(0, 5)}
                </div>
                <div className="col-lg-10 col-sm-10 col-md-10">
                    <div className="">
                        <div className="">
                            <h6>Message Title</h6>
                        </div>
                        <div className="border-hr"></div>
                        <div className="opacity-50">
                            <p>{notification.message}</p>
                        </div>
                    </div>
                    {notification.type == "confirmation" && notification.status != "responded" ?
                        <div className="col-12">
                            <button className="btn m-1 btn-success float-right" onClick={this.acceptOffer}>Accept
                            </button>
                            <button className="m-1 btn btn-danger float-right" onClick={this.rejectOffer}>Reject
                            </button>
                        </div>
                        : ""}
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
                    this.setState({notification:notification});
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
                    this.setState({notification:notification});
                } else {

                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default Notification;