import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router ,Route,NavLink } from 'react-router-dom';
import Tasks from '../Tasks-tab/Tasks';
import Recruit from '../Recruit-tab/Recruit';

const Navbar = () =>{
        return (
            <div className="container">
                <Router basename="/work-report">
                    <div className="navbar">
                        <NavLink exact to="/"  activeStyle={{borderBottom:'2px solid black',color:'black'}}>TASKS</NavLink>
                        <NavLink to="/recruit" activeStyle={{borderBottom:'2px solid black',color:'black'}}>RECRUIT</NavLink>
                    </div>
                    <Route exact path='/' component={ Tasks }/>
                    <Route path='/recruit' component={ Recruit }/>
                </Router>
            </div>
        );
};

export default Navbar;