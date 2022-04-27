//  ██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗
//  ██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
//  ██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   ███████╗
//  ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
//  ██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████║
//  ╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
//                                                          
import React from "react"
import { Container } from "@material-ui/core"
import Chip from '@material-ui/core/Chip';
import { green, red } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import InfoCard from "./InfoCard"
import ReactCountryFlag from "react-country-flag"
import numeral from "numeral"
import ArticleCard from "./ArticleCard"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
//import 



const useStyles = makeStyles((theme) => ({

    // passed: {

    //     color: green[700],
    //     borderColor: green[700]

    // },
    notPassed: { //page????
        color: red[700],
        borderColor: red[700]
    },
    // sectionHeader: {
    //     marginTop: 20,
    //     fontFamily: "Roboto",
    //     fontSize: 20
    // },
    // info: {
    //     marginRight: 5,
    //     display: "inline-block"
    // }

}))

function Country({ id, name, two_digit, three_digit, population, millenium_dec_ranking, millenium_dec_ratified, millenium_dec_year, rwb_rank, rwb_score, internet_access, internet_access_ranking, internet_access_year, censorship_level, censorship_ranking, cd_rating, cd_ranking, poverty_rate, article_array, Gdi_Value, Gdi_Link, Lit_Rate, Lit_Year,
    article_1_title, article_1_description, article_1_author, article_1_date, article_1_source, article_1_url,
    article_2_title, article_2_description, article_2_author, article_2_date, article_2_source, article_2_url,
    article_3_title, article_3_description, article_3_author, article_3_date, article_3_source, article_3_url,
    article_4_title, article_4_description, article_4_author, article_4_date, article_4_source, article_4_url,
    article_5_title, article_5_description, article_5_author, article_5_date, article_5_source, article_5_url,
    article_1_image_url, article_2_image_url, article_3_image_url, article_4_image_url }) {
    const classes = useStyles();

    return (
        <Container>
            <h1 style={{ //header
                fontSize: "48px",
                fontFamily: "Courier", //font change from Ariel
                backgroundColor: "#edf8fb"
            }}> 
                <center> 
                   - {name} 

                    <ReactCountryFlag
                        countryCode={two_digit}
                        style={{ //dashes added
                            width: '1.2em',
                            height: '1.2em',
                            marginLeft: 10
                        }} 
                        svg /> - 
                </center> 
            </h1> 
            <h2  style ={{ //font changes
                fontFamily: "Courier"
            }}> Civil Discourse Ranking: {cd_ranking} </h2>
            <h2  style ={{ //font changes
                fontFamily: "Courier",
                //backgroundColor: "grey"
                }}> Population: {numeral(population).format('0,0')} </h2>
            


            <Grid container spacing={1} justify="center">

                <Grid item xs={12} sm={3}>
                    <InfoCard title={`${internet_access}%`} detail="Internet Access Percentage" subDetail={'As of ' + internet_access_year} />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <InfoCard title={11 - censorship_level} detail="Online Censorship Level" subDetail="1 (Lowest) - 10 (Highest)" />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <InfoCard title={millenium_dec_ratified}  detail="Millennium Declaration Signed" subDetail="As of 2000" />
                </Grid>

            </Grid>

            <br></br>

            <Grid container spacing={1} justify="center">
                
                {/* <Grid item xs={12} sm={3}>  
                    <InfoCard title={Gdi_Value} detail="Average Global Disinformation Index Rating" subDetail=""/>
                    <a href={'https://disinformationindex.org/research/'} ><Button style={{ fontFamily: "Courier New" //font changed
                        }}> Visit GDI's site to see a country-level report... </Button></a> 
                </Grid>  */} 

                <Grid item xs={12} sm={3}>
                    <InfoCard title={rwb_rank} detail="Reporters W/O Borders Ranking" subDetail="Out of 180 Countries" />
                   
                </Grid>

             {  <Grid item xs={12} sm={3}>
                    <InfoCard title={`${Lit_Rate}%`} detail= "Literacy Rate"  subDetail={'As of '+ Lit_Year} />
                </Grid> 
                }
            </Grid>
            <center> 
                        <a href={'https://rsf.org/en'} ><Button style={{ fontFamily: "Courier New" //font changed
                            }}> Visit RSF's site for more information... </Button>
                        </a>
                </center>
		
            <br></br>

            {/* <InfoCard title={cd_ranking} detail="Civil Discourse Ranking" subDetail="Out of 173 Countries"/>*/}
            <h2 style= {{
                fontSize: "30px", 
                fontFamily: "Courier"
                }}> - Recent Headlines - </h2>

            <br></br>

            {
                article_1_title === null || article_1_title === undefined ?

                    <p>The country selected does not currently have news support. Keep checking back as more countries are integrated!</p>

                    :

                    <Grid container spacing={1}>


                        <Grid item xs={12} sm={3}>
                            <ArticleCard title={article_1_title} author={article_1_author} date={article_1_date} articleUrl={article_1_url} description={article_1_description}
                                imageUrl={article_1_image_url} />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <ArticleCard title={article_2_title} author={article_2_author} date={article_2_date} articleUrl={article_2_url} description={article_2_description}
                                         imageUrl={article_2_image_url} />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <ArticleCard title={article_3_title} author={article_3_author} date={article_3_date} articleUrl={article_3_url} description={article_3_description}
                                imageUrl={article_3_image_url} />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <ArticleCard title={article_4_title} author={article_4_author} date={article_4_date} articleUrl={article_4_url} description={article_4_description}
                                         imageUrl={article_4_image_url} />
                        </Grid>

                    </Grid>
                    
            } 
            <center> 
                {/* <a href={'https://disinformationindex.org/research/'} >
                    <Button style={{ fontFamily: "Courier New" }}> 
                    Visit GDI's site to see a country-level report... </Button>
                </a> */}
            </center>
                        
             {/* <h2 style= {{
                fontSize: "30px", 
                fontFamily: "Courier"
                }}> - Included Interviews - </h2>
                <p> - Soon to be included.... </p> */}
                <footer style = {{ backgroundColor: "#bfd3e6"}}>
                    <p style = {{ color: "#bfd3e6", fontSize: 15}}> 
                        page ending, background color footer text only added so the footer shows,
                         so it's given the same font color as the background - not visible on the page, 
                         proper footer may be added later.
                    </p>
                </footer>
        </Container>
    )
}

export default Country
