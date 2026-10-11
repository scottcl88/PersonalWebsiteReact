import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the home page inside its router', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: 'Scott Lewis' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Portfolio', level: 2 })).toBeInTheDocument();
});
