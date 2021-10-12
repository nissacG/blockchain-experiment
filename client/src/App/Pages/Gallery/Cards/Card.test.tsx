import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card', () => {
  render(
    <Card id={"id"} owner={"token"} imageUrl={"url"} />
  )
  const owner = screen.getByText(/Owner/i);
  const token = screen.getByText(/token/i);
  expect(owner).toBeInTheDocument();
  expect(owner).toHaveStyle({
    "font-size": "1rem"
  })

  expect(token).toBeInTheDocument();
  expect(token).toHaveStyle({
    "font-size": "0.875rem"
  })
});