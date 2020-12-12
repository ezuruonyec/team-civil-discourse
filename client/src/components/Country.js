import React from "react"
import {Container} from "@material-ui/core"
import Chip from '@material-ui/core/Chip';
import { green, red } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import InfoCard from "./InfoCard"
import ReactCountryFlag from "react-country-flag"


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

function Country({name, population, code, millenium_dec, free_speech, free_media, fake_news, internet_access, censorship_level, rwb_rank, poverty_level}) {
    const classes = useStyles();
    //let cdRating = (rwb_rank*.30)+(poverty_level[0].percent*.0125)+(internet_access*.25)+(censorship_level*.20)+(millenium_dec[0].ratified? .075 : 0)+((population/100000)*.05)
    return (
        <Container>
            <h1>
            {name} 
            
            <ReactCountryFlag 
                countryCode={code} 
                style={{
                    width: '1.2em',
                    height: '1.2em',
                    marginLeft: 10
                }} 
                svg 
            />
            
            </h1>



            <Grid container spacing={1}>

            <Grid item xs={12} sm={3}>
            <InfoCard title={population} detail="Population " />
            </Grid>

            <Grid item xs={12} sm={3}>
            <InfoCard title={`${internet_access}%`} detail="Internet Access " />
            </Grid>
            
            <Grid item xs={12} sm={3}>
                <InfoCard title={censorship_level} detail="Censorship Level" />
            </Grid>

            <Grid item xs={12} sm={3}>
                <InfoCard title="39.3" detail="Civil Discourse Rating" />
            </Grid>

            </Grid>

            {/* <Typography className={classes.sectionHeader}>Population {population}</Typography> */}
{/* 
            <Typography className={classes.sectionHeader}>Millenium Declaration</Typography>

            <Typography className={classes.info}>
            {( millenium_dec[0].ratified ? 
                    <Chip label="Passed" className={classes.passed} size="small" variant="outlined" /> :
                    <Chip label="Not Passed" className={classes.notPassed} size="small" variant="outlined" />
                 )}

            
             <span className={classes.info} style={{marginLeft: 10}}>{millenium_dec[0].year}</span>
            </Typography>
          
                  
        


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
