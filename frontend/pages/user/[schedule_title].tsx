import { GetServerSideProps } from 'next';
import { FC, useState } from 'react';
import useGetSchedules from '../../hooks/api/user/useGetSchedules';

type Props = {
  schedule_title: string;
};

const schedules = [
  {
    id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
    about: 'string',
    emoji: 'string',
    year: 2021,
    month: 1,
    day: 1,
    start_time: '11:00',
    end_time: '17:00',
    place: 'string',
    title: 'string',
    url: 'http://example.com',
    user_id: 'a169451c-8525-4352-b8ca-070dd449a1a5',
  },
  {
    id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
    about: 'string',
    emoji: 'string',
    year: 2021,
    month: 1,
    day: 1,
    start_time: '11:00',
    end_time: '17:00',
    place: 'string',
    title: 'string',
    url: 'http://example.com',
    user_id: 'a169451c-8525-4352-b8ca-070dd449a1a5',
  },
  {
    id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
    about: 'string',
    emoji: 'string',
    year: 2021,
    month: 1,
    day: 1,
    start_time: '11:00',
    end_time: '17:00',
    place: 'string',
    title: 'string',
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
    <>
      <h1>ok</h1>
    </>
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
