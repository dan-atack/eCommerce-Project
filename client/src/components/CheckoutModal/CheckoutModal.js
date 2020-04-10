import React from 'react';
import Dialog from '@material-ui/core/Dialog';
// import { useDispatch, useSelector } from 'react-redux';

import ModalContent from './ModalContent';

import testCartItems from '../CartBar/test-cart-items';

const CheckoutModal = () => {

  const cartItems = testCartItems;
  // const dispatch = useDispatch();
  //const cartItems = useSelector((state) => state.cartItems.items) //if not array, change to array: Object.values(state)

  const total = cartItems.reduce((sum, item) => {
    //removal of "$" & conversion from string to number. 
    //Could be done on Redux addition of item?
    return (sum + (( parseFloat((item.price).replace(/[^\d.]/g, '')) ) * item.quantity))
  }, 0)

  return (
    <Dialog
    open={true} 
    onClose={console.log('cancelBookingProcess')}
    >
      <Container className={classes.container}>
        <Title>Checkout</Title>
        <ModalContent cartItems={cartItems}/>
        <DialogContent>
          {`${cartItems.length} item(s), Total: $${total}`}
        </DialogContent>

      </Container>
    </Dialog>
  )
};

const Title = styled.h1`
  margin: 1rem;
`;

export default CheckoutModal;