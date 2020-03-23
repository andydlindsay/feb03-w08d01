import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from '../Game';

test('toggle the cheating state when clicking on robot head', () => {
  const { getByTestId } = render(<Game />);
  const robotHead = getByTestId('robot-icon');

  fireEvent.click(robotHead);
  expect(robotHead).toHaveClass('cheating');

  fireEvent.click(robotHead);
  expect(robotHead).not.toHaveClass('cheating');
});
