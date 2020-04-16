import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { filterItems } from '../../actions';
import { FaFilter } from 'react-icons/fa';

import ItemSorter from '../ItemSorter';

const FilterBar = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    bodyLocation: {
      Wrist: false,
      Arms: false,
      Head: false,
      Waist: false,
      Chest: false,
      Hands: false,
      Neck: false,
      Feet: false,
      Torso: false,
    },
    category: {
      All: true,
      Fitness: false,
      Medical: false,
      Lifestyle: false,
      Entertainment: false,
      Industrial: false,
      PetsAndAnimals: false,
      Gaming: false,
    },
  });
  // useEffect to dispatch whenever any value of the filters change
  useEffect(() => {
    dispatch(filterItems(filter));
  }, [filter]);

  // function to handle checkboxes (body location) filters
  const handleCheckbox = (e) => {
    const key = e.target.name;
    setFilter({
      ...filter,
      bodyLocation: {
        ...filter['bodyLocation'],
        [key]: !filter['bodyLocation'][key],
      },
    });
    return;
  };
  // reset for categories
  const categoryDefault = {
    All: true,
    Fitness: false,
    Medical: false,
    Lifestyle: false,
    Entertainment: false,
    Industrial: false,
    PetsAndAnimals: false,
    Gaming: false,
  };

  // function to handle radio button (category) filters
  const handleRadio = (e, origin) => {
    const key = e.target.value;
    console.log(key);
    if (key === 'All') {
      setFilter({
        ...filter,
        category: { ...categoryDefault },
      });
      return;
    }
    console.log(origin);
    setFilter({
      ...filter,
      category: {
        ...categoryDefault,
        [key]: e.target.checked,
        All: false,
      },
    });
    return;
  };
  // these states are just used to toggle the filter collapsibles
  const [catdrop, setCatdrop] = React.useState(false);
  const [locdrop, setLocdrop] = React.useState(false);

  return (
    <StyledDiv>
      <ItemSorter/>
      <FaFilter />
      <p>
        <button onClick={() => setCatdrop(!catdrop)}>
          {catdrop ? '⮛' : '⮚'}
        </button>
        Category
      </p>
      <StyledUl style={{ maxHeight: catdrop ? 'fit-content' : 0 }}>
        {Object.keys(filter.category).map((location) => {
          const origin = 'category';
          return (
            <li>
              <input
                type={'radio'}
                name={`${location}`}
                id={`${location}`}
                value={location}
                onChange={(e) => handleRadio(e, origin)}
                checked={filter.category[location]}
              ></input>
              <label for={`${location}`}>{location}</label>
            </li>
          );
        })}
      </StyledUl>

      <p>
        <button onClick={() => setLocdrop(!locdrop)}>
          {locdrop ? '⮟' : '⮞'}
        </button>
        Body Location
      </p>
      <StyledUl style={{ maxHeight: locdrop ? 'fit-content' : 0 }}>
        {Object.keys(filter.bodyLocation).map((location) => {
          return (
            <li key={Math.random() * 10000000}>
              <input
                type={'checkbox'}
                name={`${location}`}
                id={`${location}`}
                onChange={handleCheckbox}
                checked={filter['bodyLocation'][location]}
              ></input>
              <label for={`${location}`}>{location}</label>
            </li>
          );
        })}
      </StyledUl>
      
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  font-size: 0.75rem;
  padding: 0.25rem;
  p {
    font-weight: bold;
    font-size: 0.85rem;
    margin: 0.75rem 0 0.25rem;
  }
  button {
    background: none;
    border: none;
  }
`;

const StyledUl = styled.ul`
  overflow: hidden;
  width: 90%;
  min-width: fit-content;
  margin: 0 auto;
  background: whitesmoke;
  border-radius: 5px;
`;

// ⯈ ⮞ ⮚
// ⯆ ⮟ ⮛

export default FilterBar;
