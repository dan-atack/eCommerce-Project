import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from '../../GlobalStyles';
import Footer from '../Footer';
import AboutUs from '../../pages/AboutUs';
import ContactUs from '../../pages/ContactUs';
import CheckoutModal from '../CheckoutModal';
import OrderInfo from '../OrderInfo';
import Category from '../../pages/Category';

// get feature/sale item data into state:
import { parseInitialItems, displayLoadState } from '../../reducers';
import FilterBar from '../FilterBar';
import CompanyPage from '../CompanyPage';
import Homepage from '../../pages/Homepage';

// Product details is in PAGES directory:
import ProductDetails from '../../pages/ProductDetails';
import Navbar from '../Navbar';
import CartBar from '../CartBar';

import SearchResults from '../../pages/SearchResults';

const App = () => {
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
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            
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
              <AboutUs />
            </Route>

            <Route path="/contact">
              <ContactUs />
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
  position: relative;
  display: grid;
  grid-template-areas:
    'head head head'
    'sideleft main sideright'
    'foot foot foot';
  grid-template-rows: 1fr 6fr 0.3fr;
  grid-template-columns: 1.2fr 6fr 2fr;
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
  /* overflow-x: hidden; */
  background: #ffc857;
`;
const CheckoutBarWrap = styled.div`
  grid-area: sideright;
  background: whitesmoke;
  border-left: 2px solid #ffc857;
  overflow-x: hidden;
`;
const FooterWrap = styled.div`
  grid-area: foot;
  background: #412234;
`;

export default App;
