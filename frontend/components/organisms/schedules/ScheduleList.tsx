import { Divider, Grid, Link } from '@material-ui/core';
import React, { FC } from 'react';
import { Schedule } from '../../../types/model/schedule';
import ScheduleCard from './ScheduleCard';

type Props = {
  schedule_title: string;
};

const schedules: Schedule[] = [
  {
    id: '497f6eca-6276-4993-bfeb-53cbbbba6f07',
    about: 'about',
    emoji: 'leg',
    start_time: '2021-07-28T15:00',
    end_time: '',
    place: 'place',
    title: 'title',
    url: 'http://example.com',
    user_id: 'a169451c-8525-4352-b8ca-070dd449a1a5',
  },
  {
    id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
    about: 'about',
    emoji: 'leg',
    start_time: '2021-07-28T15:00',
    end_time: '2021-07-28T15:00',
    place: 'place',
    title: 'title',
    url: 'http://example.com',
    user_id: 'a169451c-8525-4352-b8ca-070dd449a1a5',
  },
];

const ScheduleList: FC<Props> = ({ schedule_title }) => {
  // const { schedules, isLoading, isError } = useGetSchedules(schedule_title, year, month);

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
