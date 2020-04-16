import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchResults, setDisplayItems } from '../../actions';

import ItemDisplay from '../../components/ItemDisplay';

function CompanyPage() {
  const { companyId } = useParams();

  const [companyItems, setCompanyItems] = useState([]);
  const [name, setName] = useState('');

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
          <ItemDisplay />
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
