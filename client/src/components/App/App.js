import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import GlobalStyles from "../../GlobalStyles";
import CheckoutModal from '../CheckoutModal';
import Category from "../Category";
// get feature/sale item data into state:
import FetchInitItems from '../StateTests/FetchInitItems';
import { parseInitialItems, displayLoadState } from '../../reducers';
import FilterBar from "../FilterBar";
import ItemCard from '../ItemCard';
// Product details is in PAGES directory:
import ProductDetails from '../../pages/ProductDetails';
import CartBar from "../CartBar";

const App = () => {

  // GET INITIAL ITEMS FROM SERVER INTO STATE, THEN FROM STATE INTO AN ARRAY THAT WE CAN MAP:
  FetchInitItems();
  let catalogItems = useSelector(parseInitialItems);
  let loadStatus = useSelector(displayLoadState);
  

  return (
    <Router>
      <PageStructure>
        <GlobalStyles />
        <CheckoutModal/>
        <HeaderWrap>
          <div>head</div>
        </HeaderWrap>

        <FilterBarWrap>
          <FilterBar />
        </FilterBarWrap>

        <MainWrap>
          <Switch>
            <Route exact path="/">
              <h2>Home</h2>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>Sale Items:
                  {(loadStatus == 'complete') ? catalogItems.saleItems.map((item) => {
                    return (
                      <ItemCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      body_location={item.body_location}
                      category={item.category}
                      imageSrc={item.imageSrc}
                      numInStock={item.numInStock}
                      companyId={item.companyId}
                      />
                    );
                  }) :
                  <>
                  </>}
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>Sale Items:
                  {(loadStatus == 'complete') ? catalogItems.featuredItems.map((item) => {
                    return (
                      <ItemCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      body_location={item.body_location}
                      category={item.category}
                      imageSrc={item.imageSrc}
                      numInStock={item.numInStock}
                      companyId={item.companyId}
                      />
                    );
                  }) :
                  <>
                  </>}
                </div>
              </div>
            </Route>
            {/* use queries instead of params here */}
            <Route path="/search">
              <div>Search results</div>
            </Route>
            <Route path="/category/:categoryName">
              <Category />
            </Route>
            <Route path="/product/:productId">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/seller/:sellerId">
              <div>Store</div>
            </Route>
          </Switch>
        </MainWrap>

        <CheckoutBarWrap>
          <CartBar />
        </CheckoutBarWrap>

        <FooterWrap>
          <div>foot</div>
        </FooterWrap>
      </PageStructure>
    </Router>
  );
};

const PageStructure = styled.div`
  height: 100vh;
  /* width:100vh;  */
  /* max-height: 100vh; */
  position: relative;
  display: grid;
  grid-template-areas:
    "head head head"
    "sideleft main sideright"
    "foot foot foot";
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr 6fr 2fr;
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
