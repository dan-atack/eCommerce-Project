import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProductDetailsFromCard } from '../../actions';

const ItemCard = ({ product }) => {
  const dispatch = useDispatch();

  const {
    id,
    name,
    price,
    body_location,
    category,
    imageSrc,
    numInStock,
    companyId,
  } = product;

  return (
    <Wrapper
      onClick={() => dispatch(setProductDetailsFromCard(product))}
      to={`/product/${id}`}
    >
      <img src={imageSrc} />
      <div>{name}</div>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 300px;
  padding: 10px;
  box-shadow: 5px 5px 5px grey, 5px 5px 8px black;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  transition: 250ms ease-in-out;
  background: whitesmoke;
  &:hover {
    text-decoration: underline;
    transform: scale(1.01);
  }
`;

export default ItemCard;
