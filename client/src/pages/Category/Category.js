import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import ItemCard from '../../components/ItemCard';
import Spinner from '../../components/Spinner';

const Category = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    // fetching products by category
    fetch(`/products/${categoryName}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, [categoryName]);

  // conditional rendering based on fetch coming through.
  // Probably want to make a loading component for the else
  return (
    <>
      {products ? (
        <>
        <Title>{categoryName}</Title>
        <ItemDisplay>
          {products.map((item) => {
            // to be changed with item card component
            return <ItemCard key={item.id} product={item} />;
          })}
        </ItemDisplay>
        </>
      ) : (
        <Spinner size={50} />
      )}
    </>
  );
};

const Title = styled.h2`
  padding:  1rem;
  color: whitesmoke;
  text-align: center;
  text-shadow: 4px 8px 25px #616161, 
    0px 4px 4px rgba(0, 0, 0, 0.3), 
    1px 2px 2px rgba(0, 0, 0, 0.5);
`;

const ItemDisplay = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;


export default Category;
