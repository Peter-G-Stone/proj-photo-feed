import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Nav, Navbar} from 'react-bootstrap';
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
                <Navbar.Text className="mx-2"> <Link to="/about">About </Link></Navbar.Text> 
                <Navbar.Text className="mx-2"><Link to="/login">Login </Link></Navbar.Text>
                <Navbar.Text className="mx-2"><Link to="/signup">Sign Up</Link></Navbar.Text>
            </>
        )
      
        const userNav = (
            <>
                    <Navbar.Text className="mx-2"> <Link to="/about">About</Link></Navbar.Text>  
                    <Navbar.Text className="mx-2"><Link to="/saved_pics"> Saved Pics</Link></Navbar.Text> 
                    <Navbar.Text className="mx-2"><Link to="#" onClick={(e) => this.handleLogout(e)}> Log Out</Link></Navbar.Text>
            </>  
            
        );
      
        
        return (
        <>
            <Navbar bg="light" className="mb-4">
                <Navbar.Brand><Link to="/">PicList</Link></Navbar.Brand>
                    <Nav className="mr-auto" >
                        {this.props.isAuthenticated ? userNav : mainNav} 
                    </Nav>
            </Navbar>
            
        </>
        )
    }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation))