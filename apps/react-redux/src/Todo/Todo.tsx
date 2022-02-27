import React, {Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import List from '@mui/material/List';

import TodoAdd from '../TodoAdd';
import TodoItem from '../TodoItem';

import type {Task, State} from '../Types';

const Todo = (): JSX.Element => {
  const tasks = useSelector((state: State) => state.tasks);
  const dispatch = useDispatch();

  const onAdd = (task: Task): void => {
    dispatch({type: 'ADD_TODO', payload: task});
  };

  const onChange = (task: Task): void => {
    dispatch({type: 'CHANGE_TODO', payload: task});
  };

  return (
    <Fragment>
      <TodoAdd onAdd={onAdd} />
      <List>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onChange={onChange} />
        ))}
      </List>
    </Fragment>
  );
};

export default Todo;
