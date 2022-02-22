import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import isEmpty from 'lodash/isEmpty';

import {v4 as uuidv4} from 'uuid';
import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import {Task} from '../Todo';

export interface TodoAddProps {
  onAdd?: (task: Task) => void;
}

const TodoAdd = (props: TodoAddProps): JSX.Element => {
  const {onAdd} = props;
  const [title, setTitle] = useState('');

  const generateTask = (): Task => {
    return {id: uuidv4(), title, completed: false};
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {value = ''} = event.target;

    setTitle(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    const {key} = event;

    if (key !== 'Enter' || isEmpty(title)) return;

    if (!onAdd) return;
    onAdd(generateTask());
    setTitle('');
  };

  const handleClick = (): void => {
    if (!onAdd || isEmpty(title)) return;
    onAdd(generateTask());
    setTitle('');
  };

  return (
    <Box sx={{display: 'flex', alignContent: 'space-around', justifyContent: 'space-between'}}>
      <TextField
        label="Input todo item"
        variant="standard"
        sx={{width: '85%'}}
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        size="large"
        variant="text"
        sx={{textTransform: 'unset', padding: '16px 11px 0px'}}
        onClick={handleClick}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoAdd;
