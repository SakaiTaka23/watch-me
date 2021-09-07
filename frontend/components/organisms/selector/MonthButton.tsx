import { Box, Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
import { usePeriod } from '../../../hooks/assets/usePeriod';

const MonthButton = () => {
  const { dispatch, period } = usePeriod();
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Box display='flex' flexDirection='row' flexWrap='wrap'>
      <ButtonGroup variant='contained' color='primary' aria-label='outlined primary button group'>
        {months.map((m) => {
          return (
            <Button
              color={period.month === m ? 'secondary' : 'primary'}
              key={m}
              onClick={() => {
                dispatch({ type: 'change', month: m });
              }}
            >{`${m}月`}</Button>
          );
        })}
      </ButtonGroup>
    </Box>
  );
};

export default MonthButton;
