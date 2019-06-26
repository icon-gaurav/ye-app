import React from 'react';
import './SignInForm.css';


const SignInForm = () =>{
    return (
    <div className="form-container sign-in-container">
        <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
                <a href="#" className="social"><img src="https://img.icons8.com/color/48/000000/facebook-circled.png" /></a>
                <a href="#" className="social"><img src="https://img.icons8.com/color/48/000000/google-logo.png" /></a>
                <a href="#" className="social"><img src="https://img.icons8.com/color/50/000000/linkedin-circled.png" /></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
        </form>
    </div>
    );
}

export default SignInForm;