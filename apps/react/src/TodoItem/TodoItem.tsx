import React, {useState} from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import {Task} from '../Todo';

export interface TodoItemProps {
  task: Task;
  onChange: (task: Task) => void;
}

const TodoItem = (props: TodoItemProps) => {
  const {task, onChange} = props;
  const {id, title, completed} = task;
  const [isCompoleted, setIsCompoleted] = useState(completed);

  const handleChange = () => {
    onChange({...task, completed: !isCompoleted});
    setIsCompoleted(!isCompoleted);
  };

  return (
    <ListItem>
      <Radio checked={isCompoleted} onChange={handleChange} />
      <ListItemText id={id} primary={`${title}`} />
    </ListItem>
  );
};

export default TodoItem;
