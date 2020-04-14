import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import GlobalStyles from '../../GlobalStyles';
import Footer from '../Footer';
import CheckoutModal from '../CheckoutModal';
import OrderInfo from '../OrderInfo';
import Category from '../Category';

// get feature/sale item data into state:
import FetchInitItems from '../StateTests/FetchInitItems';
import { parseInitialItems, displayLoadState } from '../../reducers';
import FilterBar from '../FilterBar';
import ItemCard from '../ItemCard';
import CompanyPage from '../CompanyPage';

// Product details is in PAGES directory:
import ProductDetails from '../../pages/ProductDetails';
import Navbar from '../Navbar';
import CartBar from '../CartBar';

import SearchBar from '../SearchBar';
import SearchResults from '../../pages/SearchResults';

const App = () => {
  // GET INITIAL ITEMS FROM SERVER INTO STATE, THEN FROM STATE INTO AN ARRAY THAT WE CAN MAP:
  FetchInitItems();
  let catalogItems = useSelector(parseInitialItems);
  let loadStatus = useSelector(displayLoadState);

  return (
    <Router>
      <PageStructure>
        <GlobalStyles />
        <CheckoutModal />
        <HeaderWrap>
          <Navbar />
        </HeaderWrap>

        <FilterBarWrap>
          <FilterBar />
        </FilterBarWrap>

        <MainWrap>
          <SearchBar />
          <Switch>
            <Route exact path="/">
              <h2>Home</h2>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  Sale Items:
                  {loadStatus === 'complete' ? (
                    catalogItems.saleItems.map((item) => {
                      return <ItemCard item={item} />;
                    })
                  ) : (
                    <></>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  Featured Items:
                  {loadStatus == 'complete' ? (
                    catalogItems.featuredItems.map((item) => {
                      return <ItemCard item={item} />;
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Route>
            {/* use queries instead of params here */}
            <Route path="/search/:searchTerm">
              <SearchResults />
            </Route>

            <Route path="/category/:categoryName">
              <Category />
            </Route>

            <Route path="/product/:productId">
              <ProductDetails />
            </Route>

            <Route path="/seller/:sellerId">
              <div>Store</div>
            </Route>

            <Route path="/order-confirm/:confirmId">
              <OrderInfo />
            </Route>

            <Route path="/about">
              <div>About us</div>
            </Route>

            <Route path="/contact">
              <div>Contact us</div>
            </Route>

            <Route path="/company/:companyId">
              <CompanyPage />
            </Route>
          </Switch>
        </MainWrap>

        <CheckoutBarWrap>
          <CartBar />
        </CheckoutBarWrap>

        <FooterWrap>
          <Footer />
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
    'head head head'
    'sideleft main sideright'
    'foot foot foot';
  grid-template-rows: 1fr 6fr 0.3fr;
  grid-template-columns: 1fr 6fr 2fr;
`;
const HeaderWrap = styled.div`
  grid-area: head;
  background: #2e4052;
`;
const FilterBarWrap = styled.div`
  grid-area: sideleft;
  background: #bdd9bf;
`;
const MainWrap = styled.div`
  grid-area: main;
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffc857;
`;
const CheckoutBarWrap = styled.div`
  grid-area: sideright;
  background: whitesmoke;
`;
const FooterWrap = styled.div`
  grid-area: foot;
  background: #412234;
`;

export default App;
