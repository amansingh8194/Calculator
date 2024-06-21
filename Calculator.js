import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import Button from './Button';

const CalculatorWrapper = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background: #f5f5f5;

  @media (max-width: 500px) {
    width: 100%;
    padding: 10px;
  }
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <CalculatorWrapper>
      <Display value={input} />
      <ButtonGrid>
        {[
          '(', ')', 'mc', 'm+', 'm-', 'mr',
          '2nd', 'x^2', 'x^3', 'x^y', 'e^x', '10^x',
          '1/x', '2√x', '3√x', 'y√x', 'ln', 'log10',
          'x!', 'sin', 'cos', 'tan', 'e', 'EE',
          'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand',
          '7', '8', '9', '/', '%', 'C',
          '4', '5', '6', '*', '+/-', '=',
          '1', '2', '3', '-', '', '',
          '0', '.', '+', '', '', ''
        ].map((button) => (
          <Button key={button} value={button} onClick={() => handleButtonClick(button)} />
        ))}
      </ButtonGrid>
    </CalculatorWrapper>
  );
};

export default Calculator;
