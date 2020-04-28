import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectRoot } from 'react-formio'

import UserService from '../services/UserService';
import { STAFF_REVIEWER, STAFF_DESIGNER, CLIENT } from '../constants/constants';

const getUserRole = (userRoles) => {
    let role = '';
    if (userRoles.includes(STAFF_REVIEWER)) {
        role = "REVIEWER"
    } else if (userRoles.includes(STAFF_DESIGNER)) {
        role = "DESIGNER"
    } else {
        role = "CLIENT"
    }
    return role;
}

const NavBar = (props) => {
    const { user, userRoles } = props;
    return (
        <header>
            <Navbar className="navbar">
                <section className="container">
                    <Navbar.Brand>
                        <img className="img-fluid d-none d-md-block" src="/AOT-logo.png" width="250" alt="AOT Logo" />
                        <img className="img-fluid d-md-none" src="/AOT-simple-logo.png" width="40" alt="AOT Logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="navbar-nav">
                    
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to='/' style={{ fontSize: '20px', color: '#ffff' }} activeclassname="active">Forms</Nav.Link>
                            {userRoles && userRoles.includes(STAFF_REVIEWER) ?
                                <Nav.Link as={Link} to='/task'  style={{ fontSize: '20px', color: '#ffff' }} activeclassname="active">Tasks</Nav.Link>
                                :
                                null}
                        </Nav>
                        <Nav>
                            <NavDropdown style={{ fontSize: '18px'}} title={<div className="pull-left">
                            Hi {user.given_name ? user.given_name : ''} &nbsp;
                        <img className="thumbnail-image" 
                            src="/assets/Images/user.svg" 
                            alt="user pic"
                        /></div>}  className="nav-dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item><img className="float-right" src="/assets/Images/user.svg" alt="userimage"></img></NavDropdown.Item>
                            <br></br>
                            <NavDropdown.Header className="nav-user-name">{user.name}</NavDropdown.Header>
                            <NavDropdown.Header  className="nav-user-email">{user.email}</NavDropdown.Header>
                            <NavDropdown.Header className="nav-user-role">{getUserRole(userRoles)}</NavDropdown.Header>        
                                <NavDropdown.Divider />
                                <NavDropdown.Header className="nav-logout" onClick={UserService.userLogout}><img src="/assets/Images/logout.svg" />Logout</NavDropdown.Header>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </section>
            </Navbar>
        </header>
    )
};

const mapStatetoProps = (state) => {
    return {
        userRoles: selectRoot('user', state).roles || [],
        user: selectRoot('user', state).userDetail || []
    }
}

export default connect(mapStatetoProps)(NavBar);
