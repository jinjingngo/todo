import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Todo from './Todo';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{my: 4}}>
          <Typography variant="h2" component="h1" gutterBottom>
            React - Todo
          </Typography>
          <Todo />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
