import { createMemoryHistory } from "history"
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const history = createMemoryHistory({ initialEntries: ["/"] })

test('renders navigation bar with navigation items', () => {
  render(
    <Router history={history}>
      <NavigationBar />
    </Router>);
  const home = screen.getByText(/Home/i);
  const gallery = screen.getByText(/Gallery/i);
  expect(home).toBeInTheDocument();
  expect(gallery).toBeInTheDocument();
});