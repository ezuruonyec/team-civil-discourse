import React, { useEffect } from "react"
import {connect} from "react-redux"
import * as actions from "../actions"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container"
import { green, grey, orange, yellow, red, } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header"

const useStyles = makeStyles({
    wrapper: {
        width: 375,
        overflowX: 'auto',
        maxHeight: "90vh",
        float: "right"
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

    rankColor: {
       borderLeft: "5px solid"
    },

    number: {
        fontFamily: "arial black",
        fontWeight: 900,
        fontSize: 20,
        textAlign: "center"
        
    },

    cell: {
        fontSize: 17
    }
   
  });

function RWBlist({country, getCountry}) {

    const classes = useStyles();

    useEffect(() => {
        getCountry()
    }, [])

    const data = country.countries.filter(item => item.cd_ranking !== 0)
    const sortedData = data.sort((a,b) => a.cd_ranking- b.cd_ranking)


    function getColor(d){
        return d >= 146 ? '#b30000' :    // 112 +
                   d >= 117  ? '#e34a33' : // 91 - 111
                   d >= 88  ? '#fc8d59' :  // 70 - 90
                   d >= 58  ? '#fdbb84' :  // 49 - 69
                   d >= 29   ? '#fdd49e' : // 28 - 48
                   d >= 1 ? '#fef0d9' : // 7 - 27
                              '#757575'; //  no cd rating
      }

    return (
        <div>

        <Header />  
        
        <Container>
            
            <TableContainer component={Paper} className={classes.wrapper} >
                <Table className={classes.table} stickyHeader >
                    <TableBody >
                    {sortedData.map((country, index) => (
                        <TableRow key={country.name} hover>
                            <TableCell className={classes.number} style={{borderLeft: "10px solid", borderLeftColor: getColor(country.cd_ranking)}}>{index+1}</TableCell>
                            <TableCell className={classes.cell}>{country.name}</TableCell>
                            <TableCell className={classes.cell}>{country.cd_rating}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
        </div>
       
    )




}


function mapStateToProps({country}) {
    return {country}
  }
  
  export default connect(mapStateToProps, actions)(RWBlist)