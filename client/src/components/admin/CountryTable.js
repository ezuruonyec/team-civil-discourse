import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, ThemeProvider} from "@material-ui/core"
import {connect} from "react-redux"
import * as actions from "../../actions"
import { green, grey, pink, blue, orange, teal, indigo } from '@material-ui/core/colors';
import CountryForm from "./CountryForm"

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        overflowX: 'auto',
        maxHeight: 600
    },
    table: {
        overflowX: "hidden"
    },
    tableHead: {
        color: "#FFFFFF"
    },
    tableHeadGeneral: {
        backgroundColor: grey[600],
        color: "#FFFFFF",
        whiteSpace: "nowrap"
    },
    tableHeadMD: {
        backgroundColor: blue[500],
        color: "#FFFFFF",
        width: "auto",
        whiteSpace: "nowrap"
    },
    tableHeadCC: {
        backgroundColor: teal[500],
        color: "#FFFFFF",
        whiteSpace: "nowrap"
    },
    tableHeadIA: {
        backgroundColor: pink[500],
        color: "#FFFFFF",
        whiteSpace: "nowrap"
    },
    tableHeadRWB: {
        backgroundColor: indigo[500],
        color: "#FFFFFF",
        whiteSpace: "nowrap"
    },
    tableHeadCL: {
      backgroundColor: orange[500],
      color: "#FFFFFF",
      whiteSpace: "nowrap"
    },
    tableHeadCDR: {
      backgroundColor: "#9c27b0",
      color: "#FFFFFF",
      whiteSpace: "nowrap"
    },
  });


function CountryTable({country, getCountry, disp, countryData, loading}) {

    const classes = useStyles();
    useEffect(() => {
      getCountry()
  }, [])

    const edit = (data) => {
      disp("edit_country")
      countryData([data])
    }
   

    return (
      
        <div>

      {loading ? "Loading....." :

    <TableContainer component={Paper} className={classes.wrapper} >
      <Table className={classes.table} stickyHeader>
        <TableHead className={classes.tableHead}>

          <TableRow key="th1">
            <TableCell colSpan={2}></TableCell>
            <TableCell className={classes.tableHeadCC} style={{textAlign: "center"}} colSpan={2}>Country Code</TableCell>
            <TableCell className={classes.tableHeadMD} style={{textAlign: "center"}} colSpan={2}>Millenium Declaration</TableCell>
            <TableCell className={classes.tableHeadRWB} style={{textAlign: "center"}} colSpan={2}>Reporters Without Borders</TableCell>
            <TableCell className={classes.tableHeadIA} style={{textAlign: "center"}} colSpan={3}>Internet Access</TableCell>
            <TableCell className={classes.tableHeadCL} style={{textAlign: "center"}} colSpan={2}>Censorship Level</TableCell>
            <TableCell className={classes.tableHeadCDR} style={{textAlign: "center"}} colSpan={2}>Civil Discourse Ranking</TableCell>
          </TableRow>

        <TableRow key="th2">
            <TableCell className={classes.tableHeadGeneral}>Name</TableCell>
            <TableCell className={classes.tableHeadGeneral}>Population</TableCell>

            <TableCell className={classes.tableHeadCC}>Two Digit Country Code</TableCell>
            <TableCell className={classes.tableHeadCC}>Three Digit Country Code</TableCell>

            <TableCell className={classes.tableHeadMD}>Millenium Declaration Ratified</TableCell>
            <TableCell className={classes.tableHeadMD}>Millenium Declaration Year</TableCell>

            <TableCell className={classes.tableHeadRWB}>Ranking</TableCell>
            <TableCell className={classes.tableHeadRWB}>Score</TableCell>

            <TableCell className={classes.tableHeadIA}>Percentage</TableCell>
            <TableCell className={classes.tableHeadIA}>Ranking</TableCell>
            <TableCell className={classes.tableHeadIA}>Year</TableCell>
            
            <TableCell className={classes.tableHeadCL}>Level</TableCell>
            <TableCell className={classes.tableHeadCL}>Ranking</TableCell>

            <TableCell className={classes.tableHeadCDR}>Rating</TableCell>
            <TableCell className={classes.tableHeadCDR}>Ranking</TableCell>

            <TableCell className={classes.tableHeadGeneral}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {country.countries.map((country) => (
            <TableRow key={country.name}>
                <TableCell>{country.name}</TableCell>
                <TableCell>{country.population}</TableCell>


                    <TableCell>{country.two_digit}</TableCell>
                    <TableCell>{country.three_digit}</TableCell>


                    <TableCell>{country.millenium_dec_ratified}</TableCell>
                    <TableCell>{country.millenium_dec_year}</TableCell>

                <TableCell>{country.rwb_score}</TableCell>
                <TableCell>{country.rwb_ranking}</TableCell>     

                  <TableCell>{country.internet_access}</TableCell>
                  <TableCell>{country.internet_access_ranking}</TableCell>
                  <TableCell>{country.internet_access_year}</TableCell>


                  <TableCell>{country.censorship_level}</TableCell>
                  <TableCell>{country.censorship_ranking}</TableCell>


                <TableCell>{country.cd_rating}</TableCell> 
                <TableCell>{country.cd_ranking}</TableCell> 

              <TableCell><Button onClick={() => edit(country)}>Edit</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
}
    </div>
    )
}

function mapStateToProps({country}) {
    return {country}
  }
  
  export default connect(mapStateToProps, actions)(CountryTable)
  