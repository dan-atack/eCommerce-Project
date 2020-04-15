import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

// new action, ADD TO CART, needed in actions file
import { addItemToCart } from '../../actions';
import { COLORS } from '../../constants';

function AddToCartButton({ item }) {
  const dispatch = useDispatch();
  return (
    <StyledButton
      onMouseUp={() => {
        dispatch(addItemToCart(item));
      }}
    >
      Add Item To Cart
    </StyledButton>
  );
}

const StyledButton = styled.button`
  color: whitesmoke;
  font-size: 24px;
  background-color: ${COLORS.addToCartPink};
  height: 72px;
  width: 174px;
  margin: 24px;
  border-radius: 8px;
  border: 1px solid ${COLORS.borderNoire};
  grid-area: buy;
`;

export default AddToCartButton;
