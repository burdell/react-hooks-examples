import React from 'react';
import { render, RenderResult } from 'react-testing-library';

import { UseRef as ClassComp } from './class';
import { UseRef as HookComp } from './hook';

const testComponent = (result: RenderResult) => {
  const { getByText, getByPlaceholderText } = result;
  const input = getByPlaceholderText('Type something...');
  const button = getByText('Focus');

  expect(document.activeElement).not.toBe(input);

  button.click();

  expect(document.activeElement).toBe(input);
};

describe('useRef', () => {
  it('uses a class', () => {
    testComponent(render(<ClassComp />));
  });

  it('uses a hook', () => {
    testComponent(render(<HookComp />));
  });
});
