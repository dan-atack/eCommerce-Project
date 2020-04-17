import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../actions';

function AddToCartButton({ item }) {
  const COLORS = useSelector((state) => state.designSetting);
  const dispatch = useDispatch();

  return (
    <StyledButton
      onMouseUp={() => {
        dispatch(addItemToCart(item));
      }}
      COLORS={COLORS}
    >
      Add Item To Cart
    </StyledButton>
  );
}
const StyledButton = styled.button`
  color: whitesmoke;
  font-size: 24px;
  background-color: ${(props) => props.COLORS.addToCartPink};
  height: 72px;
  width: 174px;
  margin: 24px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.COLORS.header};
  grid-area: buy;
`;

export default AddToCartButton;
