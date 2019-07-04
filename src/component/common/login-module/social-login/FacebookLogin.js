import React from 'react';
import Login from 'react-facebook-login/dist/facebook-login-render-props'

//keys
import { FACEBOOK_CLIENT_ID } from '../../../../config/keys'
import "./login.css"

class FacebookSignin extends React.Component {
    responseFacebook = (response) => {
        console.log(response);
    }

    render() {
        return (
            <Login
                appId={FACEBOOK_CLIENT_ID}
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

export default FacebookSignin
