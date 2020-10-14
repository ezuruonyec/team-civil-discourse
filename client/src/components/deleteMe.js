// import React, { Component } from "react"
// import {getCountry} from "../actions/countryActions"
// import PropTypes from "prop-types"
// import {connect} from "react-redux"

// class deleteMe extends Component{


//     componentDidMount() {
//         this.props.getCountry()
//     }

//     render() {
//         const {countries} = this.props.country

//         let names = countries.map(({name}) => {
//            return <p>{name}</p>
//         })

//         return (
//             <div>
//                 {names}
//             </div>
            
//         )
//     }
// }

// deleteMe.propTypes = {
//     getCountry: PropTypes.func.isRequired,
//     country: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     country: state.country
// })


// export default connect(mapStateToProps, {getCountry})(deleteMe)