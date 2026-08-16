import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import App from './App';

vi.mock('./services/api', () => ({
  getHealthStatus: vi.fn().mockResolvedValue({ status: 'ok' }),
}));

test('renders DevSecOps Portal heading', async () => {
  render(<App />);
  const headingElement = screen.getByText(/DevSecOps Portal/i);
  expect(headingElement).toBeInTheDocument();
});