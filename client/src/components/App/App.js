import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import GlobalStyles from '../../GlobalStyles';
import Footer from '../Footer';
import AboutUs from '../../pages/AboutUs';
import ContactUs from '../../pages/ContactUs';
import CheckoutModal from '../CheckoutModal';
import OrderInfo from '../OrderInfo';
import Category from '../../pages/Category';
import COLORS from '../COLORS';

// get feature/sale item data into state:
import { parseInitialItems, displayLoadState } from '../../reducers';
import FilterBar from '../FilterBar';
import CompanyPage from '../../pages/CompanyPage';
import Homepage from '../../pages/Homepage';

// Product details is in PAGES directory:
import ProductDetails from '../../pages/ProductDetails';
import Navbar from '../Navbar';
import CartBar from '../CartBar';
import SearchResults from '../../pages/SearchResults';

// authenticator related things
import { useAuth0 } from "../../auth0/react-auth0-spa";
import history from "../../auth0/utils/history"
import ProfilePage from "../../pages/ProfilePage";


const App = () => {
  const COLORS = useSelector((state) => state.designSetting);
  const PageStructure = styled.div`
    height: 100vh;
    position: relative;
    display: grid;
    grid-template-areas:
      'head head head'
      'filters main cart'
      'foot foot foot';
    grid-template-rows: 1fr 6fr 0.3fr;
    grid-template-columns: 1.2fr 6fr 2fr;
    @media (max-width: 540px) {
      grid-template-areas:
        'head head'
        'filters filters'
        'main cart'
        'foot foot';
      grid-template-rows: 1fr 1fr 6fr 0.5fr;
      grid-template-columns: 2fr 1fr;
    }
  `;
  const HeaderWrap = styled.div`
    grid-area: head;
    background: ${COLORS.header};
  `;
  const FilterBarWrap = styled.div`
    grid-area: filters;
    background: ${COLORS.filter};
  `;
  const MainWrap = styled.div`
    grid-area: main;
    overflow-y: auto;
    /* overflow-x: hidden; */
    background: ${COLORS.main};
  `;
  const CheckoutBarWrap = styled.div`
    grid-area: cart;
    background: whitesmoke;
    border-left: 2px solid #ffc857;
    overflow-x: hidden;
  `;
  const FooterWrap = styled.div`
    grid-area: foot;
    background: ${COLORS.footer};
  `;


  const { loading } = useAuth0();

  return (
    <Router history={history}>
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
            <Route exact path='/'>
              <Homepage />
            </Route>

            <Route path='/search/:searchTerm'>
              <SearchResults />
            </Route>

            <Route path='/category/:categoryName'>
              <Category />
            </Route>

            <Route path='/product/:productId'>
              <ProductDetails />
            </Route>

            <Route path='/seller/:sellerId'>
              <div>Store</div>
            </Route>

            <Route path='/order-confirm/:confirmId'>
              <OrderInfo />
            </Route>

            <Route path='/about'>
              <AboutUs />
            </Route>

            <Route path='/contact'>
              <ContactUs />
            </Route>

            <Route path='/company/:companyId'>
              <CompanyPage />
            </Route>

            <Route path="/profile">
              <ProfilePage />
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

export default App;
