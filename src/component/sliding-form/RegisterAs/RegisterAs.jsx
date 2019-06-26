import React from 'react';
import { NavLink } from 'react-router-dom';
import './RegisterAs.css';
import business from '../../../assets/images/register/student-avatar.png';
import student from '../../../assets/images/register/company-avatar.png';


const RegisterAs =() => {

        return(
            <div className="register">
                <div>
                    <h1 className="heading">
                        REGISTER AS
                    </h1>
                </div>
                <div style={{ marginTop:'50px',marginBottom:'10px'}}>
                    <NavLink to="/student-registration" >
                        <input type="radio" value="student" name="emotion" id="sad" className="input-hidden" />
                        <label htmlFor="sad">
                        <img src={ student } alt="I'm a student" />
                        <h2 style={{ color:'black',fontWeight:'bold'}}>Student</h2>
                        </label>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/business-registration" >
                        <input type="radio" name="emotion" value="business" id="happy" className="input-hidden" />
                        <label htmlFor="happy">
                        <img src={ business } alt="It's for Business" />
                        <h2 style={{ color:'black',fontWeight:'bold'}}>Business</h2>
                        </label>
                    </NavLink>    
                </div>
            </div>
        );
    }

export default RegisterAs;