import {GET_COUNTRY, ADD_COUNTRY, DELETE_COUNTRY, 
  ITEMS_LOADING, UPDATE_COUNTRY, EDIT_COUNTRY, FETCH_USER, GET_USERS, ADD_USER, GET_COUNTRY_BY_NAME } from "./types"
import axios from "axios"

export const getCountry = () => async dispatch => {
  dispatch(setItemsLoading())

  const res =  await axios.get("/api/countries")
  dispatch({type: GET_COUNTRY, payload: res.data})
}

export const getCountryByName = (name) => async dispatch => {

  const res =  await axios.get(`/api/countries/name/${name}`)
  dispatch({type: GET_COUNTRY_BY_NAME, payload: res.data})
}

export const deleteCountry = (id) => dispatch => {
    const res = axios.delete(`/api/countries/${id}`)
    dispatch({type: DELETE_COUNTRY, payload: id})
 }

 export const addCountry = (country) => async dispatch => {
    const res = await axios.post("/api/countries", country)
    dispatch({type: ADD_COUNTRY,payload: res.data})
 }

 export const editCountry = (id, country) => async dispatch => {
    dispatch(setItemsLoading())
    const res = await axios.put(`/api/countries/update`, country)
    dispatch({type: UPDATE_COUNTRY, payload: [id, country]})
 }

 export const setItemsLoading = () => {
     return {
         type: ITEMS_LOADING
     }
 }

 export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
  
    dispatch({ type: FETCH_USER, payload: res.data });
  }

  export const getAllUsers = () => async dispatch => {
    const res = await axios.get('/api/users');
  
    dispatch({ type: GET_USERS, payload: res.data });
  }

  export const addUser = (user) => async dispatch => {
    const res = await axios.post("/api/users", user)
    dispatch({type: ADD_USER,payload: res.data})
 }