import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';

import TodoAdd from './TodoAdd';

describe('TodoAdd', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render TodoAdd properly', () => {
    const rendered = render(<TodoAdd />);

    expect(rendered.getByText('Input todo item')).toBeInTheDocument();
  });

  it('shold call onAdd handler with proper value', () => {
    const onAdd = jest.fn();
    const rendered = render(<TodoAdd onAdd={onAdd} />);

    const input = rendered.getByLabelText('Input todo item');
    fireEvent.change(input, {target: {value: 'test'}});
    fireEvent.keyDown(input, {key: 'Enter'});

    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith({title: 'test', completed: false});
  });
});
