import React from 'react';
import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../CartItem';

import testCartItems from './test-cart-items';

const CartBar = () => {
  //test data
  const cartItems = testCartItems;

  // const dispatch = useDispatch();
  //const cartItems = useSelector((state) => state.cartItems.items) //if not array, change to array: Object.values(state)

  //totals up all prices*quantities
  const total = cartItems.reduce((sum, item) => {
    //removal of "$" & conversion from string to number. 
    //Could be done on Redux addition of item?
    return (sum + (( parseFloat((item.price).replace(/[^\d.]/g, '')) ) * item.quantity))
  }, 0)

  return (
    <StyledDiv styles={{display: cartItems.length? 'flex': 'hidden'}}>
      <div>
      <Header>
        <h1>Cart</h1>
        <ItemCount>
          <p><span>{cartItems.length}</span>Items</p>
          <ClearButton
            onClick={()=>console.log('dispatch clear-items')}
          >
            Clear Cart
          </ClearButton>
        </ItemCount>
      </Header>
      <CartItems>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity} //created and modified in redux. Cannot exceed numInStock
            stock={item.numInStock}
            imageSrc={item.imageSrc}
          />
        ))}
      </CartItems>
      </div>
      <Total>
        <p>Total: <span>${total.toFixed(2)}</span></p>
        <CheckoutButton
          onClick={()=> {
            //open modal
            //update some purchasing state.status to 'checkout'?
          }}
        >
          Checkout
        </CheckoutButton>
      </Total>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  position: sticky;
  top: 0;
  height:100%;
  flex-direction: column;
  justify-content: space-between;
  padding: .5rem;
`;
const Header = styled.div`
  h1 {
    color: whitesmoke;
    text-shadow: 4px 8px 25px #000000, 
    0px 4px 4px rgba(0, 0, 0, 0.5), 
    1px 2px 2px rgba(0, 0, 0, 0.75);
  }
`;
const ItemCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom: .5rem;
  span{
    font-weight: bold;
    margin: 0 .15rem;
  }
`;
///note to self: make standardized button component to reuse everwhere
const ClearButton = styled.button`
  border-radius: 10px;
  margin: 0 1rem;
  font-size:.75rem;
  /* font-weight: bold; */
  background: maroon;
  color: lightgray;
  border: none;
`;
const CartItems = styled.div`
  max-height: 65vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
const Total = styled.div`
  position: sticky;
  bottom: 0;
  margin: 1rem .5rem 1rem 0;
  font-weight: bold;
  color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CheckoutButton = styled.button`
  border-radius: 10px;
  font-weight: bold;
  padding: .25rem .5rem;
  color: whitesmoke;
  background: maroon;
  border: none;

`;

export default CartBar;