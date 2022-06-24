import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import './navbar.css'

const Navigation = () => {
    return (
        <div>
            <Navbar
                className={"navbar"}
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    Click
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


export default Navigation
