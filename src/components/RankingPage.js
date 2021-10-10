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
        let color;
        if (ranking <= 28) {
            color = '#00FF00';
        } else if (ranking > 28 && ranking <= 57) {
            color = '#A3FF00';
        } else if (ranking > 57 && ranking <= 87) {
            color = '#FFFC00';
        } else if (ranking > 87 && ranking <= 116) {
            color = '#FF8000';
        } else if (ranking > 116 && ranking <= 145) {
            color = '#FF4F00';
        } else if (ranking > 145) {
            color = '#EB1414';
        } else {
            color = '#999999';
        }
        return color;
    }

    return (
        <>
            <h2 align="center">Country Civil Discourse Rankings</h2>
            <Paper>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '25%' }} >Country</TableCell>
                            <TableCell style={{ width: '25%' }} >Population</TableCell>
                            <TableCell style={{ width: '25%' }} >Ranking</TableCell>
                            <TableCell style={{ width: '25%' }} >Censorship Level</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allCountries.map((country) => (
                        <>
                            <TableRow >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{ width: '25%' }}
                                        key={country.CountryName}
                                    >
                                    {country.CountryName}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{ width: '25%' }}
                                        key={country.Population}
                                    >
                                    {country.Population}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{ backgroundColor: colorCodeRows(country.DiscourseRanking), width: '25%' }}
                                        align="center"
                                        key={country.DiscourseRanking}
                                    >
                                    {country.DiscourseRanking}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{ width: '25%' }}
                                        align="center"
                                        key={country.CensorshipLevel}
                                    >
                                    {country.CensorshipLevel}
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
