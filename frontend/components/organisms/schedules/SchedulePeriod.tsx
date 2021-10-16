import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import useGetSchedules from '../../../hooks/api/user/useGetSchedules';
import { usePeriod } from '../../../hooks/assets/usePeriod';
import Selector from '../selector/Selector';
import ScheduleList from './ScheduleList';

type Props = {
  schedule_title: string;
};

const SchedulePeriod: FC<Props> = ({ schedule_title }) => {
  const { period } = usePeriod();
  const { schedules, isLoading } = useGetSchedules(schedule_title, period.year, period.month);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Box mt={5} mb={4}>
        <Selector />
      </Box>
      <ScheduleList schedule_title={schedule_title} schedules={schedules} />
    </>
  );
};

export default SchedulePeriod;
