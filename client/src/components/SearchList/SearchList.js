import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchList = ({ returnValues }) => {
  return (
    <StyledUl>
      {returnValues
        ? returnValues.map((item, id) => {
            return (
              <>
                {id < 9 ? (
                  <StyledLi>
                    <StyledLink key={item.id} to={`/product/${item.id}`}>
                      {item.name}
                      <StyledSpan>{` in ${item.category}`}</StyledSpan>
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
  width: 95%;
`;
const StyledSpan = styled.span`
  font-size: 0.6rem;
`;
const StyledLi = styled.li`
  padding: 4px;
  background: white;
  &:hover {
    background: hsl(50deg, 100%, 90%);
  }
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
export default SearchList;
