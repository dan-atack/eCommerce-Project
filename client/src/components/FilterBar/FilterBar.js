import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { filterItems } from '../../actions';
import {FaFilter} from 'react-icons/fa';

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
  return (
    <StyledDiv>
      <FaFilter/>
      
      <p>Category</p>
      <StyledUl>
        {/* <li key={Math.random() * 10000000}>
          <input
            type={'radio'}
            name={`category`}
            value="All"
            onChange={(e) => handleRadio(e)}
            // checked={true}
          ></input>
          <label for={'All'}>All</label>
        </li> */}
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

      <p>Body Location</p>
      <StyledUl>
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
  width: fit-content;
  font-size: .75rem;
  padding: .25rem;
  p {
    font-weight: bold;
    margin: .75rem 0 .1rem;
  }
`;
const StyledUl = styled.ul`
`;


// ⯈ ⮞ ⮚

// ⯆ ⮟ ⮛


export default FilterBar;
