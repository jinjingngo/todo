import React, {useState, ChangeEvent, KeyboardEvent, MouseEvent} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Task} from '../Todo';

export interface TodoAddProps {
  onAdd?: (task: Task) => void;
}

const TodoAdd = (props: TodoAddProps): JSX.Element => {
  const {onAdd} = props;
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {value = ''} = event.target;

    setValue(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    const {key} = event;

    if (key !== 'Enter') return;

    onAdd?.({title: value, completed: false});
    onAdd && setValue('');
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    onAdd?.({title: value, completed: false});
    onAdd && setValue('');
  };

  return (
    <Box sx={{display: 'flex', alignContent: 'space-around', justifyContent: 'space-between'}}>
      <TextField
        label="Input todo item"
        variant="standard"
        sx={{width: '85%'}}
        value={value}
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
