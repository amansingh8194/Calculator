import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding: 20px;
  font-size: 1rem;
  background: #ddd;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;

const Button = ({ value, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{value}</ButtonWrapper>;
};

export default Button;
