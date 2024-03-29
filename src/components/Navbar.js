/**
 * React
 */
import { Navbar as ReactNavbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";

/**
 * Assets
 */
import AppLogo from '../assets/logo.png'

/**
 * Component : Navbar
 */
export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            targeted: false
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const Navbar_Css = {
            minHeight: '100px',
            fontSize: '24px'
        }
        const Logo_Css = {
            color: 'white',
            transform: 'rotateZ(-20deg)'
        }
        const Links_Css = {
            textDecoration: 'none',
            color: 'inherit',
            "&:hover": {
                color: 'inherit',
            },
        }
        return (
            <div>
                <ReactNavbar
                    expand="lg"
                    dark
                    style={Navbar_Css}
                >
                    <NavbarBrand tag="span"
                                 className={"contain-navbar-logo"}>
                        <Link className={"link_navbar"} to={'/'} style={Links_Css}>
                            <img className="navbar-logo" src={AppLogo} style={Logo_Css} alt="" width="80px"/>
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
                                    <Link className={"link_navbar"} style={Links_Css} to='/'>
                                        Home
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
                </ReactNavbar>
            </div>
        )
    }

}

