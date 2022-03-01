import React from "react"
import makeStyles from '@mui/styles/makeStyles';
import Paper from '@mui/material/Paper';
import { createTheme } from "@mui/material";
const theme = createTheme();

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(3)
    },
    title: {
        fontSize: theme.spacing(5),
        textAlign: "center",
        fontFamily: "Roboto",
  
        fontWeight: 300
    },
    detail: {
        fontSize: theme.spacing(2),
        textAlign: "center"
    },
    subDetail: {
        fontSize: theme.spacing(2),
        textAlign: "center"
    },
})

function InfoCard({title, detail, subDetail}) {

    const classes = useStyles();

    return(
        <Paper className={classes.root}>
            <Paper className={classes.title} elevation={0}>{title}</Paper>
            <Paper className={classes.detail} elevation={0}>{detail}</Paper>
            <Paper className={classes.subDetail} elevation={0}>{subDetail}</Paper>
        </Paper>
    )
}

export default InfoCard