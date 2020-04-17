import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAuth0 } from '../../auth0/react-auth0-spa';

const ProfilePage = () => {
  const COLORS = useSelector((state) => state.designSetting);

  const { loading, user, logout } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProfileWrapper COLORS={COLORS}>
        <ProfilePic src={user.picture} alt="Profile" />
        <h2>Welcome to Gadget Grotto, {user.name}</h2>
        <h2>
          View your <Link to="/order-confirm/search">Order History</Link>
        </h2>
        <h2 onClick={() => logout()}>
          <Link>Logout</Link>
        </h2>
      </ProfileWrapper>
    </>
  );
};

const ProfilePic = styled.img`
  height: 250px;
  border-radius: 1000px;
  margin-top: 20px;
`;
const ProfileWrapper = styled.div`
  text-align: center;
  color: ${(props) => props.COLORS.header};

  h2 {
    margin: 30px 0px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.COLORS.header};
    padding: 10px;
    border: ${(props) => props.COLORS.header} solid 1.5px;

    &:hover {
      border-radius: 3px;
      cursor: pointer;
      color: ${(props) => props.COLORS.main};
      border-bottom: ${(props) => props.COLORS.filter} solid 2px;
      background-color: ${(props) => props.COLORS.header};
    }
  }
`;
export default ProfilePage;
