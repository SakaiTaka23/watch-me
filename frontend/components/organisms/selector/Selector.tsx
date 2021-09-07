import { Button, Typography } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React from 'react';
import { usePeriod } from '../../../hooks/assets/usePeriod';
import MonthButton from './MonthButton';

const Selector = () => {
  const { period, dispatch } = usePeriod();
  return (
    <div>
      <Button onClick={() => dispatch({ type: 'today' })}>今日</Button>
      <Typography variant='h5'>{`${period.year}年${period.month}月`}</Typography>
      <Button onClick={() => dispatch({ type: 'pre_month' })}>
        <ArrowBack />
      </Button>
      <Button onClick={() => dispatch({ type: 'next_month' })}>
        <ArrowForward />
      </Button>
      <MonthButton />
    </div>
  );
};

export default Selector;
