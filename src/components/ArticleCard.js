import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";
//import {Link} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
root:{ //article boxes
    maxWidth: 345,
    height: 500
}, //height added, evened out box sizes

media: { //photos
    height: 100, //height change added
    paddingTop: '75.00%',
},
// actionArea: {
//     "&:hover $focusHighlight": {
//       //opacity: 0.5,
//     } 
//   },
focusHighlight: {
    opacity: 1.0,
} //added opacity

}))

function ArticleCard({title, description, date, articleUrl, author, imageUrl}) {

    const classes = useStyles();

    return(
        <Link href = {articleUrl} varient = "inherit" color = "textPrimary" underline = "none">
            <Card className={classes.root}>
                <CardActionArea className={
                    classes.actionArea,
                    classes.focusHighlight}>

                    <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    // title="image"
                    />
                    <CardContent >
                    <Typography style= {{ fontFamily: "Verdana", 
                        fontStyle: "bold", 
                        fontSize: "20px"}} //font changes added
                            gutterBottom variant="h5" color="textPrimary" component="h2">
                        {title}
                    </Typography>

                    <Typography variant ="subtitle2" color="textPrimary" component="sub">
                            {new Date(date).toDateString()}
                    </Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                        {description}
                    </Typography>

                    <Typography variant="overline" color="initial" component="p">
                        {author}

                    </Typography>

                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions> */}
            </Card>
        </Link>
    )
}

export default ArticleCard
