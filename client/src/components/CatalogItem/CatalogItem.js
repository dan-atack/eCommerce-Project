// Redundant component... being deprecated!

import React from 'react';
import styled from 'styled-components';
import AddToCartButton from '../AddToCartButton';
// import add to cart button when it exists!

// This will be the basic framework for items in the main display area:

function CatalogItem(props) {

    const { id, name, price, body_location, category, imageSrc, numInStock, companyId } = props;
    console.log(name);
    return (
        // will use props to render everything after lunch...
        <StyledItem>
            I'm an item!
            <AddToCartButton item={props}/>
        </StyledItem>
    );
};

const StyledItem = styled.div`
    border: 1px solid black;
    border-radius: 8px;
    height: 128px;
    width: 128px;
    padding: 18px;
`

export default CatalogItem;