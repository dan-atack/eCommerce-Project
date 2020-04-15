// Function will run when the Item Details page is opened, to ensure the correct item is displayed:
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayDetailLoadState } from '../../../reducers';
import {
  setProductDetailsFromFetch,
  updateDetailLoadStatus,
} from '../../../actions';

// function takes product Id as its argument, then uses this to fetch the item's data:
// function FetchItemDetails(productId) {
//   dispatch(updateDetailLoadStatus('loading'));
//   console.log('fetching');
//   const dispatch = useDispatch();
//   fetch(`/item/${productId}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((item) => {
//       dispatch(setProductDetailsFromFetch(item));
//       dispatch(updateDetailLoadStatus('idle'));
//     });
// }
function FetchItemDetails(productId) {
  console.log('fetch');
  const dispatch = useDispatch();
  //const loading = useSelector(displayDetailLoadState);
  // On initial load, we'll bring in the featured and sale items...
  //if (loading === 'idle') {
  fetch(`/product/${productId}`)
    .then((res) => {
      // ... then we'll signal that the data is loading
      //dispatch(updateDetailLoadStatus('loading'));
      console.log('loading');
      return res.json();
    })
    .then((item) => {
      console.log('happy');
      dispatch(setProductDetailsFromFetch(item));
      // ... then stop this process by setting the load status to 'complete' (this runs an infinite loop otherwise!)
      dispatch(updateDetailLoadStatus('complete'));
    });
  return <></>;
}

export default FetchItemDetails;
