import React from "react"
import {Container} from "@material-ui/core"
import Chip from '@material-ui/core/Chip';
import { green, red } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import InfoCard from "./InfoCard"
import ReactCountryFlag from "react-country-flag"
import numeral from "numeral"
import ArticleCard from "./ArticleCard"


const useStyles = makeStyles((theme) => ({

    passed: {
       
        color: green[700],
        borderColor: green[700]
        
    },
    notPassed: {
        
        color: red[700],
        borderColor: red[700]
    },
    sectionHeader: {
        marginTop: 20,
        fontFamily: "Roboto",
        fontSize: 20
    },
    info: {
        marginRight: 5,
        display: "inline-block"
    }

}))

//console.log("Before country function")
function Country({id, name, two_digit, three_digit, population, millenium_dec_ranking, millenium_dec_ratified, millenium_dec_year, rwb_rank, rwb_score, internet_access, internet_access_ranking, internet_access_year, censorship_level, censorship_ranking, cd_rating, cd_ranking, poverty_rate, article_array,
                  article_1_title, article_1_description, article_1_author, article_1_date, article_1_source, article_1_url,
                  article_2_title, article_2_description, article_2_author, article_2_date, article_2_source, article_2_url,
                  article_3_title, article_3_description, article_3_author, article_3_date, article_3_source, article_3_url,
                  article_4_title, article_4_description, article_4_author, article_4_date, article_4_source, article_4_url,
                  article_5_title, article_5_description, article_5_author, article_5_date, article_5_source, article_5_url}) {
    const classes = useStyles();
    //console.log('IN THE COUNTRY FUNCTION', article_array1)
    return (
        <Container>
            <h1>
            {name} 
            
            <ReactCountryFlag 
                countryCode={two_digit} 
                style={{
                    width: '1.2em',
                    height: '1.2em',
                    marginLeft: 10
                }} 
                svg 
            />
            </h1>
            <h2>Population: {numeral(population).format('0,0')}</h2>
            <h2>Poverty Rate: N/A</h2>


            <Grid container spacing={1}>

            <Grid item xs={12} sm={3}>
            <InfoCard title={rwb_rank} detail="Reporters W/O Borders Ranking" subDetail="Out of 180 Countries" />
            </Grid>

            <Grid item xs={12} sm={3}>
            <InfoCard title={`${internet_access}%`} detail="Internet Access Percentage" subDetail={'As of ' + internet_access_year}/>
            </Grid>
            
            <Grid item xs={12} sm={3}>
                <InfoCard title={censorship_level} detail="Online Censorship Level" subDetail="(Highest) 1 - 10 (Lowest)"/>
            </Grid>

            <Grid item xs={12} sm={3}>

            <InfoCard title={millenium_dec_ratified} detail="Millenium Declaration Signed" subDetail="As of 2000"/>

            </Grid>

            </Grid>

            <br></br>

            <InfoCard title={cd_ranking} detail="Civil Discourse Ranking" subDetail="Out of 173 Countries"/>

            <br></br>
            
            <Grid item xs={12} sm = {12}>
                <ArticleCard title={article_1_title} detail={article_1_author} subDetail= {article_1_date}
	    articleUrl = {article_1_url}/>
            </Grid>
            
           <Grid item xs={12} sm = {12}>
                <ArticleCard title={article_2_title} detail={article_2_author} subDetail= {article_2_date}
	    articleUrl = {article_2_url}/>
            </Grid>

<Grid item xs={12} sm = {12}>
                <ArticleCard title={article_3_title} detail={article_3_author} subDetail= {article_3_date}
	    articleUrl = {article_3_url}/>
            </Grid>

<Grid item xs={12} sm = {12}>
                <ArticleCard title={article_4_title} detail={article_4_author} subDetail={article_4_date}
	    articleUrl = {article_4_url}/>
            </Grid>


            {/* <br></br>

            <Grid container spacing={1}>

            <Grid item xs={12} sm={3}>
            <InfoCard title={rwb_score} detail="Reporters W/O Borders Rating" subDetail="(Best) 0 - 100 (Worst)" />
            </Grid>

            <Grid item xs={12} sm={3}>
            <InfoCard title={internet_access_ranking} detail="Internet Access Ranking" subDetail={'Out of 173 Countries'}/>
            </Grid>
            
            <Grid item xs={12} sm={3}>
                <InfoCard title={censorship_ranking} detail="Online Censorship Level Ranking" subDetail="Out of 173 Countries"/>
            </Grid>

            <Grid item xs={12} sm={3}>

                <InfoCard title={cd_rating} detail="Civil Discourse Rating" subDetail="(Best) Low - High (Worst)"/>

            </Grid>

            </Grid> */}
            {/* <Typography className={classes.sectionHeader}>Population {population}</Typography> */}
{/* 
            <Typography className={classes.sectionHeader}>Millenium Declaration</Typography>

            <Typography className={classes.info}>
            {( millenium_dec_ratified == "Y"? 
                    <Chip label="Passed" className={classes.passed} size="small" variant="outlined" /> :
                    <Chip label="Not Passed" className={classes.notPassed} size="small" variant="outlined" />
                 )}

            
             <span className={classes.info} style={{marginLeft: 10}}>{millenium_dec_year}</span>
            </Typography>
          
                  
        
{/* 

            <Typography className={classes.sectionHeader}>National Grant of Freedom of Speech</Typography>
            <Typography>
                {( free_speech[0].present ? 
                    <Chip label="Passed" className={classes.passed} size="small" variant="outlined" /> :
                    <Chip label="Not Passed" className={classes.notPassed} size="small" variant="outlined" />
                 )}
            </Typography>

            <Typography className={classes.sectionHeader}>Freedom of Media </Typography>
            <Typography>
               
                {( free_media[0].present ? 
                    <Chip label="Passed" className={classes.passed} size="small" variant="outlined" /> :
                    <Chip label="Not Passed" className={classes.notPassed} size="small" variant="outlined" />
                 )}
            </Typography>


            <Typography className={classes.sectionHeader}>Fake News Laws</Typography>
            <p>
               
                {( fake_news[0].present ? 
                    <Chip label="Passed" className={classes.passed} size="small" variant="outlined" /> :
                    <Chip label="Not Passed" className={classes.notPassed} size="small" variant="outlined" />
                 )}
            </p> */}

            

              


           
           
        </Container>
    )
}

export default Country
