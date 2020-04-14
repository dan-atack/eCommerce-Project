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
      <StyledForm autocomplete="off">
        <input type="text" style={{ display: 'none' }} />
        <input type="password" style={{ display: 'none' }} />
        <StyledInput
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          name="searchTerm"
          placeholder="What are you shopping for?"
        ></StyledInput>
        <StyledButton type="submit" onClick={handleSearch}>
          Search
        </StyledButton>
      </StyledForm>
      <SearchList returnValues={returnValues} />
    </>
  );
};

const StyledInput = styled.input`
  width: 75%;
  padding: 4px;
  font-size: 1rem;
  height: 100%;
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
`;
export default SearchBar;
