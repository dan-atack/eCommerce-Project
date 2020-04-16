import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchResults, setDisplayItems } from '../../actions';
import SearchBar from '../../components/SearchBar';

import Spinner from '../../components/Spinner';
import ItemDisplay from '../../components/ItemDisplay';

const Category = () => {
  const { categoryName } = useParams();
  let displayItems = useSelector((state) => state.filters.displayItems);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    // fetching products by category
    fetch(`/products/${categoryName}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, [categoryName]);
  useEffect(() => {
    dispatch(searchResults(products));
    dispatch(setDisplayItems(products));
  }, [products]);

  // conditional rendering based on fetch coming through.
  // Probably want to make a loading component for the else
  return (
    <>
      {products ? (
        <>
          <SearchBar />
          <Title>{categoryName}</Title>
          {displayItems ? <ItemDisplay /> : ''}
        </>
      ) : (
        <Spinner size={50} />
      )}
    </>
  );
};

const Title = styled.h2`
  padding: 1rem;
  color: whitesmoke;
  text-shadow: 4px 8px 25px #616161, 0px 4px 4px rgba(0, 0, 0, 0.3),
    1px 2px 2px rgba(0, 0, 0, 0.5);
`;

// const ItemDisplay = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
// `;

export default Category;
