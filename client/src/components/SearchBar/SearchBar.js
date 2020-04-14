import React, { useState, useEffect } from "react";
import SearchList from "../SearchList";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
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
      <form>
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          name="searchTerm"
        ></input>
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
      <SearchList returnValues={returnValues} />
    </>
  );
};

export default SearchBar;
