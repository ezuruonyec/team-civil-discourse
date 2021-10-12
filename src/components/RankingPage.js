import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper, TableSortLabel, Toolbar } from '@material-ui/core';
// import InfoPane from './InfoPane.js';
import Header from './Header';

export default function RankingPage() {
    const [allCountries, setAllCountries] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const columns = [
        'Country',
        'Population',
        'Discourse Ranking',
        'Censorship Level',
        'Internet Access',
        'RWB Rating',
        'Millenium Declaration',
    ]

    const measurements = {
        belowIdeal: {

        },
        ideal: {

        },
        aboveIdeal: {

        }
    }
    
    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const request = {
                    // DEV
                    host: 'https://h5kxmgz3lc.execute-api.us-east-1.amazonaws.com/development',
                    method: 'GET',
                    url: 'https://h5kxmgz3lc.execute-api.us-east-1.amazonaws.com/development/CivilDiscourseMap-GetAllAttributes',
                    path: '/CivilDiscourseMap-GetAllAttributes',
                    crossdomain: true
                    // PROD
                    // host: 'https://3iixzbu86i.execute-api.us-east-1.amazonaws.com/', 
                    // method: 'GET',
                    // url: 'https://3iixzbu86i.execute-api.us-east-1.amazonaws.com/Prod-CivilDiscourseMap-GetAllAttributes', 
                    // path: '/CivilDiscourseMap-GetAllAttributes',
                    // crossdomain: true
                }
                const res = await axios.request(request);
                if (isMounted && "Items" in res.data) {
                    setAllCountries(res.data["Items"]);
                }
            } catch (error) {
                console.log(error);
                console.log(error.response);
            }
        };
        fetchData();
    }, []);

    //FIX: Consolidate color-coding functions into one.

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

    const colorCodeCensor = censorship => {
        let color;
        if (censorship > 7) {
            color = '#00FF00';
        } else if (censorship <= 7 && censorship > 4) {
            color = '#FFFC00';
        } else if (censorship <= 4) {
            color = '#EB1414';
        } else {
            color = '#999999';
        }
        return color;
    }

    const colorCodeInternet = access => {
        let color;
        if (access > 90) {
            color = '#00FF00';
        } else if (access <= 90 && access > 75) {
            color = '#A3FF00';
        } else if (access <= 75 && access > 50) {
            color = '#FFFC00';
        } else if (access <= 50 && access > 25) {
            color = '#FF4F00';
        } else if (access <= 25) {
            color = '#EB1414';
        } else {
            color = '#999999';
        }
        return color;
    }

    const colorCodeRWB = rwbRating => {
        let color;
        if (rwbRating <= 50) {
            color = '#00FF00';
        } else if (rwbRating <= 100 && rwbRating > 50) {
            color = '#FFFC00';
        } else if (rwbRating <= 150 && rwbRating > 100) {
            color = '#FF4F00';
        } else if (rwbRating > 150) {
            color = '#EB1414';
        } else {
            color = '#999999';
        }
        return color;
    }

    const handleSort = () => {
        try {
            setAllCountries(allCountries.sort((a, b) => a.CountryName > b.CountryName ? 1 : -1))
        } catch(err) {
            console.log(`Error: Could not sort by country name. ${err}`);
        }
    }

    const descendSort = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        } else if (b[orderBy] > a[orderBy]) {
            return 1;
        } else {
            return 0;
        }
    }

    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => descendSort(a, b, orderBy)
            : (a, b) => -descendSort(a, b, orderBy);
    }

    const sortBy = (column) => {
        console.log(`Sorted ${column} column.`);
    }

    return (
        <>
            <Header />
            <h2 align="center">Country Civil Discourse Rankings</h2>
            {/* <button onClick={() => setIsOpen(true)}>Click to open pane</button>
            <InfoPane isOpen={isOpen} /> */}
            <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        {columns.map((columnName) =>
                            <TableCell
                                align="center"
                                style={{ fontWeight: 'bold' }}
                            >
                                {columnName}
                                <TableSortLabel
                                    active={true}
                                    onClick={() => sortBy(columnName)}
                                >
                                </TableSortLabel>
                            </TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allCountries.map((country, key) => (
                        <>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    key={country.CountryName}
                                >
                                    {country.CountryName}
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"                                        
                                    key={`${country.CountryName}_population`}
                                >
                                    {parseInt(country.Population)}
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    key={`${country.CountryName}_ranking`}
                                    style={{ backgroundColor: colorCodeRows(country.DiscourseRanking)}}
                                    align="center"
                                >
                                    {parseInt(country.DiscourseRanking)}
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    key={`${country.CountryName}_censorship`}
                                    style={{ backgroundColor: colorCodeCensor(country.CensorshipLevel)}}
                                    align="center"
                                >
                                    {country.CensorshipLevel}
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    key={`${country.CountryName}_internet`}
                                    style={{ backgroundColor: colorCodeInternet(country.InternetAccessPercent)}}
                                    align="center"
                                >
                                    {country.InternetAccessPercent}%
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    key={`${country.CountryName}_RWB`}
                                    style={{ backgroundColor: colorCodeRWB(country.RwbRank)}}
                                    align="center"
                                >
                                    {parseInt(country.RwbRank)}
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    key={`${country.CountryName}_millenium`}
                                    style={{ backgroundColor: country.MilleniumDeclarationRatified ? '#00FF00' : '#EB1414'}}
                                    align="center"
                                >
                                    {country.MilleniumDeclarationRatified ? <>Signed in {`${parseInt(country.MilleniumDeclarationYear)}`}</> : <>Not signed</>}
                                </TableCell>     
                            </TableRow>
                        </>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}