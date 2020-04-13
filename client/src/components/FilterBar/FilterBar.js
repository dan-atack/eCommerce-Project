import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterItems } from "../../actions";

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
  const handleCheckbox = (e, origin) => {
    console.log(origin);
    const key = e.target.name;
    setFilter({
      ...filter,
      [origin]: { ...filter[origin], [key]: e.target.checked },
    });
    return;
  };
  // reset for categories
  const categoryDefault = {
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
    if (key === "All") {
      setFilter({
        ...filter,
        category: { ...categoryDefault },
      });
      return;
    }
    console.log(origin);
    setFilter({
      ...filter,
      category: { ...categoryDefault, [key]: e.target.checked },
    });
    return;
  };
  return (
    <div>
      {" "}
      <ul>
        {" "}
        Body Location
        {Object.keys(filter.bodyLocation).map((location) => {
          const origin = "bodyLocation";
          return (
            <li key={Math.random() * 10000000}>
              <input
                type={"checkbox"}
                name={`${location}`}
                onChange={(e) => handleCheckbox(e, origin)}
                checked={filter.bodyLocation.location}
              ></input>
              <label for={`${location}`}>{location}</label>
            </li>
          );
        })}
      </ul>
      <ul>
        {" "}
        Category
        <li key={Math.random() * 10000000}>
          <input
            type={"radio"}
            name={`category`}
            value="All"
            onChange={(e) => handleRadio(e)}
            // checked={true}
          ></input>
          <label for={"All"}>All</label>
        </li>
        {Object.keys(filter.category).map((location) => {
          const origin = "category";
          return (
            <li>
              <input
                type={"radio"}
                name={`category`}
                value={location}
                onChange={(e) => handleRadio(e, origin)}
                checked={filter.category.location}
              ></input>
              <label for={`${location}`}>{location}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBar;
