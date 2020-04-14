import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchResults, setDisplayItems } from '../../actions';
import ItemCard from '../../components/ItemCard';

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
      <div>Results for {searchTerm}</div>
      {displayItems
        ? displayItems.map((item) => {
            return <ItemCard product={item} />;
          })
        : ''}
    </>
  );
};

export default SearchResults;
