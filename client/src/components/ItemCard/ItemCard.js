import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetails } from '../../actions';
import AddToCartButton from '../AddToCartButton';

const ItemCard = ({item}) => {
  const dispatch = useDispatch();

  const { id, name, price, body_location, category, imageSrc, numInStock, companyId } = item;

  return (
    <Wrapper onClick={() => dispatch(setProductDetails(id))}
    to={`/product/${id}`}>
      <img src={imageSrc} />
      <div>{name}</div>
      {/* <AddToCartButton item={props}/> */}
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
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
