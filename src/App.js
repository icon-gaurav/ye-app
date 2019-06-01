import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './component/common/Header';
import Footer from './component/common/Footer';
import PreLoginHeader from './component/common/PreLoginHeader';

import './App.css';
import Registration from "./component/common/signup-module/Registration";
import ListingCard from "./component/common/ListingCard";
import AdminDashboard from "./component/common/business/AdminDashboard";
import StudentDashboard from "./component/common/students/StudentDashboard";
import OfferList from "./component/common/offers/OfferList";
import YEProvider from "./component/utilities/YEProvider";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
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
            gender: "Male",
            role: "STUDENT"
        };
        let admin = {
            username:"admin",
            role:"ADMIN"
        };
    }

    componentDidMount() {
        console.log(localStorage.getItem("user"));
    }

    renderHeader(props) {
        return this.checkUserValidated() ?
            <Header toggleLeftMenu={() => this.setState({leftMenu: !this.state.leftMenu})}/> :
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
            } else {
                return <OfferList/>;
            }
        } else {
            return (
                <>
                    <div>
                        <div className="insight-section">
                            <img src={require("./assets/images/register/register-bg-pattern.svg")} width="100%" height="100%"/>
                        </div>
                        {this.renderFooter()}
                    </div>
                    {/*<StudentDashboard leftMenu={this.state.leftMenu}/>*/}
                </>
            );
        }
    }

    renderFooter(props) {
        return <Footer {...props}/>
    }

    renderHome(props) {
        return <Header/>
    }

    render() {
        return (
            <YEProvider>
                <BrowserRouter>
                    <div className="topHeader sticky-top">
                        <Route render={(props) => this.renderHeader(props)}/>

                        {/*<Route render={(props) => this.renderFooter(props)}/>*/}
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

export default App;
