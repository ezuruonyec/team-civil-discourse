import React, {Component} from "react"
import {Navbar, Container, NavbarBrand} from "reactstrap"
import AdminCountryList from "./AdminCountryList"
import AdminCountryModal from "./AdminCountryModal"
import AdminNavbar from "./AdminNavbar"

class Admin extends Component {
    
render() {
    return (
        <div>
            <AdminNavbar />
            <Container>
                <AdminCountryModal />
                <AdminCountryList />
            </Container>
        </div>
    )
}
    
}
export default Admin