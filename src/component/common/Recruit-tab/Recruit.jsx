import React from 'react';
import './Recruit.css';
import {BrowserRouter as Router, NavLink} from "react-router-dom";

const Recruit = () =>{
    let style={ borderBottom:'2px solid black',color:'black' };
    return(
        <Router basename="/recruit">
            <div className="main-container">
                <div className="recruit-navbar">
                    <NavLink style={{flexBasis:'100px'}} exact to="/" activeStyle={style}>NEW(0)</NavLink>
                    <NavLink style={{flexBasis:'200px'}} to="/waitlist" activeStyle={style}>WAITLISTED(0)</NavLink>
                    <NavLink style={{flexBasis:'200px'}} to="/selected" activeStyle={style}>SELECTED(0)</NavLink>
                    <NavLink style={{flexBasis:'200px'}} to="/completed" activeStyle={style}>COMPLETED(0)</NavLink>
                    <NavLink style={{flexBasis:'200px'}} to="/rejected" activeStyle={style}>REJECTED(0)</NavLink>
                </div>
            </div>
        </Router>
    );
};

export default Recruit;