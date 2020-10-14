import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {Box, colors} from "@material-ui/core"
import CountryIcon from '@material-ui/icons/Public';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {connect} from "react-redux"
import CountryList from "./AdminCountryList"
import AddCountry from "./AdminCountryModal"
import Users from "./Users"
import { grey } from '@material-ui/core/colors';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: grey[900]
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(10)
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "auto",
    marginBottom: 10
  },
  user: {
    textAlign: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  side: {

    selected:  {
      backgroundColor: "#000000"
    }
  },
  
}));

function Nav({auth, user}) {
  const classes = useStyles();

  const [display, setDisplay] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null);


  const renderContent = () => {
    switch (display) {
      case "countries": 
        return (
          <>
            <AddCountry />
            <CountryList /> 
          </>
        )
      case "users": 
          return <Users />
      default:
        return (
          <div>
            Home
          </div>
        )
        

    }

  }


  return (
    <div className={classes.root}>
      <CssBaseline />


      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>


      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          
        {/*-------------------------------------------------------- 
          User Info 
          ---------------------------------------------------------*/}
        <Box className={classes.user}>
        <Avatar className={classes.large} src={auth.photos[0].value} />
        <p>{auth.displayName}</p>
        </Box>

          <List>
          
              {/*-------------------------------------------------------- 
                 Countries 
                ---------------------------------------------------------*/}
              <ListItem 
                button 
                className={{selected: classes.selected}}
                selected={selectedIndex === 0}
                onClick={() => {
                  setSelectedIndex(0)
                  setDisplay("countries")
                }}
              >
                <ListItemIcon><CountryIcon /></ListItemIcon>
                <ListItemText primary="Countries" />
              </ListItem>

              {/*-------------------------------------------------------- 
                 Users 
                ---------------------------------------------------------*/}
              <ListItem 
                button 
                selected={selectedIndex === 1}
                onClick={() => {
                  setSelectedIndex(1)
                  setDisplay("users")
                }}> 
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>


          </List>
          <Divider />
          <List>
              {/*-------------------------------------------------------- 
                 Logout 
                ---------------------------------------------------------*/}
          <ListItem button component="a" href="/api/logout">
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        {/* Render component based on which button was clicked. */}
        {renderContent()}
      </main>
    </div>
  );

}

function mapStateToProps({auth, user}) {
  return {auth, user}
}

export default connect(mapStateToProps)(Nav)
