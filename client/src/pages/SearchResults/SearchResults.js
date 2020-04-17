import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchResults, setDisplayItems } from '../../actions';
import SearchBar from '../../components/SearchBar';
import ItemDisplay from '../../components/ItemDisplay';

const SearchResults = () => {
  let displayItems = useSelector((state) => state.filters.displayItems);
  console.log(displayItems);
  const { searchTerm } = useParams();
  const [returnValues, setReturnValues] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`/products/search/${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setReturnValues(res);
      });
  }, [searchTerm]);
  useEffect(() => {
    dispatch(searchResults(returnValues));
    dispatch(setDisplayItems(returnValues));
  }, [returnValues]);

  return (
    <>
      <SearchBar />
      <h2>Results for "{searchTerm}"</h2>
      {displayItems && <ItemDisplay />}
    </>
  );
};

export default SearchResults;
