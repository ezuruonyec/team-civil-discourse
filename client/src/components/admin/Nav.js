import React, {useState, useEffect} from 'react';
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
import CountryForm from "./CountryForm"
import Users from "./Users"
import { grey } from '@material-ui/core/colors';
import CountryTable from './CountryTable';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import AddIcon from '@material-ui/icons/Add';
import TableChartIcon from '@material-ui/icons/TableChart';
import { getCountry } from '../../actions';
import * as actions from "../../actions"

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
  nested: {
    paddingLeft: theme.spacing(5),
  },
  
}));

function Nav({auth, country}) {

  const classes = useStyles();

  useEffect(() => {
    getCountry()
    
}, [])

  const [display, setDisplay] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null)

  const renderContent = () => {
    switch (display) {
      case "countries": 
        return <CountryTable countryData={setData} disp={setDisplay} />
      case "add_country": 
        return <CountryForm disp={setDisplay} index={setSelectedIndex} mode="add" />
      case "edit_country":
        return <CountryForm disp={setDisplay} index={setSelectedIndex} mode="edit" data={data} />
      case "users": 
        return <Users />
      default:
        return (
          <div>
            Dashboard
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

              <ListItem button onClick={() => {
                  setOpen(!open)
                }}>
                <ListItemIcon>
                  <CountryIcon />
                </ListItemIcon>
                <ListItemText primary="Countries" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <ListItem 
                    button 
                    className={classes.nested}
                    selected={selectedIndex === 0}
                    onClick={() => {
                      setSelectedIndex(0)
                      setDisplay("countries")
                    }}
                  >
                    <ListItemIcon >
                      <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Table" />
                  </ListItem>

                  <ListItem 
                    button 
                    selected={selectedIndex === 1}
                    className={classes.nested}
                    onClick={() => {
                      setSelectedIndex(1)
                      setDisplay("add_country")
                    }}
                  >
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add" />
                  </ListItem>

                </List>
              </Collapse>

              {/*-------------------------------------------------------- 
                 Users 
                ---------------------------------------------------------*/}
              <ListItem 
                button 
                selected={selectedIndex === 2}
                onClick={() => {
                  setSelectedIndex(2)
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

function mapStateToProps({auth, user, country}) {
  return {auth, user, country}
}

export default connect(mapStateToProps, actions)(Nav)
