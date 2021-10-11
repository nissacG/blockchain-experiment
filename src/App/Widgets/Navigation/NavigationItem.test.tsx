import { createMemoryHistory } from "history"
import { render, screen } from '@testing-library/react';
import { Router } from "react-router-dom"
import NavigationItem from './NavigationItem';

const history = createMemoryHistory({ initialEntries: ["/"] })

test('NavigationItem label', () => {
  render(
    <Router history={history}>
      <NavigationItem isActive={false} to="/" label="Home" />
    </Router>);
  const text = screen.getByText(/Home/i);
  expect(text).toBeInTheDocument();
});

test('NavigationItem isActive', () => {
  render(
    <Router history={history}>
      <NavigationItem isActive to="/" label="Home" />
    </Router>

  );
  const text = screen.getByText(/Home/i);
  expect(text).toBeInTheDocument();
  expect(text).toHaveStyle({
    "font-weight": 600
  })
});