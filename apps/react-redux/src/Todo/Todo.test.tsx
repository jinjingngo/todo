import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {render, cleanup, fireEvent} from '@testing-library/react';

import {Store} from '../Store';
import Todo from './Todo';

interface Props {
  children: ReactNode;
}

const Wrapper = ({children}: Props): JSX.Element => <Provider store={Store}>{children}</Provider>;

describe('Todo', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render Todo properly', () => {
    const rendered = render(<Todo />, {wrapper: Wrapper});

    expect(rendered.getByText('Input todo item')).toBeInTheDocument();
  });

  it('should render task properly', () => {
    const rendered = render(<Todo />, {wrapper: Wrapper});

    const input = rendered.getByLabelText('Input todo item');
    fireEvent.change(input, {target: {value: 'Task 1'}});
    fireEvent.keyDown(input, {key: 'Enter'});

    expect(rendered.getByText('Task 1')).toBeInTheDocument();
  });
});
