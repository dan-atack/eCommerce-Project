import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  container: {
    margin: '0',
    padding: '0',
  },
  table: {
    margin: '1rem 0 2rem 0',
  },
  bold: {
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
  },
  font: {
    fontFamily: 'Poppins, sans-serif',
  },
  tableRow: {
    borderBottom: '2px solid lightgray',
  },
});


const ModalContent = ({ cartItems }) => {

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.bold} align="center">
                Name</TableCell>
              <TableCell className={classes.bold} align="center">
                Quantity</TableCell>
              <TableCell className={classes.bold} align="center">
                Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {cartItems.map(item => {
            return (
                <TableRow className={classes.tableRow} key={`${item._id}`}>
                    <TableCell className={classes.font} align="center">
                    {item.name}</TableCell>
                    <TableCell className={classes.font} align="center">
                    {item.quantity}</TableCell>
                    <TableCell className={classes.font} align="center">
                    {item.price}</TableCell>
                </TableRow>
            )
          })}
          </TableBody>
        </Table>
    </TableContainer>
  )
}

export default ModalContent;