import React, {PureComponent} from 'react';
import {BrowserRouter} from "react-router-dom";

import Header from './component/common/Header';
import Footer from './component/common/Footer';
import PreLoginHeader from './component/common/PreLoginHeader';

import './App.css';
import AdminDashboard from "./component/common/business/AdminDashboard";
import StudentDashboard from "./component/common/students/StudentDashboard";
import YEProvider from "./component/utilities/YEProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Pusher from "pusher-js";
import ApiAction from "./actions/ApiAction";
import CompanyDashboard from "./component/common/business/CompanyDashboard";

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
            user: JSON.parse(localStorage.getItem("user")),
            leftMenu: false
        };
        console.log(this.state);
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
        ApiAction.refreshUser()
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    localStorage.setItem("loggedIn", JSON.stringify(true));
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    // this.setState({user: response.data.user, loggedIn: true})
                } else {
                    localStorage.removeItem("loggedIn");
                    localStorage.removeItem("user");
                    // this.setState({loggedIn: false, user: null});
                }
            })
            .catch((error) => {
                console.log(error)
            })
        // this.setState({ user: student, loggedIn: true })
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
            <PreLoginHeader loggedIn={this.loggedIn}/>;
        // return <Header {...props}/>
    }

    renderBody() {
        if (this.state.loggedIn) {
            // return this.checkUserValidated() ? <StudentDashboard/> : <StudentDashboard/>;
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
                        <div className="insight-section">
                            <img src={require("./assets/images/register/register-bg-pattern.svg")} width="100%"
                                 height="100%"/>
                        </div>
                        {this.renderFooter()}
                    </div>
                    {/*<StudentDashboard leftMenu={this.state.leftMenu}/>*/}
                </>
            );
        }
    }

    renderFooter(props) {
        return <Footer {...props} />
    }

    renderHome(props) {
        return <Header/>
    }

    render() {
        return (
            <YEProvider>
                <BrowserRouter>
                    <div className="topHeader sticky-top">
                        {this.renderHeader(this.props)}

                        {/*<Route render={(props) => this.renderFooter(props)}/>*/}
                    </div>
                    <div className="belowtop ml-5 mr-5">
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

export default App;
