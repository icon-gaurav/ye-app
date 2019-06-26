import React from 'react';
import './Container.css';
import SignInForm from '../SignInForm/SignInForm';
import RegisterAs from '../RegisterAs/RegisterAs';

class MainContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            clicked:false
        }
    }

    onClickHandler = () =>{
        this.setState({ clicked:!this.state.clicked })
    }

    render(){
        return(
            
                <div className={`container ${ this.state.clicked ? "right-panel-active" : null }`}  id="container">
                        <div className="form-container sign-up-container">
                            <RegisterAs />
                        </div>
                    <SignInForm />
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button onClick={ this.onClickHandler } className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button onClick={ this.onClickHandler } className="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
           
        );
    }
} 

export default MainContainer;