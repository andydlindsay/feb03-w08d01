import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import Result from '../Result';

let fakeState;

beforeEach(() => {
  fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
});

test('shows appropriate message when the status is "Waiting"', () => {
  fakeState.status = 'Waiting';
  const { container } = render(<Result status={fakeState.status} />);

  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('shows appopriate message when status is "Won"', () => {
  fakeState.status = 'Won';
  const { container } = render(<Result status={fakeState.status} />);

  expect(getByTestId(container, 'result_footer')).toHaveTextContent('You won!');
});
