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
                            two_digit={item.two_digit}
                            three_digit={item.three_digit}
                            population={item.population}
                            millenium_dec_ranking={item.millenium_dec_ranking}
                            millenium_dec_ratified={item.millenium_dec_ratified}
                            millenium_dec_year={item.millenium_dec_year}
                            rwb_rank={item.rwb_ranking}
                            rwb_score={item.rwb_score}
                            internet_access={item.internet_access}
                            internet_access_ranking={item.internet_access_ranking}
                            internet_access_year={item.internet_access_year}
                            censorship_level={item.censorship_level}
                            censorship_ranking={item.censorship_ranking}
                            cd_rating={item.cd_rating}
                            cd_ranking={item.cd_ranking}
                            poverty_level={item.poverty_level}
			    article_array1={item.article_array1}
                            // free_speech={item.freedom_speech}
                            // free_media={item.freedom_media}
                            // fake_news={item.fake_news}
                        />)  
            }  
        </div>
    )
}

function mapStateToProps({country}) {
    return {country}
  }
  
  export default connect(mapStateToProps, actions)(Search)
