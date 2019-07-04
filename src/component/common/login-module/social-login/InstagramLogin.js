import React from 'react';
import Login from 'react-instagram-login';

import './login.css'
//keys
import { INSTAGRAM_CLIENT_ID } from '../../../../config/keys'

class InstagramLogin extends React.Component {

    responseInstagram = (response) => {
        // Make a POST request to https://api.instagram.com/oauth/access_token
        // Send all the below params in body of the post request
        // client_id = CLIENT_ID
        // client_secret = CLIENT_SECRET
        // grant_type = authorization_code  (grant_type: authorization_code is currently the only supported value)
        // redirect_uri = REDIRECT_URI
        // code = response
        console.log(response);    //response contains the access code
    }

    render() {
        return (
            <Login
                clientId={INSTAGRAM_CLIENT_ID}
                onSuccess={this.responseInstagram}
                onFailure={this.responseInstagram}
                cssClass="ig-login">
                <img src={require("../../../../assets/images/icons/instagram.svg")} alt="Instagram" width="50px" height="50px" />
            </Login>
        )
    }

}

export default InstagramLogin