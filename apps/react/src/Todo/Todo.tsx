import React from 'react';
import TodoAdd from '../TodoAdd';

export interface Task {
  id?: number;
  title: string;
  completed: boolean;
}

const Todo = (): JSX.Element => {
  return (
    <>
      <TodoAdd></TodoAdd>
    </>
  );
};

export default Todo;
