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
import { grey, indigo } from '@material-ui/core/colors';
import CountryTable from './CountryTable';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import TableChartIcon from '@material-ui/icons/TableChart';
import { getCountry } from '../../actions';
import * as actions from "../../actions"
import Dashboard from './Dashboard';
import { useHistory } from 'react-router-dom'


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${drawerWidth}px)`,
    height: 50,
    backgroundColor: "#FFFFFF",
    color: "#333333",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderBottom: "1px #e1e1e1 solid"
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
    marginTop: theme.spacing(5)
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
  active:  {
    backgroundColor: "red"
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
  header: {
    fontSize: 20,
    height: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: indigo[500],
    color: "#FFFFFF"
  }
  
}));

function Nav({auth, country}) {

  let history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    getCountry()
    
}, [])

  const [display, setDisplay] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null)
  const [headerText, setHeaderText] = useState("Dashboard")

  const renderContent = () => {
    switch (display) {
      
      case "countries": 
        return (
          <>
          {getCountry()}
        <CountryTable countryData={setData} disp={setDisplay} />
        </>
        )
      case "add_country": 
        return <CountryForm disp={setDisplay} index={setSelectedIndex} mode="add" headerText={setHeaderText} />
      case "edit_country":
        return <CountryForm disp={setDisplay} index={setSelectedIndex} mode="edit" data={data} headerText={setHeaderText} />
      case "users": 
        return <Users />
      default:
        return <Dashboard />

    }

  }


  return (
    <div className={classes.root}>
      <CssBaseline />


      <AppBar position="absolute" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6"  noWrap>
            {headerText}
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
        <Typography variant="h1" className={classes.header} align="center">Admin Dashboard</Typography>
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
                 Dashboard 
                ---------------------------------------------------------*/}
              <ListItem 
                button 
                selected={selectedIndex === 0}
                onClick={() => {
                  setSelectedIndex(0)
                  setDisplay("dashboard")
                  setHeaderText("Dashboard")
                }}
              >
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>

          
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
                    selected={selectedIndex === 1}
                    onClick={() => {
                      setSelectedIndex(1)
                      setDisplay("countries")
                      setHeaderText("Countries")
                    }}
                  >
                    <ListItemIcon >
                      <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Table" />
                  </ListItem>

                  <ListItem 
                    button 
                    selected={selectedIndex === 2}
                    className={classes.nested}
                    onClick={() => {
                      setSelectedIndex(2)
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
                selected={selectedIndex === 3}
                onClick={() => {
                  setSelectedIndex(3)
                  setDisplay("users")
                  setHeaderText("Users")
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
