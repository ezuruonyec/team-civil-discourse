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
    tableHeadFM: {
        backgroundColor: teal[500],
        color: "#FFFFFF",
        whiteSpace: "nowrap"
    },
    tableHeadFS: {
        backgroundColor: pink[500],
        color: "#FFFFFF",
        whiteSpace: "nowrap"
    },
    tableHeadRWB: {
        backgroundColor: indigo[500],
        color: "#FFFFFF",
        whiteSpace: "nowrap"
    },
    tableHeadFN: {
      backgroundColor: orange[500],
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
            <TableCell colSpan={3}></TableCell>
            <TableCell className={classes.tableHeadMD} style={{textAlign: "center"}} colSpan={2}>Millenium Declaration</TableCell>
            <TableCell className={classes.tableHeadFS} style={{textAlign: "center"}} colSpan={2}>Freedom of Speech</TableCell>
            <TableCell className={classes.tableHeadFM} style={{textAlign: "center"}} colSpan={3}>Freedom of Media</TableCell>
            <TableCell className={classes.tableHeadRWB} style={{textAlign: "center"}} colSpan={2}>Reporters Without Borders</TableCell>
            <TableCell className={classes.tableHeadFN} style={{textAlign: "center"}} colSpan={4}>Fake News Laws</TableCell>
          </TableRow>

        <TableRow key="th2">
            <TableCell className={classes.tableHeadGeneral}>Name</TableCell>
            <TableCell className={classes.tableHeadGeneral}>Code</TableCell>
            <TableCell className={classes.tableHeadGeneral}>Population</TableCell>

            <TableCell className={classes.tableHeadMD}>Y/N</TableCell>
            <TableCell className={classes.tableHeadMD}>Year</TableCell>

            <TableCell className={classes.tableHeadFS}>Y/N</TableCell>
            <TableCell className={classes.tableHeadFS}>Restrictions</TableCell>

            <TableCell className={classes.tableHeadFM}>Y/N</TableCell>
            <TableCell className={classes.tableHeadFM}>Restrictions</TableCell>
            <TableCell className={classes.tableHeadFM}>Year</TableCell>

            <TableCell className={classes.tableHeadRWB}>Ranking</TableCell>
            <TableCell className={classes.tableHeadRWB}>Score</TableCell>
            
            <TableCell className={classes.tableHeadFN}>Y/N</TableCell>
            <TableCell className={classes.tableHeadFN}>Description</TableCell>
            <TableCell className={classes.tableHeadFN}>Year</TableCell>
            <TableCell className={classes.tableHeadFN}>Prosecution Y/N</TableCell>

            <TableCell className={classes.tableHeadGeneral}>Internet Access</TableCell>
            <TableCell className={classes.tableHeadGeneral}>Censorship Level</TableCell>
            <TableCell className={classes.tableHeadGeneral}>Civil Discourse Rating</TableCell>

            <TableCell className={classes.tableHeadGeneral}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {country.countries.map((country) => (
            <TableRow key={country.name}>
                <TableCell>{country.name}</TableCell>
                <TableCell>{country.code}</TableCell>
                <TableCell>{country.population}</TableCell>
                {country.millenium_dec.map((field) => (
                    <>
                    <TableCell>{field.ratified ? "Yes" : "No"}</TableCell>
                    <TableCell>{field.year}</TableCell>
                    </>
                ))}

                {country.freedom_speech.map((field) => (
                  <>
                  <TableCell>{field.present ? "Yes" : "No"}</TableCell>
                  <TableCell>{field.restrictions === "" ? "none" : field.restrictions}</TableCell>
                  </>
                ))}

                {country.freedom_media.map((field) => (
                  <>
                  <TableCell>{field.present ? "Yes" : "No"}</TableCell>
                  <TableCell>{field.restrictions === "" ? "none" : field.restrictions}</TableCell>
                  <TableCell>{field.year}</TableCell>
                  </>
                ))}

                <TableCell>{country.rwb_score}</TableCell>
                <TableCell>{country.rwb_ranking}</TableCell>     

                {country.fake_news.map((field) => (
                  <>
                  <TableCell>{field.present ? "Yes" : "No"}</TableCell>
                  <TableCell>{field.description === "" ? "none" : field.description}</TableCell>
                  <TableCell>{field.year}</TableCell>
                  <TableCell>{field.prosecution ? "Yes" : "No"}</TableCell>
                  </>
                ))}

                <TableCell>{country.internet_access}</TableCell> 
                <TableCell>{country.censorship_level}</TableCell> 
                <TableCell>{country.cd_rating}</TableCell> 
                

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
  