import React, { useState, useEffect } from 'react'
import ColorMap from "./ColorMap"
import axios from 'axios';
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';
// import { DataGrid } from '@mui/x-data-grid';

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

    const columns = [
        {
            field: 'country',
            headerName: 'Country',
            width: 150,
            editable: false,
        }, {
            field: 'ranking',
            headerName: 'Ranking',
            width: 150,
            editable: false,
        }
    ]
    
    let rankings = allCountries.map((country, key) => <TableRow key={key} >{country.DiscourseRanking}</TableRow>);
    let countries = allCountries.map((country, key) => <TableRow key={key}  >{country.CountryName}</TableRow>);

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
                                <TableCell component="th" scope="row">
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
