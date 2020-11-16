import React, {useEffect} from "react"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from "../InfoCard"
import * as actions from "../../actions"
import {connect} from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Dashboard({country, getCountry, loading}) {

    const classes = useStyles();
    useEffect(() => {
        getCountry()
        
    }, [])

    
  return (

    
     
    <div className={classes.root}>
        {loading ? "loading" :
        
      <Grid container spacing={2}>

        <Grid item xs={6}>
          <InfoCard title={country.countries.length} detail="Countries" />
        </Grid>
        
        <Grid item xs={6}>
            <InfoCard title="3" detail="Users" />
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>Analytics</Paper>
        </Grid>

      </Grid>
    }
    </div>
  );
}

function mapStateToProps({country}) {
    return {country}
  }
  
  export default connect(mapStateToProps, actions)(Dashboard)