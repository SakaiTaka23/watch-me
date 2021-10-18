import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import ScheduleUpdateForm from '../../../../components/organisms/form/ScheduleUpdateForm';

type Props = {
  schedule_title: string;
  id: string;
};

const edit: FC<Props> = ({ id, schedule_title }) => {
  return <ScheduleUpdateForm id={id} schedule_title={schedule_title} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { schedule_title, id } = context.params;
  if (Array.isArray(schedule_title) || Array.isArray(id)) {
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

export default edit;
