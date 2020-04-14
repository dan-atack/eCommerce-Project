import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../ProductCard";
import Spinner from '../Spinner';
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

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
          {products.map((product) => {
            // to be changed with item card component
            return <ProductDetails key={product.id} product={product} />;
          })}
        </>
      ) : (
        <Spinner size={50} />
      )}
    </>
  );
};

export default Category;
