import React, {useState} from "react"
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 10
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      color: fade(theme.palette.common.white, .75),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      color: fade(theme.palette.common.white, .75),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '22ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
    links: {
      color: "#FFFFFF",
      position: "relative",
      right: 50,
      "&:hover" :{
        color: "#FFFFFF"
      }
    },

    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
   

    


  }));
  
  export default function ButtonAppBar(props) {
    const classes = useStyles();
    let history = useHistory();

    const [searchTerm, setSearchTerm] = useState(props.currentTerm ? props.currentTerm : "")

    const handleSubmit = (e) => {
      e.preventDefault()
      history.push(`/search/${searchTerm}`);
    }
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar} elevation={0}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> 
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <a href="/" style={{textDecoration: "none", color: "white"}}>Global Civil Discourse Map</a>
            </Typography>
            <Link href="/rwb" className={classes.links}>Reporters Without Borders</Link>
            <div>

            {/* Search Form */}
            <Paper component="form" elevation={0} className={classes.search} onSubmit={handleSubmit} >
            <IconButton type="submit" className={classes.searchIcon} aria-label="search">
                <SearchIcon  />
              </IconButton>
              <InputBase
                classes={{input: classes.inputInput}}
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Paper>
          </div>
          </Toolbar>
        </AppBar>
        
      </div>
    );
  }