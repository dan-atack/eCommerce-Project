import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchList = ({ returnValues }) => {
  return (
    <ul>
      {returnValues
        ? returnValues.map((item, id) => {
            return (
              <>
                {id < 9 ? (
                  <li>
                    <Link key={item.id} to={`/product/${item.id}`}>
                      {item.name}
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </>
            );
          })
        : ""}
    </ul>
  );
};

export default SearchList;
