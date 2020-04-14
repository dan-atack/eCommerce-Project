import React, { useEffect, useState } from 'react';
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
          <h2>{categoryName}</h2>
          {products.map((item) => {
            // to be changed with item card component
            return <ItemCard key={item.id} product={item} />;
          })}
        </>
      ) : (
        <Spinner size={50} />
      )}
    </>
  );
};

export default Category;
