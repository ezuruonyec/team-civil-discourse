import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import Country from "./Country";
import Header from "./Header"
import axios from "axios"
import { connect } from "react-redux"
import * as actions from "../actions"

function Search() {
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([null])

    // search term from URI parameter /search/:term
    let { term } = useParams()

    // TODO - Update News Articles Lambda functions to take in Country NAME rather than CODE
    async function getCountryByName(countryName) {
        try {
            // Create the request URLs
            let attributesRequestURL = 'https://h5kxmgz3lc.execute-api.us-east-1.amazonaws.com/development/CivilDiscourseMap-GetAttributesByName?CountryName=' + countryName;
            // let articlesRequestURL = 'https://h5kxmgz3lc.execute-api.us-east-1.amazonaws.com/development/CivilDiscourseMap-GetNewsByName?CountryName=' + countryName;

            // Start both of our requests
            var attributesHandler = axios.get(attributesRequestURL);
            // var articlesHandler = axios.get(articlesRequestURL);

            // Await both of our handlers we just initiated
            const attributes = await attributesHandler;
            // const articles = await articlesHandler;

            // Construct our results data to be both the attributes and news data
            const mergedResponse = attributes.data /* + articles.data */;

            // Update our state
            setResults(mergedResponse);
            setLoading(false);
            return
        } catch (error) {
            console.log(error);
            console.log(error.response);
        }
    }

    useEffect(() => { getCountryByName(term); }, [term])

    return (
        <div>
            <Header currentTerm={term} />
            {
                loading ?
                    // still loading 
                    "Searching...."
                    :
                    // loading is complete
                    // check if term is valid
                    results === null || results === undefined ?
                        // invalid search term. Not a country
                        <h1>Not found: {term} </h1>
                        :
                        // valid search term. Country was found, display Country Component

                        <Country
                            // key={item._id}
                            name={results['CountryName']}
                            two_digit={results['CountryCode']}
                            // three_digit={item.three_digit}
                            population={results['Population']}
                            // millenium_dec_ranking={item.millenium_dec_ranking}
                            millenium_dec_ratified={results['MilleniumDeclarationRatified']}
                            millenium_dec_year={results['MilleniumDeclarationYear']}
                            rwb_rank={results['RwbRank']}
                            rwb_score={results['RwbScore']}
                            internet_access={results['InternetAccessPercent']}
                            internet_access_ranking={results['InternetAccessRank']}
                            internet_access_year={results['InternetAccessYear']}
                            censorship_level={results['CensorshipLevel']}
                            censorship_ranking={results['CensorshipRank']}
                            cd_rating={results['DiscourseRating']}
                            cd_ranking={results['DiscourseRanking']}
                        // TODO  
                        /*            article_array={item.article_array}
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
        
                                    article_5_url={item.article_5_url}*/

                        // free_speech={item.freedom_speech}
                        // free_media={item.freedom_media}
                        // fake_news={item.fake_news}
                        />
            }
        </div>
    )
}

function mapStateToProps({ country }) {
    return { country }
}

export default connect(mapStateToProps, actions)(Search)
