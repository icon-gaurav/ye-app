/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import '../../assets/stylesheet/IndividualWork.css';


class IndividualWork extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <header className="main-head">Header</header>
                <div className="internship-detail container-fluid">
                    <div className="item work-meta">
                        <div className="header row">
                            <div className="logo-wrapper">
                                <div className="img-wrapper rounded">
                                    <img src="../images/logo.JPG" width="200" height="50"/>
                                </div>
                            </div>
                            <div className="work-profile">
                                <div className="profile">
                                    <h5>Web profile</h5>
                                </div>
                                <div className="company">
                                    <span>Young Engine</span>
                                </div>
                            </div>
                        </div>
                        <div className="work-specs">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Start Date</th>
                                        <th>Duration</th>
                                        <th>Stipend</th>
                                        <th>Work Location</th>
                                        <th>Last Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Date</td>
                                        <td>6 months</td>
                                        <td>12345</td>
                                        <td>Home</td>
                                        <td>Date</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="work-details">
                        <div className="about-the-program">
                            <h4>About the program</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                        <div className="about-company">
                            <h4>About Company</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                        <div className="skiils">
                            <h4>Skills</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                        <div className="reward-and-benefit">
                            <h4>Reward and benefits</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                        <div className="selection-procedure">
                            <h4>Selection procedure</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                    <div className="apply-section">
                        <button className="btn-success btn">Apply Now</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndividualWork;