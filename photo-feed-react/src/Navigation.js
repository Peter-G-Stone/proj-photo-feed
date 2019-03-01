import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from './actions/authActions';

class Navigation extends Component {
    
    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout();
        debugger
        this.props.history.push('/')
    }
    

    render() {
        
        

        const mainNav = (
            <ul>
                <li><Link to="/">PicFeed</Link></li>              
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        )
      
        const userNav = (
            <ul>
            <li><Link to="/">PicFeed</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/user_profile">Profile</Link></li>
              <li onClick={(e) => this.handleLogout(e)}>Log Out</li>
            </ul>
        );
      
        
        return (
        <header>
            <nav>
                {this.props.isAuthenticated ? userNav : mainNav}
            </nav>
        </header>
        )
    }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation))