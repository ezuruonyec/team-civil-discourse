import {GET_COUNTRY, ADD_COUNTRY, DELETE_COUNTRY, ITEMS_LOADING, UPDATE_COUNTRY, EDIT_COUNTRY } from "./types"
import axios from "axios"

export const getCountry = () => dispatch => {
  dispatch(setItemsLoading())
  axios.get("/api/countries")
    .then(res => dispatch({
        type: GET_COUNTRY,
        payload: res.data
    }))
}

export const deleteCountry = (id) => dispatch => {
    axios.delete(`/api/countries/${id}`)
        .then(res => dispatch({
            type: DELETE_COUNTRY,
            payload: id
        }))
 }

 export const addCountry = (country) => dispatch => {
    axios.post("/api/countries", country)
        .then(res => dispatch({
            type: ADD_COUNTRY,
            payload: res.data
        }))
 }

 export const editCountry = (id) => dispatch => {
    axios.put(`/api/countries/update/${id}`)
        .then(res => dispatch({
            type: UPDATE_COUNTRY,
            payload:[id, res.data]
        }))
 }

 export const setItemsLoading = () => {
     return {
         type: ITEMS_LOADING
     }
 }