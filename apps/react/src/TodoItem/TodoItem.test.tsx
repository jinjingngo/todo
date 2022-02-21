import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';

import TodoItem from './TodoItem';

describe('TodoItem', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render TodoItem properly', () => {
    const rendered = render(
      <TodoItem task={{id: '1', title: 'test', completed: false}} onChange={jest.fn()} />
    );

    expect(rendered.getByText('test')).toBeInTheDocument();
  });

  it('should call onChange handler with proper value', () => {
    const onChange = jest.fn();
    const rendered = render(
      <TodoItem task={{id: '1', title: 'test', completed: false}} onChange={onChange} />
    );

    const radio = rendered.getByRole('radio');
    fireEvent.click(radio);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({id: '1', title: 'test', completed: true});
  });
});
