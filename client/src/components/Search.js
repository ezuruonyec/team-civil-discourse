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
    // TODO
    useEffect(() => {
       axios.get(`/api/countries/name/${term}`)
        .then(res => setResults([res.data]))
        .then(setLoading(false))
    },[term])    
    // TODO
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
                        results.map((item) => <Country // TODO
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
			                article_array={item.article_array}
                            article_array1={item.article_array1}
                            article_1_title={item.article_1_title}
                            article_1_author={item.article_1_author}
                            article_1_description={item.article_1_description}
                            article_1_date={item.article_1_date}
                            article_1_source={item.article_1_source}
                            article_1_url={item.article_1_url}
                            article_2_title={item.article_2_title}
                            article_2_author={item.article_2_author}
                            article_2_description={item.article_2_description}
                            article_2_date={item.article_2_date}
                            article_2_source={item.article_2_source}
                            article_2_url={item.article_2_url}
                            article_3_title={item.article_3_title}
                            article_3_author={item.article_3_author}
                            article_3_description={item.article_3_description}
                            article_3_date={item.article_3_date}
                            article_3_source={item.article_3_source}
                            article_3_url={item.article_3_url}
                            article_4_title={item.article_4_title}
                            article_4_author={item.article_4_author}
                            article_4_description={item.article_4_description}
                            article_4_date={item.article_4_date}
                            article_4_source={item.article_4_source}
                            article_4_url={item.article_4_url}
                            article_5_title={item.article_5_title}
                            article_5_author={item.article_5_author}
                            article_5_description={item.article_5_description}
                            article_5_date={item.article_5_date}
                            article_5_source={item.article_5_source}
                            article_5_url={item.article_5_url}
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
