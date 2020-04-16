import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../actions';
import { COLORS } from '../../constants';

function AddToCartButton({ item }) {
  const COLORS = useSelector((state) => state.designSetting);
  const dispatch = useDispatch();

  const StyledButton = styled.button`
    color: whitesmoke;
    font-size: 24px;
    background-color: ${COLORS.addToCartPink};
    height: 72px;
    width: 174px;
    margin: 24px;
    border-radius: 8px;
    border: 1px solid ${COLORS.header};
    grid-area: buy;
  `;
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

export default AddToCartButton;
