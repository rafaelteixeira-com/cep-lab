import React from 'react';
import { render } from '@testing-library/react';
import App from './MainApp';

test('renders lab text', () => {
   const { getByText } = render(<App />);
   const linkElement = getByText(/lab/i);
   expect(linkElement).toBeInTheDocument();
});

test('renders Avançar link', () => {
   const { getByText } = render(<App />);
   const linkElement = getByText(/Avançar/i);
   expect(linkElement).toBeInTheDocument();
});
