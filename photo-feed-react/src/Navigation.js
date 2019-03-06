import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import { logout } from './actions/authActions';
import "./App.css"


class Navigation extends Component {
    
    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/')
    }
    

    render() {
        
        

        const mainNav = (
            <>
                <NavItem> <Link to="/about">About</Link></NavItem> 
                <NavItem><Link to="/login">Login</Link></NavItem>
                <NavItem><Link to="/signup">Sign Up</Link></NavItem>
            </>
        )
      
        const userNav = (
            <>
                    <NavItem> <Link to="/about">About</Link></NavItem> 
                    <NavItem><Link to="/saved_pics"> Saved Pics</Link></NavItem>
                    <NavItem><Link to="#" onClick={(e) => this.handleLogout(e)}> Log Out</Link></NavItem>
              </>  
        );
      
        
        return (
        <>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">PicList</Link> 
                    </Navbar.Brand>
                        
                </Navbar.Header>      
                <Navbar.Collapse>
                <Nav>
                    {this.props.isAuthenticated ? userNav : mainNav} 
                </Nav>
                </Navbar.Collapse>         
            </Navbar>
            
        </>
        )
    }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation))