import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, ReactReduxContext } from 'react-redux';
import FetchInitItems from '../../components/StateFunctions/FetchInitItems';
import { getProductDetails, parseInitialItems } from '../../reducers';
import Spinner from '../../components/Spinner';
import { setProductDetailsFromFetch } from '../../actions';
import AddToCartButton from '../../components/AddToCartButton';
import { COLORS } from '../../constants';
import SearchBar from '../../components/SearchBar';

function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [companyName, setCompanyName] = React.useState('');
  // function to get company name once the item data loads:
  const getCompanyName = (companyId) => {
    fetch(`/companyName/${companyId}`)
      .then((res) => {
        return res.json();
      })
      .then((company) => setCompanyName(company.companyName));
  };
  React.useEffect(() => {
    fetch(`/item/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((item) => {
        dispatch(setProductDetailsFromFetch(item));
        // Fetch company name from server AFTER initial fetch finishes:
        getCompanyName(item.companyId);
      });
  }, []);
  // get item details from state:
  let dataInState = useSelector(getProductDetails);
  // fetch sale items and check for sale price status in case user loads this page directly:
  FetchInitItems();
  // selector must be used outside function call:
  const inits = useSelector(parseInitialItems);
  // Determine Discount will return the original price string if item is not on sale, or the discounted value if it is on sale:
  const determineDiscount = () => {
    if (inits != undefined) {
      const thereIsDiscount = inits.saleItems.filter(
        (item) => item.id == productId
      );
      if (thereIsDiscount.length > 0) {
        return Math.round(Number(thereIsDiscount[0].price.slice(1)) * 85) / 100;
      } else {
        return dataInState.price;
      }
    }
  };
  const discount = determineDiscount();

  if (Object.keys(dataInState).length == 0) {
    return <Spinner />;
  }

  const {
    id,
    name,
    price,
    body_location,
    category,
    imageSrc,
    numInStock,
    companyId,
  } = dataInState;

  // convert price to numerical value:
  const numericalPrice = Number(price.slice(1));
  //         rhyming string methods! ^
  return (<>
    <SearchBar />
    <MainBox>
      <h1 style={{ gridArea: 'name' }}>{name ? name : ''}</h1>
      <BigDiv>
        <DetailPic src={imageSrc ? imageSrc : ''} alt={name} />
        <div
          style={{ display: 'flex', flexDirection: 'column', marginTop: 16 }}
        >
          This stately item is worn on the{' '}
          {body_location ? body_location.toLowerCase() : ''} and combines
          sleekness and power into an elegant
          {(numericalPrice ? numericalPrice : 0) < 100
            ? ', and affordable'
            : ''}{' '}
          package.
        </div>
      </BigDiv>
      <DetailBox>
        <span>
          Category: {category ? category : ''}
          items
        </span>
        <span>Typically worn on: {body_location ? body_location : ''}</span>
        <span>Manufactured by: <Link to={`/company/${companyId ? companyId : ''}`}>
          {companyName ? companyName : ''}
        </Link></span>
      </DetailBox>
      {
        // conditional price display for discounted items:
        discount != price ? (
          <PurchaseInfo>
            <span>
              {numInStock} units available from the INSANELY low price of
              {` $${discount.toFixed(2)}`}!!!
            </span>
          </PurchaseInfo>
        ) : (
          <PurchaseInfo>
            {numInStock > 0 ? (
              <span>
                {numInStock} units available from the low, low price of {price}
              </span>
            ) : (
              <span>This item is currently sold out. Sorry about that eh!</span>
            )}
          </PurchaseInfo>
        )
      }
      {numInStock > 0 ? (
        <AddToCartButton
          item={{ ...dataInState, price: `$${discount.toFixed(2)}` }}
        />
      ) : (
        <button>Can I get a rain check??</button>
      )}
    </MainBox>
  </>);
}

const MainBox = styled.div`
  display: grid;
  grid-template-areas:
    'name name name'
    'img img deets'
    'img img deets'
    'purch purch buy';
  padding: 16px;
  width: 100%;
  height: 100%;
`;
const DetailBox = styled.div`
  margin: 24px;
  text-align: left;
  grid-area: deets;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
  width: 256px;

  a {
    color: blue;
  }
`;
const BigDiv = styled.div`
  margin: 24px;
  border: 1px solid ${COLORS.borderNoire};
  border-radius: 8px;
  grid-area: img;
  display: flex;
  flex-direction: row;
`;

const PurchaseInfo = styled.div`
  grid-area: purch;
  display: flex;
  justify-content: space-evenly;
`;

const DetailPic = styled.img`
  height: auto;
  width: auto;
  padding: 8px;
  margin: 16px;
  background: white;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 2px gray;
`;

export default ProductDetails;
