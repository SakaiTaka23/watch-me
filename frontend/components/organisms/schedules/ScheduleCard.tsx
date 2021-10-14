import { Box, Grid, Typography } from '@material-ui/core';
import { Emoji } from 'emoji-mart';
import React, { FC } from 'react';
import TimeFormat, { Schedule } from '../../../types/model/schedule';

type Props = {
  schedule: Schedule;
};

const ScheduleCard: FC<Props> = ({ schedule }) => {
  const month = new Date(schedule.start_time).getMonth();
  const period = TimeFormat(schedule);
  return (
    <Grid item>
      <Grid container direction='row' justifyContent='space-around' alignItems='center'>
        <Typography variant='h1'>{month}</Typography>
        <Grid item xs={6}>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h5'>{schedule.title}</Typography>
            <Typography variant='subtitle1'>{period}</Typography>
          </Box>
        </Grid>
        <Emoji emoji={schedule.emoji} size={64} />
      </Grid>
    </Grid>
  );
};

export default ScheduleCard;
