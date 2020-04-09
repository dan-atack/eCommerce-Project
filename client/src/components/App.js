import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



function App() {


  return (
    <PageStructure>
      <HeaderWrap>

      </HeaderWrap>

      <FilterBarWrap>

      </FilterBarWrap>

      <MainWrap>
        <div>SearchBar</div>
        <div>ItemDisplay</div>
      </MainWrap>

      <CheckoutBarWrap>

      </CheckoutBarWrap>

      <FooterWrap>

      </FooterWrap>
    </PageStructure>
  );
};

const PageStructure = styled.div`
  /* height:100vw; 
  width:100vh; */
  position: relative;
  display: grid;

`;
const HeaderWrap = styled.div`

`;
const FilterBarWrap = styled.div`

`;
const MainWrap = styled.div`

`;
const CheckoutBarWrap = styled.div`

`;
const FooterWrap = styled.div`

`;


export default App;
