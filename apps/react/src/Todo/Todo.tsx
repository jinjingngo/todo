import React from 'react';
import TodoAdd from '../TodoAdd';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const Todo = (): JSX.Element => {
  return <TodoAdd />;
};

export default Todo;
