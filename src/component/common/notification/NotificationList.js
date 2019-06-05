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
        return (
            user.notification.map((not, key) => {
                return <Notification notification={not} key={key} user={user}/>
            })
        );
    }
}

export default NotificationList;