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
            user.notification.reverse().map((not, key) => {
                return <Notification notification={not} key={key} user={user}/>
            })
        );
    }

    filterNotification(notification){

    }
}

export default NotificationList;