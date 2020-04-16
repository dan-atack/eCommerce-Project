import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, startPurchase } from '../../actions';

import CartItem from '../CartItem';

const CartBar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) =>
    Object.values(state.cartItems.items)
  );
  //changed to array via: Object.values(state)

  //totals up all prices*quantities
  const total = cartItems.reduce((sum, item) => {
    //removal of "$" & conversion from string to number.
    return sum + parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity;
  }, 0);

  //cart is "hidden" off to the left unless containing items
  return (
    <StyledDiv style={{ left: cartItems.length > 0 ? '0%' : '100%' }}>
      <div>
        <Header>
          <h1>Cart</h1>
          <ItemCount>
            <p>
              <span>{cartItems.length}</span>Items
            </p>
            <ClearButton onClick={() => dispatch(clearCart())}>
              Clear Cart
            </ClearButton>
          </ItemCount>
        </Header>
        <CartItems>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity} //created and modified in redux.
              stock={item.numInStock}
              imageSrc={item.imageSrc}
            />
          ))}
        </CartItems>
      </div>
      <Total>
        <p>
          Total: <span>${total.toFixed(2)}</span>
        </p>
        <CheckoutButton
          disabled={!(cartItems.length > 0)}
          onClick={() => {
            dispatch(startPurchase()); //this change in status triggers checkout modal popup
          }}
        >
          Checkout
        </CheckoutButton>
      </Total>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: relative;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  transition: left ease-in-out 0.5s;
`;
const Header = styled.div`
  h1 {
    color: whitesmoke;
    text-shadow: 4px 8px 25px #616161, 0px 4px 4px rgba(0, 0, 0, 0.5),
      1px 2px 2px rgba(0, 0, 0, 0.75);
  }
`;
const ItemCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  span {
    font-weight: bold;
    margin: 0 0.15rem;
  }
  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

const ClearButton = styled.button`
  border-radius: 10px;
  margin: 0 1rem;
  font-size: 0.75rem;
  background: maroon;
  color: lightgray;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const CartItems = styled.div`
  max-height: 65vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
const Total = styled.div`
  position: sticky;
  bottom: 0;
  margin: 1rem 0.5rem 1rem 0;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
const CheckoutButton = styled.button`
  border-radius: 10px;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  color: whitesmoke;
  background: maroon;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background: gray;
  }
`;

export default CartBar;
