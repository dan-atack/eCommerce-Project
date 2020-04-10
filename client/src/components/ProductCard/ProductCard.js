import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Wrapper to={`/product/${product.id}`}>
      <img src={product.imageSrc} />
      <div>{product.name}</div>
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
  &:hover {
    text-decoration: underline;
    transform: scale(1.01);
  }
`;
export default ProductCard;
