import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails, displayDetailLoadState } from '../../reducers';
import FetchItemDetails from '../../components/StateFunctions/FetchItemDetails';
//import { setProductDetails } from '../../actions';
import AddToCartButton from '../../components/AddToCartButton';
import { COLORS } from '../../constants';

function ProductDetails() {
  // const dispatch = useDispatch();
  const { productId } = useParams();
  const dataInState = useSelector(getProductDetails);
  // Check if there is data in the state:
  let itemDataLoaded = Object.keys(dataInState).length > 0;
  // use this boolean to render the page immediately if the data is in the state:
  if (itemDataLoaded) {
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
    return (
      <MainBox>
        <h1 style={{ gridArea: 'name' }}>{name}</h1>
        <BigDiv>
          <DetailPic src={imageSrc} alt={name} />
          <div
            style={{ display: 'flex', flexDirection: 'column', marginTop: 16 }}
          >
            This stately item is worn on the {body_location.toLowerCase()} and
            combines sleekness and power into an elegant
            {numericalPrice < 100 ? ', and affordable' : ''} package.
          </div>
        </BigDiv>
        <DetailBox>
          <span>Category: {category} items</span>
          <span>Typically worn on: {body_location}</span>
          <span></span>
        </DetailBox>
        <PurchaseInfo>
          {numInStock > 0 ? (
            <span>
              Stock Remaining: {numInStock} starting at {price}
            </span>
          ) : (
            <span>This item is currently sold out. Sorry about that eh!</span>
          )}
        </PurchaseInfo>
        {numInStock > 0 ? (
          <AddToCartButton item={dataInState} />
        ) : (
          <button>Can I get a rain check??</button>
        )}
      </MainBox>
    );
  } else {
    // return statement for if you go to the page directly, skipping the item card-state combo (btw if you do this I hate you)
    FetchItemDetails(productId);
    return <h1>YOU FUCK!!!</h1>;
  }
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
