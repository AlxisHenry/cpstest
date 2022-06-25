import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import Logo from '../../assets/logo.png'
import './navbar.css'
import {Link} from "react-router-dom";
import React from "react";

export class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                <Navbar
                    expand="lg"
                    dark
                >
                    <NavbarBrand tag="span"
                                 className={"contain-navbar-logo"}>
                        <Link className={"link_navbar"} to={'/'}>
                            <img className="navbar-logo" src={Logo} alt="" width="80px"/>
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        className="me-2"
                        onClick={this.toggleNavbar}
                    />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink tag="span">
                                    <Link className={"link_navbar"} to='/'>
                                        Home
                                    </Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag="span">
                                    <Link className={"link_navbar"} to='/click'>
                                        Click
                                    </Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/AlxisHenry/Click-Test" target="_blank">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }

}

