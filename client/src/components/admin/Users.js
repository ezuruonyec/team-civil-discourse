import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, ThemeProvider} from "@material-ui/core"
import {connect} from "react-redux"
import axios from 'axios';
import AddUser from "./AddUser"
import * as actions from "../../actions"
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHead: {
      backgroundColor: grey[800]
  },
  tableHeadCell: {
      color: "#FFFFFF"
  }
});


function Users({user, getAllUsers}) {
  const classes = useStyles();

    useEffect(() => {
        getAllUsers()
    }, [user])

  return (
    <div>
       <AddUser />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableHeadCell}>Name</TableCell>
            <TableCell className={classes.tableHeadCell}>Email</TableCell>
            <TableCell className={classes.tableHeadCell}>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user) => (
            <TableRow key={user.displayName}>
              <TableCell>{user.displayName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.googleId === "" ? "Pending" : "Active"}</TableCell>
              <TableCell><Button>Edit</Button><Button>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

function mapStateToProps({user}) {
    return {user}
  }
  
  export default connect(mapStateToProps, actions)(Users)
  