import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from '../GlobalStyles';

function App() {
  return (
    <Router>
      <PageStructure>
        <GlobalStyles/>
        <HeaderWrap><div>head</div></HeaderWrap>

        <FilterBarWrap><div>filter</div></FilterBarWrap>

        <MainWrap>
          <Switch>
            <Route exact path="/">
              <div>Home</div>
            </Route>
            {/* use queries instead of params here */}
            <Route path="/search">
              <div>Search results</div>
            </Route>
            <Route path="/category/:categoryName">
              <div>Category</div>
            </Route>
            <Route path="/product/:productId">
              <div>Product details</div>
            </Route>
            <Route path="/seller/:sellerId">
              <div>Store</div>
            </Route>
          </Switch>
        </MainWrap>

        <CheckoutBarWrap><div>checkout</div></CheckoutBarWrap>

        <FooterWrap><div>foot</div></FooterWrap>
      </PageStructure>
    </Router>
    
  );
}

const PageStructure = styled.div`
  height:100vh; 
  /* width:100vh;  */
  max-height: 100vw;
  position: relative;
  display: grid;
  grid-template-areas:
    "head head head"
    "sideleft main sideright"
    "foot foot foot";
  grid-template-rows: 1fr 6fr 1fr ;
  grid-template-columns: 1fr 6fr 2fr ;
`;
const HeaderWrap = styled.div`
  grid-area: head;
  background: grey;
`;
const FilterBarWrap = styled.div`
  grid-area: sideleft;
  background: darkgray;
`;
const MainWrap = styled.div`
  grid-area: main;
  background: whitesmoke;
`;
const CheckoutBarWrap = styled.div`
  grid-area: sideright;
  background: lightslategrey;
`;
const FooterWrap = styled.div`
  grid-area: foot;
  background: grey;
`;


export default App;
