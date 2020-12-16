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

function Country({id, name, two_digit, three_digit, population, millenium_dec_ranking, millenium_dec_ratified, millenium_dec_year, rwb_rank, rwb_score, internet_access, internet_access_ranking, internet_access_year, censorship_level, censorship_ranking, cd_rating, cd_ranking}) {
    const classes = useStyles();
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

            </Grid>
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
