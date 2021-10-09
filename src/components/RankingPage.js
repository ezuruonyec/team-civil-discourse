import React, { useState, useEffect } from 'react'
import ColorMap from "./ColorMap"
import axios from 'axios';
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';

export default function RankingPage(props) {
    const [allCountries, setAllCountries] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = {
                    // DEV
                    host: 'https://h5kxmgz3lc.execute-api.us-east-1.amazonaws.com/development',
                    method: 'GET',
                    url: 'https://h5kxmgz3lc.execute-api.us-east-1.amazonaws.com/development/CivilDiscourseMap-GetAllAttributes',
                    path: '/CivilDiscourseMap-GetAllAttributes',
                    crossdomain: true
                }
                const res = await axios.request(request);
                if ("Items" in res.data) {
                    setAllCountries(res.data["Items"]);
                }
            } catch (error) {
                console.log(error);
                console.log(error.response);
            }
        };
        fetchData();
    }, []);

    const colorCodeRows = ranking => {
        if (ranking <= 28) {
            return '#00FF80';
        } else if (ranking > 28 && ranking <= 57) {
            return '#A7FF00';
        } else if (ranking > 57 && ranking <= 87) {
            return '#FFFC00';
        } else if (ranking > 87 && ranking <= 116) {
            return '#FF8000';
        } else if (ranking > 116 && ranking <= 145) {
            return '#FF5E00';
        } else if (ranking > 145 && ranking <= 173) {
            return '#EB1414';
        } else {
            return '#999999';
        }
    }

    return (
        <>
            <h2>Country Civil Discourse Rankings</h2>
            <Paper>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell>Ranking</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {allCountries.map((country) => (
                        <>
                            <TableRow key={country.CountryName} >
                                <TableCell component="th" scope="row">
                                    {country.CountryName}
                                </TableCell>                     
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{backgroundColor: colorCodeRows(country.DiscourseRanking)}}
                                    >
                                    {country.DiscourseRanking}
                                </TableCell>
                            </TableRow>
                        </>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        </>
    )
}
