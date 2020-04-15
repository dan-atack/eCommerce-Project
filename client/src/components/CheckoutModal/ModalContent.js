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
  tableHead: {
    fontWeight: 'bold',
  },
  tableRow: {
    borderBottom: '2px solid lightgray',
  },
  text: {
    margin:'1rem .5rem 0 0',
  },
});


const ModalContent = ({ cartItems }) => {

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow className={classes.tableRow}>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {cartItems.map(item => {
            return (
                <TableRow className={classes.tableRow} key={`${item.id}`}>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="center">{item.price}</TableCell>
                </TableRow>
            )
          })}
          </TableBody>
        </Table>
    </TableContainer>
  )
}

export default ModalContent;