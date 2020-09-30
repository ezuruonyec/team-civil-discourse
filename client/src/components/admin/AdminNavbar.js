import React, {useState} from "react"
import {Collapse, Navbar, Nav, NavItem, NavLink, Container, NavbarBrand, NavbarToggler} from "reactstrap"

const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/admin">Admin Dashboard</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        {/* <Nav className="ml-auto">
                            <NavItem>
                                <NavLink href="http://google.com">Google</NavLink>
                            </NavItem>
                        </Nav> */}
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AdminNavbar