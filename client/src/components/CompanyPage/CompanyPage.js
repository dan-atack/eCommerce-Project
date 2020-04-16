import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { searchResults, setDisplayItems } from '../../actions';

import ItemCard from '../ItemCard';
function CompanyPage() {
  const { companyId } = useParams();

  const [companyItems, setCompanyItems] = useState([]);
  const [name, setName] = useState('');

  let displayItems = useSelector((state) => state.filters.displayItems);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/companyName/${companyId}`)
      .then((res) => res.json())
      .then((data) => setName(data.companyName))
      .then(
        fetch(`/products/sort/${companyId}`)
          .then((res) => res.json())
          .then((data) => setCompanyItems(data))
      );
  }, [companyId]);

  useEffect(() => {
    dispatch(searchResults(companyItems));
    dispatch(setDisplayItems(companyItems));
  }, [companyItems]);

  return (
    <>
      <h2>All products by {name} :</h2>
      <CompanyProducts>
        <Route>
          {displayItems.map((item) => {
            return <ItemCard key={Math.random() * 10000000} product={item} />;
          })}
        </Route>
      </CompanyProducts>
    </>
  );
}
const CompanyProducts = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export default CompanyPage;
