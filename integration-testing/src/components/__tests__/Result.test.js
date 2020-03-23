import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Result from '../Result'

test('Shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);

  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
