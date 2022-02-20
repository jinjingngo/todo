import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoAdd = (): JSX.Element => {
  return (
    <Box sx={{display: 'flex', alignContent: 'space-around', justifyContent: 'space-between'}}>
      <TextField label="Input todo item" variant="standard" />
      <Button variant="text">Add</Button>
    </Box>
  );
};

export default TodoAdd;
