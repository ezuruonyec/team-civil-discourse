import React, {Component} from "react"
import Sidebar from "./Sidebar"
import {connect} from "react-redux"
import * as actions from "../../actions"


class Admin extends Component {
    componentDidMount() {
        this.props.getAllUsers()
    }
    
    render() {
        return (
        <Sidebar />
        )
    }
}


function mapStateToProps({auth, user}) {
    return {auth, user}
}
export default connect(mapStateToProps, actions)(Admin)
