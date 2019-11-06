import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import Dashboard from './components/Dashboard';


test('renders without crashing', () => {
  render(<App />);
});


test('handleStrike adds 1 strike, but not more than 3', () => {
  expect(Dashboard.handleStrike()).toBe(1);
  expect(Dashboard.handleStrike()).not.toBe(4);
})

test('handleBall adds 1 ball, but not more than 4', () => {
  expect(Dashboard.handleBall()).toBe(1);
  expect(Dashboard.handleBall()).not.toBe(5);
})

test('handleFoul adds 1 strike, but not more than 2', () => {
  expect(Dashboard.handleFoul()).toBe(1);
  expect(Dashboard.handleFoul()).not.toBe(3);
})

test('handleHit resets Strikes and Balls values back to 0', () => {
  expect(Dashboard.handleHit()).toBe(Display.strikes === 0);
  expect(Dashboard.handleHit()).toBe(Display.balls === 0);
})
