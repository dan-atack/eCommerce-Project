// I have made a button to test the redux state.. will remove from later production runs:

import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { testState } from '../../../actions';

function StateTestButton() {
    const dispatch = useDispatch();
    return (
        <button onMouseUp={() => {
            dispatch(testState({id: 'pipboy', fakeItem: "PipBoy", price: "100 bottlecaps"}))
        }}>ENEMY OF THE STATE</button>
    );
};

export default StateTestButton;