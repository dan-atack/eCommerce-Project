import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <CenterParent>
      <StyledDiv>
        <h2>About Us</h2>
        <p>
          {' '}
          The Shady App Company has had a long history of web development since
          it's founding in 1818.{' '}
        </p>
        <p>
          This E-Commerce site is brought to you by the collaborative efforts of
          the founding members:
        </p>
        <a href={'https://github.com/dan-atack'} target='_blank'>
          <p>Daniel Atack</p>
        </a>
        <a href={'https://github.com/RonyKordahi'} target='_blank'>
          <p>Rony Kordhani</p>
        </a>
        <a href={'https://github.com/CraigNock'} target='_blank'>
          <p>Craig Nockels</p>
        </a>
        <a href={'https://github.com/PaulSusset'} target='_blank'>
          <p>Paul Susset</p>
        </a>
      </StyledDiv>
    </CenterParent>
  );
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
  box-shadow: 2px 5px 10px 0px #0b325e;
  border-radius: 5px;
  padding: 1rem;
  p {
    margin: 0.5rem 0;
    @media (max-width: 400px) {
      margin-top: 1rem;
    }
  }
  a {
    text-decoration: none;
    color: #2e4052;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export default AboutUs;
