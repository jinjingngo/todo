import React from 'react';
import {Provider} from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {Store} from './Store';
import Todo from './Todo';

const App = (): JSX.Element => {
  return (
    <Provider store={Store}>
      <Container maxWidth="sm">
        <Box sx={{my: 4}}>
          <Typography variant="h2" component="h1" gutterBottom>
            React - Todo
          </Typography>
          <Todo />
        </Box>
      </Container>
    </Provider>
  );
};

export default App;
