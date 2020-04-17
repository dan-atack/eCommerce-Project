import React from 'react';
import styled from 'styled-components';

const NoResults = () => {
  return (
    <Wrapper>
      <h3>No results found</h3>
      <StyledP>
        Try adjusting the filters or making another search to see more of our
        awesome products!
      </StyledP>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 25px;
  border: 1px black solid;
  margin: 10px;
  border-radius: 6px;
`;
const StyledP = styled.p`
  text-align: center;
  padding-top: 15px;
`;

export default NoResults;
