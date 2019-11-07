import React from 'react';
import {render, getByTestId} from '@testing-library/react';
import App from './App';
import Dashboard from './components/Dashboard';

test('renders without crashing', () => {
  render(<App />);
});

test('See if Player Score can be found', () => {
  const {getByTestId} = render(<App />);
  getByTestId('player-score');
})

test('Renders Dashboard component', () => {
  render(<Dashboard />);
})