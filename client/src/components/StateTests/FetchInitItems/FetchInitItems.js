// No longer a button but a function which will run automatically at the outset...
// KEEP OUTSIDE RENDER ZONE!!
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayLoadState } from '../../../reducers';
import { getInitItems, updateLoadStatus } from '../../../actions';

function FetchInitItems() {
    const dispatch = useDispatch();
    const loading = useSelector(displayLoadState);
    // On initial load, we'll bring in the featured and sale items...
    if (loading === 'idle') {
      fetch('/homepage')
      .then(res => {
        // ... then we'll signal that the data is loading
        dispatch(updateLoadStatus('loading'));
        return res.json();
      })
      .then(items => {
        dispatch(getInitItems(items));
        // ... then stop this process by setting the load status to 'complete' (this runs an infinite loop otherwise!)
        dispatch(updateLoadStatus('complete'));
      })
      return (
        <>
        </>
      );
    }
};

export default FetchInitItems;