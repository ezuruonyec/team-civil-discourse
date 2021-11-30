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

    async function getCountryByName(countryName) {
        try {
            // Create the request URLs
	    //DEV 
             //let attributesRequestURL = 'https://3iixzbu86i.execute-api.us-east-1.amazonaws.com/Dev-CivilDiscourseMap-GetAttributesByName?CountryName=' + countryName;
             //let articlesRequestURL = 'https://3iixzbu86i.execute-api.us-east-1.amazonaws.com/Dev-CivilDiscourseMap-GetNewsByName?CountryName=' + countryName;

            // PROD 
	    let attributesRequestURL = 'https://3iixzbu86i.execute-api.us-east-1.amazonaws.com/Prod-CivilDiscourseMap-GetAttributesByName?CountryName=' + countryName
	    let articlesRequestURL = 'https://3iixzbu86i.execute-api.us-east-1.amazonaws.com/Prod-CivilDiscourseMap-GetNewsByName?CountryName=' + countryName  
            // Start both of our requests
            var attributesHandler = axios.get(attributesRequestURL);
            var articlesHandler = axios.get(articlesRequestURL);

            // Await both of our handlers we just initiated
            const attributes = await attributesHandler;
            const articles = await articlesHandler;

            // Construct our results data to be both the attributes and news data
            const mergedResponse = Object.assign(attributes.data, articles.data)

            // Update our state
            setResults(mergedResponse);
            setLoading(false);

            return
        } catch (error) {
            setLoading(false);
            alert(`Sorry, but detailed metrics for ${term} are not currently available.`);
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
                    <h2>Loading . . . </h2>
                    :
                    // loading is complete
                    // check if term is valid
                    results === null || results === undefined ?
                        // invalid search term. Not a country
                        <h1>Not found: {term} </h1>
                        :
                        // valid search term. Country was found, display Country Component

                        results['articles'] === null || results['articles'] === undefined ?
                            // check if country has articles 
                            <Country
                                name={results['CountryName']}
                                two_digit={results['CountryCode']}
                                population={results['Population']}
                                millenium_dec_ratified={results['MilleniumDeclarationRatified']}
                                millenium_dec_year={results['MilleniumDeclarationYear']}
                                rwb_rank={Math.trunc(results['RwbRank'])}
                                rwb_score={Math.trunc(results['RwbScore'])}
                                internet_access={Math.trunc(results['InternetAccessPercent'])}
                                internet_access_ranking={Math.trunc(results['InternetAccessRank'])}
                                internet_access_year={Math.trunc(results['InternetAccessYear'])}
                                censorship_level={Math.trunc(results['CensorshipLevel'])}
                                censorship_ranking={Math.trunc(results['CensorshipRank'])}
                                cd_rating={Math.trunc(results['DiscourseRating'])}
                                cd_ranking={Math.trunc(results['DiscourseRanking'])}
                                millenium_dec_ratified={results['MilleniumDeclarationYear'] === 0 ? "Not signed" : "Signed"}
                                Gdi_Value={Math.trunc(results['GdiValue'])}
                                Gdi_Link={results['GdiLink']}
                                Lit_Rate={Math.trunc(results['LitRate'])}
                                Lit_Year={Math.trunc(results['LitYear'])}

                            />
                            :

                            <Country
                                // key={item._id}
                                name={results['CountryName']}
                                two_digit={results['CountryCode']}
                                population={results['Population']}
                                millenium_dec_ratified={results['MilleniumDeclarationRatified']}
                                millenium_dec_year={results['MilleniumDeclarationYear']}
                                rwb_rank={Math.trunc(results['RwbRank'])}
                                rwb_score={Math.trunc(results['RwbScore'])}
                                internet_access={Math.trunc(results['InternetAccessPercent'])}
                                internet_access_ranking={Math.trunc(results['InternetAccessRank'])}
                                internet_access_year={Math.trunc(results['InternetAccessYear'])}
                                censorship_level={Math.trunc(results['CensorshipLevel'])}
                                censorship_ranking={Math.trunc(results['CensorshipRank'])}
                                cd_rating={Math.trunc(results['DiscourseRating'])}
                                cd_ranking={Math.trunc(results['DiscourseRanking'])}
                                millenium_dec_ratified={results['MilleniumDeclarationYear'] === 0 ? "Not Signed" : "Signed"}
                                Gdi_Value={Math.trunc(results['GdiValue'])}
                                Gdi_Link={results['GdiLink']}
                                Lit_Rate={Math.trunc(results['LitRate'])}
                                Lit_Year={Math.trunc(results['LitYear'])}


                                article_1_title={results['articles'][0]['title']}
                                article_2_title={results['articles'][1]['title']}
                                article_3_title={results['articles'][2]['title']}
                                article_4_title={results['articles'][3]['title']}
                                article_1_description={results['articles'][0]['description']}
                                article_2_description={results['articles'][1]['description']}
                                article_3_description={results['articles'][2]['description']}
                                article_4_description={results['articles'][3]['description']}
                                article_1_url={results['articles'][0]['url']}
                                article_2_url={results['articles'][1]['url']}
                                article_3_url={results['articles'][2]['url']}
                                article_4_url={results['articles'][3]['url']}
                                article_1_date={results['articles'][0]['publishedAt']}
                                article_2_date={results['articles'][1]['publishedAt']}
                                article_3_date={results['articles'][2]['publishedAt']}
                                article_4_date={results['articles'][3]['publishedAt']}
                                article_1_image_url={results['articles'][0]['urlToImage']}
                                article_2_image_url={results['articles'][1]['urlToImage']}
                                article_3_image_url={results['articles'][2]['urlToImage']}
                                article_4_image_url={results['articles'][3]['urlToImage']}
                            />
            }
        </div>
    )
}

function mapStateToProps({ country }) {
    return { country }
}

export default connect(mapStateToProps, actions)(Search)

