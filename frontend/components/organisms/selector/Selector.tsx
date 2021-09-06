import { Button, Typography } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React from 'react';
import usePeriod from '../../../hooks/assets/usePeriod';
import MonthButton from './MonthButton';

const Selector = () => {
  const { year, month, ShowToday, NextMonth, PreMonth } = usePeriod();
  return (
    <div>
      <Button onClick={() => ShowToday()}>今日</Button>
      <Typography variant='h5'>{`${year}年${month}月`}</Typography>
      <Button onClick={PreMonth}>
        <ArrowBack />
      </Button>
      <Button onClick={NextMonth}>
        <ArrowForward />
      </Button>
      <MonthButton />
    </div>
  );
};

export default Selector;
