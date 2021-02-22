import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom' 

const useStyles = makeStyles((theme) => ({
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
    },

    detail: {
        fontSize: theme.spacing(4),
        textAlign: "center",
        fontFamily: "Times New Roman",
    }, 

   subDetail: {
        fontSize: theme.spacing(2),
        textAlign: "center",
        fontFamily: "Times New Roman",
   }

//    source: {
       
//    },

//    author: {

//    },

//    content: {

//    },

//    image: {

//    }

}))

function ArticleCard({title, detail, subDetail, articleUrl}) {

    const classes = useStyles();

    return(
        <Paper className={classes.root}>
            <a href={articleUrl}> <Paper className={classes.title} elevation={0}>{title}</Paper> </a>
            <Paper className={classes.detail} elevation={0}>{detail}</Paper>
            <Paper className={classes.subDetail} elevation={0}>{subDetail}</Paper>
        </Paper>
    )
}

export default ArticleCard
