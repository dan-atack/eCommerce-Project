import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
// new action, ADD TO CART, needed in actions file
import { addItemToCart } from '../../actions';

function AddToCartButton({item}) {
    const dispatch = useDispatch();
    return (
        <button onMouseUp={() => {
            dispatch(addItemToCart(item))
        }}>Add Item To Cart</button>
    );
};

export default AddToCartButton;