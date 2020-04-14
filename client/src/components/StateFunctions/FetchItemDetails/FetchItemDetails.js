// Function will run when the Item Details page is opened, to ensure the correct item is displayed:
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayLoadState } from '../../../reducers';
import {
  setProductDetailsFromFetch,
  updateDetailLoadStatus,
} from '../../../actions';

function FetchItemDetails(productId) {
  // function takes product Id as its prop, then uses this to fetch the item's data:
  const dispatch = useDispatch();
  const loading = useSelector(displayLoadState);
  if (loading === 'idle') {
    console.log('fetching');
    fetch(`/item/${productId}`)
      .then((res) => {
        // ... then we'll signal that the data is loading
        dispatch(updateDetailLoadStatus('loading'));
        return res.json();
      })
      .then((item) => {
        console.log(item);
        dispatch(setProductDetailsFromFetch(item));
        // ... then stop this process by setting the load status to 'complete'
        dispatch(updateDetailLoadStatus('idle'));
      });
    return <></>;
  }
}

export default FetchItemDetails;
