import { Box } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import ScheduleList from '../../components/organisms/schedules/ScheduleList';
import Selector from '../../components/organisms/selector/Selector';
import ProfileCard from '../../components/organisms/user/ProfileCard';
import { PeriodProvider } from '../../hooks/assets/usePeriod';

type Props = {
  schedule_title: string;
};

const GetUserSchedule: FC<Props> = ({ schedule_title }) => {
  return (
    <>
      <Box mt={5} mb={2}>
        <ProfileCard schedule_title={schedule_title} />
      </Box>
      <PeriodProvider>
        <Box mt={5} mb={4}>
          <Selector />
        </Box>
        <ScheduleList schedule_title={schedule_title} />
      </PeriodProvider>
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
