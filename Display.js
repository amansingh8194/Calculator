import React from 'react';
import styled from 'styled-components';

const DisplayWrapper = styled.div`
  font-size: 2rem;
  padding: 20px;
  background: #222;
  color: #fff;
  text-align: right;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Display = ({ value }) => {
  return <DisplayWrapper>{value}</DisplayWrapper>;
};

export default Display;
