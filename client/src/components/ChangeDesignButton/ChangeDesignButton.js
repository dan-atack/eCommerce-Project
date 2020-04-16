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
    <ButtonBox>
      ChangeDesignButton
      <StyleOption onClick={designClickHandle}>Base</StyleOption>
      <StyleOption onClick={designClickHandle}>New</StyleOption>
      <StyleOption onClick={designClickHandle}>Whacky</StyleOption>
    </ButtonBox>
  );
};

const ButtonBox = styled.ul`
  display: flex;
  flex-direction: column;
  @media (max-width: 540px) {
    flex-direction: row;
    margin: 0px 8px;
  }
`;

const StyleOption = styled.li`
  /* display: none; */
  @media (max-width: 540px) {
    margin: 0px 8px;
  }
`;

export default ChangeDesignButton;
