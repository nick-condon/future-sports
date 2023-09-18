import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('Renders Homepage', () => {
  render(<App />);
  // Expect this to pass as img elements are present

  const imageElement = document.querySelector("img");
  expect(imageElement).toBeInTheDocument();

})