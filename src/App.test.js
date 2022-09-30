import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learnLink');
  expect(linkElement).toBeInTheDocument();
});

test('url is correct', () => {
  render(<App />)
  const url = screen.getByTestId('learnLink').href
  expect(url).toContain('oluwatobisalau.netlify.app')
})