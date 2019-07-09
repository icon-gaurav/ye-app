/*
 * @author Gaurav Kumar    
*/

import React, { PureComponent } from "react";
import "./App.css"
import Login from "./component/common/login-module/Login";
import ForgotPassword from "./component/common/login-module/ForgotPassword";
import Registration from "./component/common/signup-module/Registration";
import AuthorizedUser from "./AuthorizedUser";
import ApiAction from "./actions/ApiAction";
import { BrowserRouter, Route } from "react-router-dom";
import StudentRegistration from "./component/common/signup-module/StudentRegistration";
import BusinessRegistration from "./component/common/signup-module/BusinessRegistration";
import IndividualWork from "./component/common/IndividualWork";
import PreLoginHeader from "./component/common/PreLoginHeader"

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            forgotPass: false,
            signUp: false,
            logIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
        }
    }

    componentWillMount() {
        ApiAction.refreshUser()
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    localStorage.setItem("loggedIn", JSON.stringify(true));
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    this.setState({ logIn: true })
                } else {
                    localStorage.removeItem("loggedIn");
                    localStorage.removeItem("user");
                    this.setState({ logIn: false });
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        let { forgotPass, signUp, logIn } = this.state;
        return (

            // logIn ? <AuthorizedUser user={JSON.parse(localStorage.getItem("user")) }/> :
            <div className="d-flex justify-content-center align-items-center bg-white vh-100">
                <BrowserRouter>
                    <Route exact path={"/forgot-password"} component={() => <ForgotPassword />} />
                    <Route exact path={"/register"} component={() => <Registration />} />
                    <Route exact path={"/student-registration"} component={() => <StudentRegistration />} />
                    <Route exact path={"/business-registration"} component={() => <BusinessRegistration />} />
                    <Route path="/internships" component={(props) => (
                        <div style={{ width: "100%" }}>
                            <PreLoginHeader />
                            <div className="indi-work">
                                <IndividualWork {...props} />
                            </div>
                        </div>)} />
                    <Route path="/missions" component={(props) => (
                        <div style={{ width: "100%" }}>
                            <PreLoginHeader />
                            <div className="indi-work">
                                <IndividualWork {...props} />
                            </div>
                        </div>
                    )} />
                    <Route exact path={"/"} component={() => <Login />} />
                    {/* {forgotPass ? <ForgotPassword/> : signUp ? <Registration/> : */}
                    {/*    <Login forgotPassword={() => this.setState({forgotPass: true})}*/}
                    {/*           signUp={() => this.setState({signUp: true})}*/}
                    {/*           logIn={() => this.setState({logIn: true})}/>}*/}
                </BrowserRouter>
            </div>

        );
    }
}

export default App;