import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Nav, Navbar} from 'react-bootstrap';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
// import Navbar from 'react-bootstrap/Navbar';
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
                <Nav.Link> <Link to="/about">About </Link></Nav.Link> 
                <Nav.Link><Link to="/login">Login </Link></Nav.Link>
                <Nav.Link><Link to="/signup">Sign Up</Link></Nav.Link>
            </>
        )
      
        const userNav = (
            <>
                    <Nav.Link> <Link to="/about">About</Link></Nav.Link>  
                    <Nav.Link><Link to="/saved_pics"> Saved Pics</Link></Nav.Link> 
                    <Nav.Link><Link to="#" onClick={(e) => this.handleLogout(e)}> Log Out</Link></Nav.Link>
            </>  
            
        );
      
        
        return (
        <>
            <Navbar bg="light">
                    <Navbar.Brand><Link to="/">PicList</Link></Navbar.Brand>
                        
                <Nav className="mr-auto">
                    {this.props.isAuthenticated ? userNav : mainNav} 
                </Nav>
            </Navbar>
            
        </>
        )
    }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation))