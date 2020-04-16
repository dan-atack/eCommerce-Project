import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

<<<<<<< HEAD
import logo from '../../assets/Shady-sellers.png';
import NavCategory from './NavCategory';
=======
import logo from "../../assets/Shady-sellers.png"
import NavCategory from "./NavCategory"
import { useAuth0 } from "../../auth0/react-auth0-spa"
>>>>>>> 9d5730ae0584e1996e5177513c229ffa31be4709

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

    // authetication
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (<>
        <LoginAndOut>
            {!isAuthenticated && (
            <Authenticators onClick={() => loginWithRedirect({})}>Log in</Authenticators>
            )}

            {isAuthenticated && (<>
                <Authenticators>
                    <Link to="/profile">Profile</Link>
                </Authenticators>
                <Authenticators onClick={() => logout()}>Log out</Authenticators>
                </>)}
        </LoginAndOut>

        <NavWrapper>
            <Link to="/"><LogoBG><Logo src={logo} alt="logo" /></LogoBG></Link>
            <Link to="/"><NavContent>Home</NavContent></Link>

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
  @media (max-width: 504px) {
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
  @media (max-width: 504px) {
    margin: 0px;
  }
`;

const Logo = styled.img`
  height: 107px;
  position: absolute;
  left: 0;
`;
// =======
//             <Link to="/order-confirm/search"><NavContent>Order History</NavContent></Link>
//         </NavWrapper>
//     </>)
// }

const Authenticators = styled.div `
    color: whitesmoke;
    font-size: 1.5em;

    transition: background-color 500ms;
    border-radius: 3px;
    padding: 10px;

    &:hover {
        border-bottom: crimson solid 2px;
        color: black;
        background-color: lightgray;
        cursor: pointer;
    }
    
    a {
            text-decoration: none;
            color: whitesmoke;
        }
`

const LoginAndOut = styled.div `
    position: fixed;
    right: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
`

const LogoBG = styled.div `
    height: 100%;
    width: 106px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 3px;

    transition: background-color 500ms;
    
    &:hover {
        border-bottom: crimson solid 2px;
        background-color: lightgray;
    }
`

const NavContent = styled.div `
    padding: 10px;
    margin: 51px 0px 0px;
    font-size: 1.5em;
    color: lightgray;
    border-radius: 3px;
    border-bottom: transparent solid 2px;

    transition: background-color 500ms;

    &:hover {
        cursor: pointer;
        color: black;
        border-bottom: crimson solid 2px;
        background-color: lightgray;
    }
`

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
const NavWrapper = styled.div `
    display: flex;
    position: relative;
    justify-content: flex-end;
    z-index: 1;
    height: 100%;
    
    a {
        text-decoration: none;
        color: black;
    }
`
export default Navbar;
