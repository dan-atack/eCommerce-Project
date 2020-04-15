import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setQty, removeItem } from '../../actions';

const CartItem = ({ id, name, price, quantity, stock, imageSrc }) => {


  const dispatch = useDispatch();
  let amount = quantity;

  return (
    <StyledDiv>
      <img src={imageSrc} alt='item'/>
      <InfoDiv>
        <Title>
          <StyledLink to={`/product/${id}`} >{name}</StyledLink>
          <StyledButton
            onClick={() => {
              dispatch(removeItem(id))
            }}
          >
            X
          </StyledButton>
        </Title>
        <p>
          Quantity: <span>{amount}</span>
          <StyledButton
            onClick={() => {
              //stops increasing beyond stock levels (Maxspan appears when at max)
              if(amount < stock){
                amount ++;
                console.log(amount);
                dispatch(setQty(id, amount))
              }
            }}
          >▲</StyledButton>
          <StyledButton
          onClick={() => {
            //stops decreasing below 1
            if(amount > 0){
              amount --;
              dispatch(setQty(id, amount))
            }
          }}
          >▼</StyledButton>
          <MaxSpan style={{visibility: amount===stock ? "visible" : "hidden"}}>
            max
          </MaxSpan>
        </p>
        <p>@ {price}</p>
      </InfoDiv>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin: .25rem 0;
  padding: .5rem;
  border: 1px solid gray;
  background: white;
  font-size: .65rem;
  img {
    max-height: 3rem;
    max-width: 3rem;
    margin-right: .5rem;
  }
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-weight: bold;
    margin-right: .5rem;
    text-decoration: underline;
  }
`;
const Title = styled.p`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  font-size: .70rem;
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
//need to make some standardized button css or component
const StyledButton = styled.button`
  border-radius: 50%;
  height: .8rem;
  width: .8rem;
  margin-right: .10rem;
  font-size: .4rem;
  font-weight: bold;
  background: maroon;
  border: none;
  color: whitesmoke;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover{
    cursor: pointer;
  }
`;
//if keeping; alter so does not push "quantity" over on appearance
const MaxSpan = styled.span`
  font-size: .5rem;
  text-decoration: none;
  color: maroon;
`;

export default CartItem;