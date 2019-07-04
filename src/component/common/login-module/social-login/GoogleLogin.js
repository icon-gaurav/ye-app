import React from 'react'
import Login from 'react-google-login'

//keys
import { GOOGLE_CLIENT_ID } from '../../../../config/keys'
import "./login.css"

class GoogleSignin extends React.Component {

    responseGoogle = (response) => {
        // Make a GET request to 
        // https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={response.tokenId}
        console.log(response);  //response.tokenId contains the id_token
    }

    render() {
        return (
            <Login
                clientId={GOOGLE_CLIENT_ID}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="google-login">
                        <img src={require("../../../../assets/images/icons/google-plus.svg")} alt="Google Plus" height="50px" width="50px" />
                    </button>
                )}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        )
    }
}

export default GoogleSignin