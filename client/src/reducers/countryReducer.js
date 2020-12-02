import {GET_COUNTRY, ADD_COUNTRY, DELETE_COUNTRY, ITEMS_LOADING, UPDATE_COUNTRY, GET_COUNTRY_BY_NAME} from "../actions/types"
const initialState = {
    countries: [],
    loading: false,
    country: []
}
export default function(state = initialState, action){
    switch(action.type){
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
        case DELETE_COUNTRY:
            return{
                ...state,
                countries: state.countries.filter(country => country._id !== action.payload)
            }
        case ADD_COUNTRY:
            return {
                ...state,
                countries: [action.payload, ...state.countries],
                loading: false
            }
           
        case UPDATE_COUNTRY:
            //const updateCountry = state.countries.map(country => country._id === action.payload[0])
            //const updateCountry = action.payload[1]
            const id = action.payload[0]
            const updatedCountry = state.countries.filter(country => country._id === id)
            
            updatedCountry.map(item => {
                item.name = action.payload[1].name
                item.code = action.payload[1].code
                item.population = action.payload[1].population
                item.millenium_dec = action.payload[1].millenium_dec
                item.freedom_speech = action.payload[1].freedom_speech
                item.freedom_media = action.payload[1].freedom_media
                item.rwb_ranking = action.payload[1].rwb_ranking
                item.rwb_score = action.payload[1].rwb_score
                item.fake_news = action.payload[1].fake_news
                item.fn_desc = action.payload[1].fn_desc
                item.fn_year = action.payload[1].fn_year
                item.fn_prosecution = action.payload[1].fn_prosecution
                item.internet_access = action.payload[1].internet_access
                item.censorship_level = action.payload[1].censorship_level
                item.poverty_level = action.payload[1].poverty_level
                item.cd_rating = action.payload[1].cd_rating
                item.sources = action.payload[1].sources
            })

          
           return {
            ...state,
            countries: [...state.countries.filter(country => country._id !== action.payload[0])],
            loading: false
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