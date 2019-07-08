/*
 * @author Gaurav Kumar    
*/

import React from 'react';
import Login from 'react-facebook-login/dist/facebook-login-render-props';
import Config from "../../../../config";

class FacebookSignIn extends React.Component {
    responseFacebook = (response) => {
        console.log(response);
    }

    render() {
        return (
            <Login
                appId={Config.FACEBOOK_CLIENT_ID}
                autoLoad
                callback={this.responseFacebook}
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="facebook-login">
                        <img src={require('../../../../assets/images/icons/facebook.svg')} alt="Facebook" width="50px" height="50px" />
                    </button>
                )}
            />
        )
    }

}

export default FacebookSignIn;
