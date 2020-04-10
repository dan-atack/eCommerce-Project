// No longer a button but a function which will run automatically at the outset?!

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFeatItems } from '../../../actions';
import { displayFeaturedItems } from '../../../reducers';

function GetFeatState() {
    const dispatch = useDispatch();
    // On load, we'll bring in the featured items and just console log them for starters, to test the catalogReducer:
    fetch('/homepage')
    .then(res => {
      return res.json();
    })
    .then(feats => dispatch(getFeatItems(feats)))

    const featuredItems = useSelector(displayFeaturedItems)

  return(
    <>
      <div>{featuredItems}</div>
    </>
  )

};

export default GetFeatState;