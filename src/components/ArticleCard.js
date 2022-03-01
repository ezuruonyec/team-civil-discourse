import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "@mui/material";
import Card from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography} from "@mui/material";
import CardActionArea from '@mui/material/CardActionArea';

const useStyles = makeStyles((theme) => ({
root:{
    maxWidth: 345,
    
},

media: {
    height: 0,
    paddingTop: '75.00%',
},

actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0.5
    }
  },
  focusHighlight: {}

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
                    <CardContent>
                    <Typography gutterBottom variant="h5" color="textPrimary" component="h2">
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
