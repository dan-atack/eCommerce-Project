import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <StyledDiv>
      <StyledLink to={'/about'} >About Us</StyledLink> | 
      <StyledLink to={'/contact'} >Contact Us</StyledLink>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: gray;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
  margin: 0 .5rem;
`;

export default Footer;