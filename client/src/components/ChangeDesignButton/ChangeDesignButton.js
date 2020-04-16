import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDesign } from '../../actions';
import styled from 'styled-components';

const ChangeDesignButton = () => {
  const dispatch = useDispatch();
  const designClickHandle = (e) => {
    e.stopPropagation();
    switch (e.target.innerText) {
      case 'Base': {
        dispatch(setDesign('base'));
        return;
      }
      case 'New': {
        dispatch(setDesign('darkMode'));
        return;
      }
      // case 'Whacky': {
      //   dispatch(setDesign('whacky'));
      //   return;
      // }
      default: {
        return;
      }
    }
  };
  return (
    <ul>
      ChangeDesignButton
      <StyleOption onClick={designClickHandle}>Base</StyleOption>
      <StyleOption onClick={designClickHandle}>New</StyleOption>
      <StyleOption onClick={designClickHandle}>Whacky</StyleOption>
    </ul>
  );
};

const StyleOption = styled.li`
  /* display: none; */
`;

export default ChangeDesignButton;
