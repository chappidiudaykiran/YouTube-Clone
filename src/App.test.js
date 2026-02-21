import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YouTube Clone heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/YouTube Clone/i);
  expect(headingElement).toBeInTheDocument();
});
