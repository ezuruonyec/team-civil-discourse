import React, { Component } from "react"
import * as actions from "../actions"
import PropTypes from "prop-types"
import {connect} from "react-redux"

class deleteMe extends Component{

    componentDidMount() {
        this.props.getCountryByName("Benin")
    }


    render() {
        const {country} = this.props.country

        let names = country.map(({name}) => {
           return <p>{name}</p>
        })

        return (
            <div>
                {names}
            </div>
            
        )
    }
}

function mapStateToProps({country}) {
    return {country}
}

export default connect(mapStateToProps, actions)(deleteMe)