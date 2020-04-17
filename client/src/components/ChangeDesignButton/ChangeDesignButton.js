import React from 'react';
import { useDispatch } from 'react-redux';
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
      case 'Whacky': {
        dispatch(setDesign('whacky'));
        return;
      }
      default: {
        return;
      }
    }
  };
  return (
    <ButtonBox>
      Pick your colors!
      <StyleOption onClick={designClickHandle}>
        <span className='base'>Base</span>
      </StyleOption>
      <StyleOption onClick={designClickHandle}>
        <span className='new'>New</span>
      </StyleOption>
      <StyleOption onClick={designClickHandle}>
        <span className='whacky'>Whacky</span>
      </StyleOption>
    </ButtonBox>
  );
};

const ButtonBox = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
  position: relative;
  @media (max-width: 540px) {
    flex-direction: row;
    margin: 0px 8px;
  }
`;

const StyleOption = styled.li`
  padding: 5px;
  &:hover {
    cursor: pointer;
  }

  .base {
    color: #17252a;
    background: #def2f1;
    padding: 2px;
    border-radius: 3px;
  }

  .new {
    color: #def2f1;
    background: #17252a;
    padding: 2px;
    border-radius: 3px;
  }

  .whacky {
    color: #8c271e;
    background: #78bc61;
    padding: 2px;
    border-radius: 3px;
  }

  @media (max-width: 540px) {
    margin: 0px 8px;
  }
`;

export default ChangeDesignButton;
