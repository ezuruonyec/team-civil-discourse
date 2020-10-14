import {combineReducers} from "redux"
import countryReducer from "./countryReducer"
import authReducer from "./authReducer"
import userReducer from "./userReducer"

export default combineReducers({
    country: countryReducer,
    auth: authReducer,
    user: userReducer
})