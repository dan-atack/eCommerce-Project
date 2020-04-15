import React from 'react';
import styled from 'styled-components';

import { IoMdPizza } from "react-icons/io";
import { IoMdPaw } from "react-icons/io";
import { IoMdPint } from "react-icons/io";

const ContactUs = () => {
  return (
  <CenterParent>
    <StyledDiv>
      <h2>Contact Us</h2>
      <em>Issues? Accolades? Get in touch!</em>
      <p><span>Email:</span> definitelyreal@notnotreal.com</p>
      <p><span>Call:</span> 1800 1337 1337</p>
      <p><span>Social Media:</span></p>
      <Social>
        <p><IoMdPizza/> <span>FacePizza</span></p>
        <p><IoMdPaw/> <span>Critter</span></p>
        <p><IoMdPint/> <span>InstaPint</span></p>
      </Social>
    </StyledDiv>
  </CenterParent>
  )
};

const CenterParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  margin: 0;
`;
const StyledDiv = styled.div`
  width: 90%;
  height: 90%;
  background: whitesmoke;
  box-shadow: 2px 5px 10px 0px #0B325E;
  border-radius: 5px;
  padding: 1rem;
  h2 {
    margin-bottom: .75rem;
  }
  p {
    margin: .5rem 0;
  }
  span {
    font-weight: bold;
    
  }
`;

const Social = styled.div`
  margin: 1rem 1rem;
  font-size: 1.5rem;
  color: #2e4052;
  span {
    font-weight: bold;
    font-size: .8rem;
    margin-left: .5rem;
    vertical-align: text-top;
  }
  p {
    &:hover{
      cursor: pointer;
    }
  }
`;

export default ContactUs; 