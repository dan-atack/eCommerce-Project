import React from 'react';
import { useSelector } from 'react-redux';

const COLORS = () => {
  const COLORS = useSelector((state) => state.designSetting);
  console.log(COLORS);
  return COLORS;
};
export default COLORS;
