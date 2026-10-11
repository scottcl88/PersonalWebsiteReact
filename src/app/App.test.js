import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders the home page inside its router', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: 'Scott Lewis' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Portfolio', level: 2 })).toBeInTheDocument();
});

test('scrolls to the fragment after its route renders', () => {
  jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ top: 200 });

  render(
    <MemoryRouter initialEntries={['/portfolio#certifications']}>
      <App />
    </MemoryRouter>
  );

  expect(window.scrollTo).toHaveBeenCalledWith(0, 129);
});

test('updates the active navigation link after client-side navigation', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('link', { name: 'About' }));

  expect(screen.getByRole('link', { name: 'About' })).toHaveClass('active');
});
