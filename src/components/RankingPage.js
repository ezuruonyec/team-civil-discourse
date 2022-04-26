import React, { useState, useEffect } from 'react'
import axios from 'axios';
import numeral from 'numeral';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        "height": 800,
        "width": '100%',
        "& .MuiDataGrid-cell.MuiDataGrid-cell--textLeft":{
            textAlign: "center",
        },
        "& .MuiDataGrid-columnHeaderTitle":{
            fontFamily: "Courier",
            fontSize: 16,
            textAlign: "center",
            fontWeight: 'bold', 
            textDecoration: 'underline'
        },
        "& .MuiDataGrid-renderingZone": {
            "& .MuiDataGrid-row": {
                backgroundColor: '#8c96c6',
                "&:hover": {
                    backgroundColor: '#bfd3e6'
                } //main display color changes
            },
            fontFamily: "Courier",
            fontSize: 15,
            textAlign: "center",
        } //still editing
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
                    host: 'https://3iixzbu86i.execute-api.us-east-1.amazonaws.com/', 
                    method: 'GET',
                    url: 'https://3iixzbu86i.execute-api.us-east-1.amazonaws.com/Prod-CivilDiscourseMap-GetAllAttributes', 
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
            population: country.Population ?
            numeral(country.Population).format('0,0') :
            'Unavailable',
            discourse: parseInt(country.DiscourseRanking),
            censorship: (11-(country.CensorshipLevel)).toFixed(2),
            internet: `${country.InternetAccessPercent}%`,
            rwb: parseInt(country.RwbRank),
            millenium: country.MilleniumDeclarationRatified ?
                `Signed in ${parseInt(country.MilleniumDeclarationYear)}` :
                'Not signed',
            literacy_rate: country.LitRate ?
            `${country.LitRate}%`:
            'unavailable',

        })
    }
    )];

    //main table title columns 
    const columns = [
        {
            field: 'id',
            headerName: 'Country',
            width: 200,
            
        },
        {
            field: 'population',
            headerName: 'Population',
            width: 200,
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
            width: 200,
        },
        {
            field: 'rwb',
            headerName: 'RWB Rating',
            width: 200,
        },
        {
            field: 'millenium',
            headerName: 'Millennium Declaration',
            width: 200,
        },
        {
            field: 'literacy_rate',
            headerName: 'Literacy Rate',
            width: 200,
        },
    ];

    const colorCodeRows = ranking => { //Rank colors?
        let color;
        if (ranking <= 28) {
            color = "#edf8fb";
        } else if (ranking > 28 && ranking <= 57) {
            color = "#bfd3e6";
        } else if (ranking > 57 && ranking <= 87) {
            color = "#9ebcda";
        } else if (ranking > 87 && ranking <= 116) {
            color = "#8c96c6";
        } else if (ranking > 116 && ranking <= 145) {
            color = "#8856a7";
        } else if (ranking > 145) {
            color = "#810f7c";
        } else {
            color = "#999999";
        }
        return color;
    }

    return ( 
        <div style={{ height: '90%'}}> 
            <h2 align="center" style = {{ fontFamily: "Courier", backgroundColor: "#bfd3e6" }}> 
                - Country Level Rankings - </h2>
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
