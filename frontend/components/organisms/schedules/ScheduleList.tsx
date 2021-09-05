import { Divider, Grid, Link } from '@material-ui/core';
import React, { FC } from 'react';
import { Schedule } from '../../../types/model/schedule';
import ScheduleCard from './ScheduleCard';

type Props = {
  schedule_title: string;
  schedules: Schedule[];
};

const ScheduleList: FC<Props> = ({ schedule_title, schedules }) => {
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
