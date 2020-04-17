import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { sortItems } from '../../actions';

const ItemSorter = () => {
  const dispatch = useDispatch();

  // note option values are stringified so "two" values can be passed
  return (
    <StyledDiv>
      <label>
        Sort By:
        <select
          onChange={(ev) => {
            dispatch(sortItems(ev.target.value));
          }}
        >
          <option value='selected'>Select</option>
          <option value={JSON.stringify({ type: 'name', elv: 'ascending' })}>
            Name - Ascending
          </option>
          <option value={JSON.stringify({ type: 'name', elv: 'descending' })}>
            Name - Descending
          </option>
          <option value={JSON.stringify({ type: 'price', elv: 'ascending' })}>
            Price - Ascending
          </option>
          <option value={JSON.stringify({ type: 'price', elv: 'descending' })}>
            Price - Descending
          </option>
        </select>
      </label>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  margin: 0 0 2rem;
  @media (max-width: 540px) {
    margin-top: 20px;
    margin-right: 16px;
  }
`;

export default ItemSorter;
