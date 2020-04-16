import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchResults, setDisplayItems } from '../../actions';

import ItemDisplay from '../../components/ItemDisplay';

function CompanyPage() {
  const { companyId } = useParams();

  const [companyItems, setCompanyItems] = useState([]);
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    // fetches the company's name purely to display it
    fetch(`/companyName/${companyId}`)
      .then((res) => res.json())
      .then((data) => setName(data.companyName))
      .then(
        // fetches the items sold by that company
        fetch(`/products/sort/${companyId}`)
          .then((res) => res.json())
          .then((data) => setCompanyItems(data))
      );
  }, [companyId]);

  // sets the state to be the company's items
  useEffect(() => {
    dispatch(searchResults(companyItems));
    dispatch(setDisplayItems(companyItems));
  }, [companyItems]);

  return (
    <>
      <h2>All products by {name} :</h2>
          <ItemDisplay />
    </>
  );
}

export default CompanyPage;
