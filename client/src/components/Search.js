import React, {useEffect, useState} from "react"
import { useParams } from "react-router";
import Country from "./Country";
import Header from "./Header"
import axios from "axios"
import {connect} from "react-redux"
import * as actions from "../actions"

function Search() {
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([null])

    // search term from URI parameter /search/:term
    let {term} = useParams()
    
    useEffect(() => {
       axios.get(`/api/countries/name/${term}`)
        .then(res => setResults([res.data]))
        .then(setLoading(false))
    },[term])    

    return (
        <div>
            <Header currentTerm={term} />
            { 
                loading ? 
                    // still loading 
                    "searching...." 
                        : 
                    // loading is complete
                    // check if term is valid
                    results[0] === null ? 
                        // invalid search term. Not a country
                        <h1>Not found: {term} </h1> 
                            :
                        // valid search term. Country was found, display Country Component
                        results.map((item) => <Country 
                            key={item._id} 
                            name={item.name} 
                            population={item.population} 
                            code={item.code}
                            millenium_dec={item.millenium_dec}
                            free_speech={item.freedom_speech}
                            free_media={item.freedom_media}
                            fake_news={item.fake_news}
                            internet_access={item.internet_access}
                            censorship_level={item.censorship_level}
                        />)  
            }  
        </div>
    )
}

function mapStateToProps({country}) {
    return {country}
  }
  
  export default connect(mapStateToProps, actions)(Search)