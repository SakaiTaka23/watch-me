import { Typography } from '@material-ui/core';
import { Emoji } from 'emoji-mart';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import useGetScheduleInfo from '../../../hooks/api/schedule/useGetScheduleInfo';

type Props = {
  schedule_title: string;
  id: string;
};

const info = {
  id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
  about: 'string',
  emoji: 'leg',
  start_time: '2021-07-28T15:00',
  end_time: '2021-07-28T15:00',
  place: 'string',
  title: 'string',
  url: 'http://example.com',
  user_id: 'a169451c-8525-4352-b8ca-070dd449a1a5',
};

const Index: FC<Props> = ({ schedule_title, id }) => {
  console.log(schedule_title, id);
  // const { info, isLoading, isError } = useGetScheduleInfo(id, schedule_title);

  return (
    <div>
      <Emoji emoji={info.emoji} size={64} />
      <Typography>{info.title}</Typography>
      <Typography>{`${info.start_time}〜${info?.end_time}`}</Typography>
      <Typography>{info?.place}</Typography>
      <Typography>{info?.url}</Typography>
      <Typography>{info?.about}</Typography>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { schedule_title, id } = context.params;
  if (Array.isArray(schedule_title) || Array.isArray(id)) {
    console.log(schedule_title, id);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      schedule_title: schedule_title,
      id: id,
    },
  };
};

export default Index;
