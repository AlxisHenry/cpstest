import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import Logo from '../../assets/logo.png'
import './navbar.css'
import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
            <Navbar
                className={"navbar"}
                color="dark"
                expand="md"
                dark
            >
                <NavbarBrand
                    className={"contain-navbar-logo"}>
                    <Link className={"link_navbar"} to={'/'}>
                        <img className="navbar-logo" src={Logo} alt="" width="80px"/>
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink>
                                <Link className={"link_navbar"} to='/'>
                                    Home
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
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
    )
}