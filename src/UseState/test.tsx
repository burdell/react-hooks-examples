import React from 'react';
import { render, fireEvent, RenderResult } from 'react-testing-library';

import { UseState as ClassComponent } from './class';
import { UseState as HookComponent } from './class';

const testComponent = (result: RenderResult) => {
  const {
    getByLabelText,
    getByPlaceholderText,
    getByText,
    getByTestId
  } = result;

  const checkbox = getByLabelText('Click Me');
  const input = getByPlaceholderText('Enter some text');
  const textInput = 'Hello there!';

  const checkedText = getByTestId('checked-indicator');
  expect(checkedText.innerHTML).toBe('Checked: No');

  checkbox.click();
  fireEvent.change(input, { target: { value: textInput } });

  getByText(textInput);
  expect(checkedText.innerHTML).toBe('Checked: Yes');
};

describe('useState', () => {
  it('uses a class', () => {
    const result = render(<ClassComponent />);
    testComponent(result);
  });

  it('uses a hook', () => {
    const result = render(<HookComponent />);
    testComponent(result);
  });
});
