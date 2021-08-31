import { Typography } from '@material-ui/core';
import { Emoji } from 'emoji-mart';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import { Schedule } from '../../../types/model/schedule';

type Props = {
  schedule: Schedule;
};

const Index: FC<Props> = ({ schedule }) => {
  return (
    <div>
      <Emoji emoji={schedule.emoji} size={64} />
      <Typography>{schedule.title}</Typography>
      <Typography>{`${schedule.start_time}〜${schedule?.end_time}`}</Typography>
      <Typography>{schedule?.place}</Typography>
      <Typography>{schedule?.url}</Typography>
      <Typography>{schedule?.about}</Typography>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { schedule_title, id } = context.params;
  console.log(schedule_title, id);
  const schedule = {
    id: '122344',
    about: 'string',
    emoji: 'leg',
    start_time: '2021-08-31T15:00',
    end_time: '2021-08-31T16:30',
    place: 'YouTube',
    title: 'log',
    url: 'https://youtube.com/',
    user_id: '1234',
  };
  return {
    props: {
      schedule,
    },
  };
};

export default Index;
