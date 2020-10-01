import {combineReducers} from "redux"
import countryReducer from "./countryReducer.js"

export default combineReducers({
    country: countryReducer
})