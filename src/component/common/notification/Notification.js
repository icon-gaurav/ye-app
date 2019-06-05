/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import "../../../assets/stylesheet/notifications/Notification.css"
import ApiAction from "../../../actions/ApiAction";

class Notification extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let{user,notification} = this.props;
        ApiAction.notificationSeen(notification, user)
            .then((response)=>{
                console.log(response)
                if(response.data.success){
                    console.log("notification seen");
                }else{

                }
            })
            .catch((error)=>{
                console.log(error)
            });
    }

    render() {
        let {notification} = this.props;
        console.log(notification)
        return (
            <div className="main-wrapper p-2">
                <div className="row border position-relative">
                    <div className="category-code"></div>
                    <div className=" col-lg-2 col-sm-3 col-md-3 border-right" align="center">
                        <div className="position-relative">
                        <div className="border rounded-circle image-cover-circle">
                            <div className="time-wrapper">
                                {notification.createdAt.split("T")[1]}
                            </div>
                        </div>

                        </div>
                    </div>
                    <div className="col-lg-10 col-sm-9 col-md-9">
                        <div className="">
                            <div className="">
                                <h6>Message Title</h6>
                            </div>
                            <div className="border-hr"></div>
                            <div className="opacity-50">
                                <p>{notification.message}</p>
                            </div>
                        </div>
                        {notification.type == "confirmation" ?
                            <div className="col-12">
                                <button className="btn m-1 btn-success float-right">Accept</button>
                                <button className="m-1 btn btn-danger float-right">Reject</button>
                            </div>
                            : ""}

                    </div>

                </div>
            </div>
        );
    }
}

export default Notification;