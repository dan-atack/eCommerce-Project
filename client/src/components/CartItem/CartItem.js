import React from 'react';
import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';


const CartItem = ({ id, name, price, quantity, stock, imageSrc }) => {

  // const dispatch = useDispatch();
  
  //state for amount so that amount changes are visibly rendered
    const [amount, setAmount] = React.useState(quantity);
  //triggers rerender on quantity change in Redux
    React.useEffect(()=>{
      console.log('quantity change ', quantity);
      setAmount(parseInt(quantity));
    }, [quantity])

  return (
    <StyledDiv>
      <img src={imageSrc} alt='item'/>
      <InfoDiv>
        <Title>{name}<StyledButton>X</StyledButton></Title>
        <p>
          Quantity: <span>{amount}</span>
          <StyledButton
            onClick={() => {
              if(amount < stock){
                setAmount(n => n + 1);
                //also dispatch quantity increase (id)
              }
            }}
          >▲</StyledButton>
          <StyledButton
          onClick={() => {
            if(amount > 0){
              setAmount(n => n - 1);
              //also dispatch quantity decrease (id)
            }
          }}
          >▼</StyledButton>
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
  border: 1px dotted gray;
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
`;


export default CartItem;