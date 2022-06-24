import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import Logo from '../../assets/logo.png'
import './navbar.css'

const Navigation = () => {
    return (
            <Navbar
                className={"navbar"}
                color="dark"
                expand="md"
                dark
            >
                <NavbarBrand
                    className={"contain-navbar-logo"}
                    href="/">
                    <img className="navbar-logo" src={Logo} alt="" width="80px"/>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/click">
                                Click
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


export default Navigation
