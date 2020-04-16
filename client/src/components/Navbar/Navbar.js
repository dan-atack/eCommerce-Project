import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import logo from '../../assets/Shady-sellers.png';
import NavCategory from './NavCategory';

function Navbar() {
  // used to render the dropdown menu
  const [categories, setCategories] = useState([]);

  // fetches all the categories from the back end
  useEffect(() => {
    fetch('/list/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <NavWrapper>
      <Link to='/'>
        <LogoBG>
          <Logo src={logo} alt='logo' />
        </LogoBG>
      </Link>
      <NavCats>
        <Link to='/'>
          <NavContent>Home</NavContent>
        </Link>

        {/* the dropdown menu. The items are generated separately in another component through array.map() */}
        {/* had to be done as Dropdown.Toggle (old method) instead of DropdownButton (new method) to allow for styling */}
        <Dropdown>
          <Dropdown.Toggle as={NavContent}>Products</Dropdown.Toggle>

          <Dropdown.Menu>
            {categories.map((category) => {
              return <NavCategory category={category} />;
            })}
          </Dropdown.Menu>
        </Dropdown>

        <Link to='/order-confirm/search'>
          <NavContent>Order History</NavContent>
        </Link>
      </NavCats>
    </NavWrapper>
  );
}

const LogoBG = styled.div`
  height: 100%;
  width: 106px;
  position: absolute;
  left: 0;
  top: 0;
  transition: background-color 500ms;
  border-radius: 3px;
  &:hover {
    border-bottom: crimson solid 2px;
    background-color: lightgray;
  }
<<<<<<< Updated upstream
  @media (max-width: 504px) {
=======
  @media (max-width: 486px) {
>>>>>>> Stashed changes
    height: 108px;
    position: relative;
  }
`;
// Added this to keep the navlinks separate from the logo on smaller devices:
const NavCats = styled.div`
  display: flex;
`;

const NavContent = styled.div`
  padding: 10px;
  margin: 51px 0px 0px;
  font-size: 1.5em;
  color: lightgray;
  transition: background-color 500ms;
  border-radius: 3px;
  border-bottom: transparent solid 2px;
  &:hover {
    cursor: pointer;
    color: black;
    border-bottom: crimson solid 2px;
    background-color: lightgray;
  }
<<<<<<< Updated upstream
  @media (max-width: 504px) {
=======
  @media (max-width: 486px) {
>>>>>>> Stashed changes
    margin: 0px;
  }
`;

const Logo = styled.img`
  height: 107px;
  position: absolute;
  left: 0;
`;

const NavWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 1;
  height: 100%;

  a {
    text-decoration: none;
    color: black;
  }
<<<<<<< Updated upstream
  @media (max-width: 504px) {
=======
  @media (max-width: 486px) {
>>>>>>> Stashed changes
    flex-direction: column;
    align-items: center;
  }
`;
export default Navbar;
