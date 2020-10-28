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
import { green, grey, pink, blue, orange, teal, indigo, yellow, red, } from '@material-ui/core/colors';
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

    const data = country.countries.filter(item => item.rwb_score !== 0)
    const sortedData = data.sort((a,b) => a.rwb_score - b.rwb_score)


    const rankcolor = (rank) => {
        if(rank >= 55)
            return grey[700]
        else if(rank > 35)
            return red[400]
        else if(rank > 25)
            return orange[400]
        else if(rank >15)
            return yellow[400]
        return green[400]
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
                            <TableCell className={classes.number} style={{borderLeft: "10px solid", borderLeftColor: rankcolor(country.rwb_score)}}>{index+1}</TableCell>
                            <TableCell className={classes.cell}>{country.name}</TableCell>
                            <TableCell className={classes.cell}>{country.rwb_score}</TableCell>
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