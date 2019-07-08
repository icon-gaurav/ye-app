import React, {PureComponent} from 'react';
import {BrowserRouter} from "react-router-dom";

import Header from './component/common/Header';
import Footer from './component/common/Footer';

import './App.css';
import AdminDashboard from "./component/common/business/AdminDashboard";
import StudentDashboard from "./component/common/students/StudentDashboard";
import YEProvider from "./component/utilities/YEProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Pusher from "pusher-js";
import CompanyDashboard from "./component/common/business/CompanyDashboard";

class AuthorizedUser extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
            user: JSON.parse(localStorage.getItem("user")),
            leftMenu: false
        };
    }

    componentWillMount() {
        let student = {
            username: "username",
            name: {
                first: "first name",
                last: "last name"
            },
            dob: new Date(),
            notification: [],
            gender: "Male",
            role: "STUDENT",
            rating: [],
            contact: {
                mobile: 324654,
                email: "erggiu@bivre.vjoir",
                address: {
                    city: "hfhifh",
                    state: "eofr",
                    country: "India"
                }
            },
            summary: {
                aboutMe: "her is avour iurehf",
                website: "kjeb.co"
            },
            experience: [],
            education: [],
            certificates: [],
            skills: [],

        };
        let admin = {
            username: "admin",
            role: "ADMIN"
        };
    }

    componentDidMount() {
        const pusher = new Pusher('edff15616de5a834d2f3', {
            cluster: 'ap2',
            forceTLS: true
        });
        const channel = pusher.subscribe('notifications');
        channel.bind('notice', (data) => {
            this.addNotifications(data);
        });
    }

    addNotifications = (data) => {
        let {user} = this.state;
        if (data.user == user._id) {
            user.notification.push(data.notification);
            this.setState({user: user});
        } else {
            console.log(data);
        }
    }

    renderHeader(props) {
        return this.checkUserValidated() ?
            <Header toggleLeftMenu={() => this.setState({leftMenu: !this.state.leftMenu})} user={this.state.user}
                    addNotification={this.addNotifications}/> :
            "";
    }

    renderBody() {
        if (this.state.loggedIn) {
            if (this.state.user.role == "ADMIN") {
                return <AdminDashboard leftMenu={this.state.leftMenu} user={this.state.user}/>
            } else if (this.state.user.role == "STUDENT") {
                return <StudentDashboard leftMenu={this.state.leftMenu} user={this.state.user}/>
            } else if (this.state.user.role == "COMPANY") {
                return <CompanyDashboard leftMenu={this.state.leftMenu} user={this.state.user}/>
            } else {
                return "";
            }
        } else {
            return (
                <>
                    <div>
                    </div>
                </>
            );
        }
    }

    renderFooter(props) {
        return <Footer {...props} />
    }

    render() {
        return (
            <YEProvider>
                <BrowserRouter>
                    <div className="topHeader sticky-top bg-white">
                        {this.renderHeader(this.props)}
                    </div>
                    <div className="belowtop">
                        {this.renderBody()}
                    </div>
                </BrowserRouter>
            </YEProvider>
        );
    }

    checkUserValidated() {
        return this.state.loggedIn;
        // return true;
    }

    toggleLeftMenu = () => {
        this.leftMenuExpand = !this.leftMenuExpand;
    }

    loggedIn = (user) => {
        this.setState({loggedIn: true, user: user});
    }

    loggedOut = () => {
        this.setState({loggedIn: false});
    }


}

export default AuthorizedUser;
