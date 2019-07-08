/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react'
import {LinkedIn as Login} from 'react-linkedin-login-oauth2'
import Config from "../../../../config";

class LinkedInSignIn extends Component {

    responseLinkedin = (response) => {
        console.log(response)
    }

    render() {

        return (
            <Login
                clientId={Config.LINKEDIN_CLIENT_ID}
                redirectUri="http://localhost:3001/"
                onFailure={this.responseLinkedin}
                onSuccess={this.responseLinkedin}
            >
                <img src={require('../../../../assets/images/icons/linkedin.svg')} alt="LinkedIn" width="50px"
                     height="50px"/>
            </Login>
        )
    }
}

export default LinkedInSignIn;