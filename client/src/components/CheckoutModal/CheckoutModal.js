import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Container from '@material-ui/core/Container';
import DialogContent from '@material-ui/core/DialogContent';

import ModalContent from './ModalContent';
import ModalForm from './ModalForm';
import { clearPurchase, } from '../../actions';


//styles for the modal elements(neccessary for material-ui modal)
const useStyles = makeStyles({
  container: {
    margin: '0',
    padding: '0',
  },
});

const CheckoutModal = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => Object.values(state.cartItems.items)); 
  //changed to array via: Object.values(state)
  const status = useSelector((state) => state.cartItems.status);

  const total = cartItems.reduce((sum, item) => {
    //removal of "$" & conversion from string to number. 
    return (sum + (( parseFloat((item.price).replace(/[^\d.]/g, '')) ) * item.quantity))
  }, 0)

  const classes = useStyles();
// modal is opened when open prop is true, 
// checkout button makes status === 'start-purchase'
  return (
    <Dialog
    open={
      status === 'start-purchase'
      || status === 'submitting-order'
      || status === 'error'
    } 
    onClose={() => {dispatch(clearPurchase())}}
    >
      <Container className={classes.container}>
        <Title>Checkout</Title>
        <ModalContent cartItems={cartItems}/>
        <DialogContent>
          {`${cartItems.length} item(s) Total: $${total}`}
        </DialogContent>
        <ModalForm cartItems={cartItems} total={total} />
      </Container>
    </Dialog>
  )
};

const Title = styled.h1`
  margin: 1rem;
`;

export default CheckoutModal;
