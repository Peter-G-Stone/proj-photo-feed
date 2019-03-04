import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from './actions/authActions';

class Navigation extends Component {
    
    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/')
    }
    

    render() {
        
        

        const mainNav = (
           <>
                <Link to="/">PicList</Link> | 
              <Link to="/about"> About</Link> | 
              <Link to="/login"> Log In</Link> | 
              <Link to="/signup"> Sign Up</Link> 
            </>
        )
      
        const userNav = (
            <>
            <Link to="/">PicList</Link> | 
              <Link to="/about"> About</Link> | 
              <Link to="/saved_pics"> Saved Pics</Link> | 
              <Link to="#" onClick={(e) => this.handleLogout(e)}> Log Out</Link>
            </>
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