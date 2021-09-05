import { Grid, makeStyles } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import { FC, useState } from 'react';
import ScheduleCard from '../../components/organisms/card/ScheduleCard';
import useGetSchedules from '../../hooks/api/user/useGetSchedules';
import { Schedule } from '../../types/model/schedule';

type Props = {
  schedule_title: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const schedules: Schedule[] = [
  {
    id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
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

const GetUserSchedule: FC<Props> = ({ schedule_title }) => {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  // const { schedules, isLoading, isError } = useGetSchedules(schedule_title, year, month);
  console.log(schedules);

  return (
    <Grid container direction='column' spacing={2}>
      {schedules.map((schedule, i) => {
        return <ScheduleCard key={i} {...schedule} />;
      })}
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { schedule_title } = context.params;
  if (Array.isArray(schedule_title)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      schedule_title: schedule_title,
    },
  };
};

export default GetUserSchedule;
