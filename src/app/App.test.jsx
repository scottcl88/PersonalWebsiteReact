import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => {
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
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
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ top: 200 });

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
