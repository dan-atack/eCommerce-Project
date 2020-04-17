import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NavCategory from './NavCategory';

import { useSelector } from 'react-redux';
import logo from '../../assets/GadgetGrotto.png';
import darkLogo from '../../assets/GadgetGrottoDark.png';
import { useAuth0 } from '../../auth0/react-auth0-spa';
import ProfilePicture from '../ProfilePicture';

function Navbar() {
  const COLORS = useSelector((state) => state.designSetting);
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

  // authetication
  const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();

  // Styled components

  return (
    <>
      <LoginAndOut>
        {!isAuthenticated && (
          <Authenticators onClick={() => loginWithPopup({})} COLORS={COLORS}>
            Log in
          </Authenticators>
        )}

        {isAuthenticated && <ProfilePicture />}
      </LoginAndOut>

      <NavWrapper>
        <Link to="/">
          <LogoBG COLORS={COLORS}>
            <Logo
              src={
                COLORS.logo === 'base'
                  ? logo
                  : COLORS.logo === 'dark'
                  ? darkLogo
                  : logo
              }
              alt="logo"
            />
          </LogoBG>
        </Link>
        <Link to="/">
          <NavContent COLORS={COLORS}>Home</NavContent>
        </Link>

        {/* the dropdown menu. The items are generated separately in another component through array.map() */}
        {/* had to be done as Dropdown.Toggle (old method) instead of DropdownButton (new method) to allow for styling */}
        <Dropdown>
          <Dropdown.Toggle as={NavContent} COLORS={COLORS}>
            Products
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {categories.map((category) => {
              return <NavCategory category={category} />;
            })}
          </Dropdown.Menu>
        </Dropdown>

        <Link to="/order-confirm/search">
          <NavContent COLORS={COLORS}>Order History</NavContent>
        </Link>
      </NavWrapper>
    </>
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
    border-bottom: ${(props) => props.COLORS.filter} solid 2px;
    background-color: ${(props) => props.COLORS.main};
  }
  @media (max-width: 504px) {
    height: 108px;
    position: relative;
  }
`;
const NavContent = styled.div`
  padding: 10px;
  margin: 51px 0px 0px;
  font-size: 1.5em;
  color: ${(props) => props.COLORS.main};
  transition: background-color 500ms;
  border-radius: 3px;
  border-bottom: transparent solid 2px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.COLORS.header};
    border-bottom: ${(props) => props.COLORS.filter} solid 2px;
    background-color: ${(props) => props.COLORS.main};
  }
  @media (max-width: 504px) {
    margin: 0px;
  }
`;

const Authenticators = styled.div`
  color: ${(props) => props.COLORS.main};
  font-size: 1.5em;

  transition: background-color 500ms;
  border-radius: 3px;
  padding: 10px;

  &:hover {
    color: ${(props) => props.COLORS.header};
    border-bottom: ${(props) => props.COLORS.filter} solid 2px;
    background-color: ${(props) => props.COLORS.main};
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: whitesmoke;

    &:hover {
      color: black;
    }
  }
`;

const LoginAndOut = styled.div`
  position: fixed;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
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
  @media (max-width: 504px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Navbar;
