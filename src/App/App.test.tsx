import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/App is here/i);
  expect(text).toBeInTheDocument();
});
