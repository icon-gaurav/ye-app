/*
 * @author Gaurav Kumar    
*/

import React, {Component} from "react";
import {Link} from "react-router-dom";

class CompanyLeftMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="aside-left-nav">
                <Link to="/insights" className="aside-item">
                    <div className="nav-logo">
                        <i className="fas fa-poll"></i>
                    </div>
                    <div className="nav-label">Insights</div>
                </Link>
                <Link to="/profile" className="aside-item">
                    <div className="nav-logo">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="nav-label">Profile</div>
                </Link>
                <Link to="/internships" className="aside-item">
                    <div className="nav-logo">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="nav-label">Internships</div>
                </Link>
                <Link to="/missions" className="aside-item">
                    <div className="nav-logo">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="nav-label">Missions</div>
                </Link>
                <Link to="/settings" className="aside-item mb-0">
                    <div className="nav-logo">
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="nav-label">Setting</div>
                </Link>
                <Link to="javascript:void();" onClick={this.logout} className="aside-item align-content-end">
                    <div className="nav-logo">
                        <i className="fas fa-power-off"></i>
                    </div>
                    <div className="nav-label">Logout</div>
                </Link>
            </aside>
        );
    }
}

export default CompanyLeftMenu;