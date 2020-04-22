import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FetchInitItems from '../../components/StateFunctions/FetchInitItems';
import { getProductDetails, parseInitialItems } from '../../reducers';
import Spinner from '../../components/Spinner';
import { setProductDetailsFromFetch } from '../../actions';
import AddToCartButton from '../../components/AddToCartButton';
import starburst from '../../assets/starburst.png';
import SearchBar from '../../components/SearchBar';

function ProductDetails() {
  const dispatch = useDispatch();
  const COLORS = useSelector((state) => state.designSetting);
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
    if (inits !== undefined) {
      const thereIsDiscount = inits.saleItems.filter(
        (item) => item._id == productId
      );
      // filtering yields a list, so if this list contains anything then the item is discounted:
      if (thereIsDiscount.length > 0) {
        return Math.round(Number(thereIsDiscount[0].price.slice(1)) * 85) / 100;
      } else {
        // if there is no discount we'll return the regular price instead:
        return dataInState.price;
      }
    }
  };
  const discount = determineDiscount();

  if (Object.keys(dataInState).length === 0) {
    return <Spinner />;
  }

  const {
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

  // Styled components:

  return (
    <>
      <SearchBar />
      <MainBox>
        <h1 style={{ gridArea: 'name', color: `${COLORS.header}` }}>
          {name ? name : ''}
        </h1>
        <BigDiv COLORS={COLORS}>
          {' '}
          <DetailPic src={imageSrc ? imageSrc : ''} alt={name} />
          <div
            style={{ display: 'flex', flexDirection: 'column', marginTop: 16 }}
          ></div>
        </BigDiv>
        <DetailBox COLORS={COLORS}>
          <div>
            This stately item is worn on the{' '}
            {body_location ? body_location.toLowerCase() : ''} and combines
            sleekness and power into an elegant
            {(numericalPrice ? numericalPrice : 0) < 100
              ? ', and affordable'
              : ''}{' '}
            package.
          </div>
          <span>Category: {category ? category : ''} items</span>
          <span>Typically worn on: {body_location ? body_location : ''}</span>
          <span>
            Manufactured by:{' '}
            <Link to={`/company/${companyId ? companyId : ''}`}>
              {companyName ? companyName : ''}
            </Link>
          </span>
        </DetailBox>
        {
          // conditional price display for discounted items:
          discount !== price ? (
            <PurchaseInfo COLORS={COLORS}>
              {discount && (
                <>
                  <p style={{ position: 'relative', top: 14 }}>
                    {numInStock} units available from the OUTRAGEOUSLY low price
                    of: <StruckThru COLORS={COLORS}>{`${price}`}</StruckThru>
                  </p>
                  <Special>
                    <span
                      style={{ position: 'relative', top: 11, left: 8 }}
                    >{`  $${discount.toFixed(2)}!!`}</span>
                  </Special>
                </>
              )}
            </PurchaseInfo>
          ) : (
            <PurchaseInfo COLORS={COLORS}>
              {numInStock > 0 ? (
                <span>
                  {numInStock} units available from the low, low price of{' '}
                  {price}
                </span>
              ) : (
                <span>
                  This item is currently sold out. Sorry about that eh!
                </span>
              )}
            </PurchaseInfo>
          )
        }
        {numInStock > 0 ? (
          <AddToCartButton
            item={
              discount !== price
                ? discount !== undefined
                  ? { ...dataInState, price: `$${discount.toFixed(2)}` }
                  : dataInState
                : dataInState
            }
          />
        ) : (
          <Link to={`/company/${companyId ? companyId : ''}`}>
            <RainCheck COLORS={COLORS}>See similar Items...</RainCheck>
          </Link>
        )}
      </MainBox>
    </>
  );
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
  @media (max-width: 940px) {
    grid-template-areas:
      'name name'
      'img img'
      'deets deets'
      'purch buy';
  }
  @media (max-width: 480px) {
    grid-template-areas:
      'name'
      'img'
      'deets'
      'purch'
      'buy';
    padding: 4px;
    width: 90%;
  }
`;
const DetailBox = styled.div`
  margin: 24px;
  text-align: left;
  grid-area: deets;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.COLORS.header};
  border-radius: 8px;
  padding: 16px;
  width: auto;
  background: ${(props) => props.COLORS.background};
  a {
    color: blue;
  }
  @media (max-width: 480px) {
    margin: 4px;
    padding: 4px;
  }
`;
const BigDiv = styled.div`
  margin: 24px;
  padding: 10px;
  border: 1px solid ${(props) => props.COLORS.borderNoire};
  border-radius: 8px;
  grid-area: img;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.COLORS.background};
  text-align: center;
  @media (max-width: 480px) {
    margin: 4px;
    padding: 4px;
  }
`;
const Special = styled.div`
  color: whitesmoke;
  padding: 4px;
  z-index: 2;
  background-image: url(${starburst});
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 72px;
  min-width: 96px;
`;
const StruckThru = styled.span`
  text-decoration: line-through;
  color: ${(props) => props.COLORS.filter};
  margin-right: 8px;
  position: relative;
  margin-right: 8px;
  color: black;
`;
const PurchaseInfo = styled.div`
  grid-area: purch;
  display: flex;
  justify-content: space-evenly;
  color: ${(props) => props.COLORS.header};
`;

const RainCheck = styled.button`
  color: ${(props) => props.COLORS.background};
  font-size: 22px;
  background-color: ${(props) => props.COLORS.outOfStockBlue};
  height: 72px;
  width: 174px;
  margin: 24px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.COLORS.borderNoire};
  grid-area: buy;
  @media (max-width: 480px) {
    margin: 4px;
  }
`;

const DetailPic = styled.img`
  height: auto;
  width: auto;
  object-fit: contain;
  padding: 8px;
  margin: 16px;
  background: white;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 2px gray;
  @media (max-width: 480px) {
    margin: 4px;
  }
`;

export default ProductDetails;
