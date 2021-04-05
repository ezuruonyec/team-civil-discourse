import { GET_COUNTRY, ITEMS_LOADING, GET_COUNTRY_BY_NAME } from "../actions/types"
const initialState = {
    countries: [],
    loading: false,
    country: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRY:
            return {
                ...state,
                countries: action.payload,
                loading: false,
                country: []
            }
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                loading: false,
                country: [action.payload]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: {
            return state
        }
    }
}