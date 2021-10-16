import { Box, Divider, Grid, Link, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import ScheduleCard from './ScheduleCard';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Schedule } from '../../../types/model/schedule';

type Props = {
  schedule_title: string;
  schedules: Schedule[];
};

const ScheduleList: FC<Props> = ({ schedule_title, schedules }) => {
  if (schedules.length === 0) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='body1'>組まれている予定はありません</Typography>
        <ScheduleIcon />
      </Box>
    );
  }

  return (
    <Grid container direction='column' spacing={2}>
      {schedules.map((schedule) => {
        return (
          <div key={schedule.id}>
            <Link href={`/schedule/${schedule_title}/${schedule.id}`} color='inherit' underline='none'>
              <ScheduleCard schedule={schedule} />;
            </Link>
            <Divider />
          </div>
        );
      })}
    </Grid>
  );
};

export default ScheduleList;
