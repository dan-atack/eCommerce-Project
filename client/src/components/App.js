import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <PageStructure>
        <HeaderWrap></HeaderWrap>

        <FilterBarWrap></FilterBarWrap>

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

        <CheckoutBarWrap></CheckoutBarWrap>

        <FooterWrap></FooterWrap>
      </PageStructure>
    </Router>
  );
}

const PageStructure = styled.div`
  /* height:100vw; 
  width:100vh; */
  position: relative;
  display: grid;
`;
const HeaderWrap = styled.div``;
const FilterBarWrap = styled.div``;
const MainWrap = styled.div``;
const CheckoutBarWrap = styled.div``;
const FooterWrap = styled.div``;

export default App;
