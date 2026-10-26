import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sri Venkateswara Constructions branding', () => {
  render(<App />);
  const brandElement = screen.getByText(/Sri Venkateswara/i);
  expect(brandElement).toBeInTheDocument();
});
