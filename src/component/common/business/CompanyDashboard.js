/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Insights from "./insights/Insights";
import WorkList from "./works/WorkList";
import IndividualWork from "../IndividualWork";
import HelpCenter from "../HelpCenter";
import LeftMenu from "./leftmenu/CompanyLeftMenu";
import NotificationList from "../notification/NotificationList";
import Verification from "../students/settings/Verification";
import CompanyProfile from "./profile/CompanyProfile";
import Header from "../Header";
import CompanyInsights from "./insights/CompanyInsights";

class CompanyDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftMenuStyle: {marginLeft: "0px"}
        }
        console.log(this.props)
    }

    componentWillMount() {
        if (window.innerWidth < 576) {
            this.setState({leftMenuStyle: {marginLeft: "0px"}, opacity: {opacity: 0.5}});
        } else {
            this.setState({leftMenuStyle: {marginLeft: "113px"}});
        }
        window.addEventListener("resize", this.resizeWindowHandler);
    }

    resizeWindowHandler = () => {
        if (window.innerWidth < 576) {
            this.setState({leftMenuStyle: {marginLeft: "0px"}});
        } else {
            this.setState({leftMenuStyle: {marginLeft: "113px"}});
        }
    }

    render() {
        return (
            <div>
                <div className="aside-left-menu" style={this.props.leftMenu ? {display: "block"} : {display: "none"}}>
                    {this.props.leftMenu ? <LeftMenu/> : ""}
                </div>
                <div className="main-app" style={this.props.leftMenu ? this.state.leftMenuStyle : {marginLeft: "0px"}}>
                    <header className="main-head"></header>
                    <Route path="/home" component={CompanyInsights}/>
                    <Route exact path="/profile" component={() => <CompanyProfile user={this.props.user}/>}/>
                    <Route exact path="/internships"
                           component={() => <WorkList work={"internship"} user={this.props.user}/>}/>
                    <Route path="/internships/:id" component={(props) => <IndividualWork {...props}/>}/>
                    <Route exact path="/missions"
                           component={() => <WorkList work={"mission"} user={this.props.user}/>}/>
                    <Route exact path="/notifications" component={() => <NotificationList
                        user={this.props.user}/>}/>
                    <Route exact path="/settings" component={() => <Verification user={this.props.user}/>}/>
                    <Route exct path="/help-center" component={HelpCenter}/>
                </div>
            </div>
        );
    }
}

export default CompanyDashboard;