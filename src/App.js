import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './component/common/Header';
import Footer from './component/common/Footer';
import PreLoginHeader from './component/common/PreLoginHeader';

import './App.css';
import Registration from "./component/common/signup-module/Registration";
import ListingCard from "./component/common/ListingCard";
import AdminDashboard from "./component/common/AdminDashboard";
import StudentDashboard from "./component/common/StudentDashboard";
import OfferList from "./component/common/OfferList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
            user: JSON.parse(localStorage.getItem("user"))
        };
        console.log(this.state);
    }

    componentWillMount() {
        console.log("before fully reload");
    }

    componentDidMount() {
        console.log("after reload");
        console.log(localStorage.getItem("user"));
    }

    renderHeader(props) {
        return this.checkUserValidated() ? <Header/> :
            <PreLoginHeader loggedIn={this.loggedIn}/>;
        // return <Header {...props}/>
    }

    renderBody() {
        if (this.state.loggedIn) {
            // return this.checkUserValidated() ? <AdminDashboard/> : <StudentDashboard/>;
            if (this.state.user.role == "ADMIN") {
                return <AdminDashboard/>
            } else if (this.state.user.role == "STUDENT") {
                return <StudentDashboard/>
            } else {
                return <OfferList/>;
            }
        } else {
            return (
                <div>
                    <OfferList/>
                    this.renderFooter();
                </div>
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
            <BrowserRouter>
                <div className="topHeader sticky-top">
                    <Route render={(props) => this.renderHeader(props)}/>

                    {/*<Route render={(props) => this.renderFooter(props)}/>*/}
                </div>
                <div className="belowtop">
                    {this.renderBody()}
                </div>
            </BrowserRouter>

        );
    }

    checkUserValidated() {
        return this.state.loggedIn;
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
