import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchList = ({ returnValues, userInput }) => {
  
  return (
    <StyledUl>
      {returnValues
        ? returnValues.map((item, id) => {
            return (
              <>
                {id < 9 ? (
                  <StyledLi>
                    <StyledLink key={item._id} to={`/product/${item._id}`}>
                      {item.name.toLowerCase().includes(userInput.toLowerCase()) ? 
                      <>
                      <span>{item.name.slice(0, item.name.toLowerCase().indexOf(userInput.toLowerCase()))}</span>
                      <span className="bold">
                        {item.name.slice(item.name.toLowerCase().indexOf(userInput.toLowerCase()),
                        item.name.toLowerCase().indexOf(userInput.toLowerCase()) + userInput.length)}
                      </span>
                      <span>{item.name.slice((item.name.toLowerCase().indexOf(userInput.toLowerCase())) + userInput.length)}</span>
                      <StyledSpan>{` in ${item.category}`}</StyledSpan>
                      </>
                      : item.name}
                    </StyledLink>
                  </StyledLi>
                ) : (
                  ''
                )}
              </>
            );
          })
        : ''}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  width: inherit;
  z-index: 2;
  position: absolute;
  height: 100%;
  top: 35px;
  display: none;
`;
const StyledSpan = styled.span`
  font-size: 0.6rem;
`;
const StyledLi = styled.li`
  padding: 4px;
  background: white;

  .bold {
    font-weight: bold;
  }

  &:hover {
    background: hsl(50deg, 100%, 90%);
  }
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
export default SearchList;
