import { Box, Button, Grid, Typography } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React from 'react';
import { usePeriod } from '../../../hooks/assets/usePeriod';
import MonthButton from './MonthButton';

const Selector = () => {
  const { period, dispatch } = usePeriod();
  return (
    <div>
      <Grid container direction='row' justifyContent='space-around'>
        <Button variant='outlined' size='large' onClick={() => dispatch({ type: 'today' })}>
          今日
        </Button>
        <Typography variant='h5'>{`${period.year}年${period.month}月`}</Typography>
        <div>
          <Button onClick={() => dispatch({ type: 'pre_month' })}>
            <ArrowBack />
          </Button>
          <Button onClick={() => dispatch({ type: 'next_month' })}>
            <ArrowForward />
          </Button>
        </div>
      </Grid>
      <Box my={3}>
        <MonthButton />
      </Box>
    </div>
  );
};

export default Selector;
