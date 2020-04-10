import React from 'react';
import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Container from '@material-ui/core/Container';
import DialogContent from '@material-ui/core/DialogContent';

import ModalContent from './ModalContent';
import ModalForm from './ModalForm';

import testCartItems from '../CartBar/test-cart-items';


const useStyles = makeStyles({
  container: {
    margin: '0',
    padding: '0',
    
  },
  table: {
    margin: '1rem 0 2rem 0',
  },
  tableRow: {
    borderBottom: '2px solid lightgray',
  },
  text: {
    margin:'1rem .5rem 0 0',
  },
});


const CheckoutModal = () => {

  const cartItems = testCartItems;
  // const dispatch = useDispatch();
  //const cartItems = useSelector((state) => state.cartItems.items) //if not array, change to array: Object.values(state)

  const total = cartItems.reduce((sum, item) => {
    //removal of "$" & conversion from string to number. 
    //Could be done on Redux addition of item?
    return (sum + (( parseFloat((item.price).replace(/[^\d.]/g, '')) ) * item.quantity))
  }, 0)

  const classes = useStyles();
  return (
    <Dialog
    open={false} 
    onClose={console.log('cancelBookingProcess')}
    >
      <Container className={classes.container}>
        <Title>Checkout</Title>
        <ModalContent cartItems={cartItems}/>
        <DialogContent>
          {`${cartItems.length} item(s) Total: $${total}`}
        </DialogContent>
        <ModalForm cartItems={cartItems} />
      </Container>
    </Dialog>
  )
};

const Title = styled.h1`
  margin: 1rem;
`;

export default CheckoutModal;
