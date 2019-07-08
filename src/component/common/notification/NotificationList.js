/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import Notification from "./Notification";

class NotificationList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let {user} = this.props;
        let notification = this.filterNotification(user.notification);
        return (
            <div className="main-app">
                <div className="header">NOTIFICATIONS</div>
                <div className="ye-border bg-white" style={{padding:"0px 17px 15px 15px"}}>
                    {user.notification.map((not, key) => {
                        return <Notification notification={not} key={key} user={user}/>
                    })}
                </div>
            </div>
        );
    }

    filterNotification(notification) {

    }
}

export default NotificationList;