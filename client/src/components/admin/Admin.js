import React, {Component} from "react"
import Nav from "./Nav"
import {connect} from "react-redux"
import * as actions from "../../actions"


class Admin extends Component {
    componentDidMount() {
        this.props.getAllUsers()
        this.props.getCountry()
    }
    
    render() {
        return (
        <Nav />
        )
    }
}


function mapStateToProps({auth, user, country}) {
    return {auth, user, country}
}
export default connect(mapStateToProps, actions)(Admin)
