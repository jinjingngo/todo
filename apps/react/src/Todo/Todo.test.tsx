import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';

import Todo from './Todo';

describe('Todo', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render Todo properly', () => {
    const rendered = render(<Todo />);

    expect(rendered.getByText('Input todo item')).toBeInTheDocument();
  });

  it('should render task properly', () => {
    const rendered = render(<Todo />);

    const input = rendered.getByLabelText('Input todo item');
    fireEvent.change(input, {target: {value: 'Task 1'}});
    fireEvent.keyDown(input, {key: 'Enter'});

    expect(rendered.getByText('Task 1')).toBeInTheDocument();
  });
});
