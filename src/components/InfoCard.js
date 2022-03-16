import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: { /*basic information for each aspect of country data box*/ 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(1),
        fontFamily: "Courier ",
        height: 200,
        //backgroundColor: "grey"
    }, //height added, evened out box sizes
    title: { /*info titles*/
        fontSize: theme.spacing(5),
        textAlign: "center",
        fontFamily: "Georgia",
        fontWeight: 300,
        //backgroundColor: "grey"
    }, /*font change from Roboto */
    detail: { 
        fontSize: theme.spacing(2),
        textAlign: "center",
        //backgroundColor: "grey"
    },
    subDetail: { //"As of ..."
        fontSize: theme.spacing(2),
        textAlign: "center",
        //backgroundColor: "grey"
    },
})) 

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