import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchList from '../SearchList';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');
  const [returnValues, setReturnValues] = useState(null);
  useEffect(() => {
    if (searchInput.length < 2) {
      setReturnValues(null);
      return;
    }
    fetch(`/products/search/${searchInput}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setReturnValues(res);
        console.log(returnValues);
      });
  }, [searchInput]);
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${searchInput}`);
  };
  return (
    <>
      <Wrapper>
        <StyledForm autoComplete="off">
          <SearchBox>
            <StyledInput
              type="text"
              onChange={(e) => setSearchInput(e.target.value)}
              name="searchTerm"
              placeholder="What are you shopping for?"
            />
            <SearchList returnValues={returnValues} />
          </SearchBox>
          <StyledButton type="submit" onClick={handleSearch}>
            Search
          </StyledButton>
        </StyledForm>
      </Wrapper>
    </>
  );
};

const StyledInput = styled.input`
  /* width: 75%; */
  padding: 4px;
  font-size: 1rem;
  height: 100%;
  flex-grow: 2;
  &:focus {
    outline: none;
  }
`;
const StyledButton = styled.button`
  width: 15%;
  padding: 4px;
  margin-left: 5px;
  height: 100%;
`;
const StyledForm = styled.form`
  height: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 4px 8px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  &:focus-within > ul {
    display: block;
  }
`;
export default SearchBar;
