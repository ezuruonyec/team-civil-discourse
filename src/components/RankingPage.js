import React, { useState, useEffect } from 'react'
import axios from 'axios';
import numeral from 'numeral';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        "height": 800,
        "width": '100%',
        "& .MuiDataGrid-renderingZone": {
            "& .MuiDataGrid-row": {
                backgroundColor: '#51A6B990',
                "&:hover": {
                    backgroundColor: '#06BBE380'
                }
            }
        }
    }
});

export default function RankingPage() {
    const [allCountries, setAllCountries] = useState([]);
    const classes = useStyles();
    
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const request = {
                    host: 'https://h5kxmgz3lc.execute-api.us-east-1.amazonaws.com/development',
                    method: 'GET',
                    url: 'https://h5kxmgz3lc.execute-api.us-east-1.amazonaws.com/development/CivilDiscourseMap-GetAllAttributes',
                    path: '/CivilDiscourseMap-GetAllAttributes',
                    crossdomain: true
                }
                const res = await axios.request(request);
                if (isMounted && "Items" in res.data) {
                    setAllCountries(res.data["Items"]);
                }
            } catch (error) {
                console.log(`Error in RankingPage useEffect: ${error}`);
                console.log(error.response);
            }
        };
        fetchData();
        return () => { isMounted = false };
    }, []);

    const mappedRows = [allCountries.map((country) => {
        return ({
            id: country.CountryName,
            population: numeral(country.Population).format('0,0'),
            discourse: parseInt(country.DiscourseRanking),
            censorship: country.CensorshipLevel,
            internet: `${country.InternetAccessPercent}%`,
            rwb: parseInt(country.RwbRank),
            millenium: country.MilleniumDeclarationRatified ?
                `Signed in ${parseInt(country.MilleniumDeclarationYear)}` :
                'Not signed',
        })
    }
    )];

    const columns = [
        {
            field: 'id',
            headerName: 'Country',
            width: 140,
        },
        {
            field: 'population',
            headerName: 'Population',
            width: 150,
        },
        {
            field: 'discourse',
            headerName: 'Discourse Ranking',
            width: 200,
        },
        {
            field: 'censorship',
            headerName: 'Censorship Level',
            width: 200,
        },
        {
            field: 'internet',
            headerName: 'Internet Access',
            width: 190,
        },
        {
            field: 'rwb',
            headerName: 'RWB Rating',
            width: 160,
        },
        {
            field: 'millenium',
            headerName: 'Millenium Declaration',
            width: 225,
        },
    ];

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
        <div style={{ height: '100%' }}>
            <h2 align="center">Country-Level Rankings</h2>
            <div className={classes.root}>
                <DataGrid
                    rows={mappedRows[0]}
                    columns={columns}
                    pageSize={50}
                    rowsPerPageOptions={[50]}
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}
