import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../reducers';
import AddToCartButton from '../../components/AddToCartButton';

function ProductDetails() {

    // import dispatcher to use the 'add to cart' button:
    const dispatch = useDispatch();
    // whenever a product's item card is clicked on the main page the info for that product will become the
    // value for productDetails in the state; this page will use the selector to get that data:
    const itemDetails = useSelector(getProductDetails);
    console.log(itemDetails);
    const { id, name, price, body_location, category, imageSrc, numInStock, companyId } = itemDetails;

    return (
        <MainBox>
            <h1 style={{gridArea: 'name'}}>{name}</h1>
            <DetailPic src={imageSrc} alt={name} />
            <DetailBox>
                <span>Worn on: {body_location}</span>
                <span>Category: {category} items</span>
            </DetailBox>
            <PurchaseInfo>
                <span>Stock Remaining: {numInStock} starting at {price}</span>
                <AddToCartButton item={itemDetails}/>
            </PurchaseInfo>
        </MainBox>
    );
};

const MainBox = styled.div`
    display: grid;
    grid-template-areas: 'name name name'
                         'img img deets'
                         'img img deets'
                         'purch purch purch';
    padding: 16px;
    width: 100%;
    height: 100%;
`
const DetailBox = styled.div`
    margin: 24px;
    text-align: left;
    grid-area: deets;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px;
`
const PurchaseInfo = styled.div`
    grid-area: purch;
    display: flex;
    justify-content: space-evenly;
`

const DetailPic = styled.img`
    height: auto;
    width: auto;
    padding: 8px;
    background: white;
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 0px 0px 8px 2px gray;
    grid-area: img;
`

export default ProductDetails;