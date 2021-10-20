import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

const Landing = () => {
  return (
    <div>
      <Box mb={4} mt={4}>
        <Typography variant='h2' align='center'>
          Watch-ME
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant='h5' align='center'>
          Platform for Influencers to Publish their SHOW TIMES
        </Typography>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Button color='secondary' variant='contained' size='large' component='a' href='/signup'>
          Register
        </Button>
      </Box>
    </div>
  );
};

export default Landing;
