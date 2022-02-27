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

  it('should call onAdd handler with proper value', () => {
    const onAdd = jest.fn();
    const rendered = render(<TodoAdd onAdd={onAdd} />);

    const input = rendered.getByLabelText('Input todo item');
    fireEvent.change(input, {target: {value: 'test'}});
    fireEvent.keyDown(input, {key: 'Enter'});

    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith(expect.objectContaining({title: 'test', completed: false}));
  });

  it('should not call onAdd handler after Enter key is pressed when no value feeded in', () => {
    const onAdd = jest.fn();
    const rendered = render(<TodoAdd onAdd={onAdd} />);

    const input = rendered.getByLabelText('Input todo item');
    fireEvent.keyDown(input, {key: 'Enter'});

    expect(onAdd).toHaveBeenCalledTimes(0);
  });

  it('should not call onAdd handler after Add button is clicked when no value feeded in', () => {
    const onAdd = jest.fn();
    const rendered = render(<TodoAdd onAdd={onAdd} />);

    const button = rendered.getByText('Add');
    fireEvent.click(button);

    expect(onAdd).toHaveBeenCalledTimes(0);
  });
});
