import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
import Profile from '../components/organisms/Profile';
import ScheduleCard from '../components/organisms/ScheduleCard';

const index = () => {
  return (
    <>
      <Profile />
      <div>2021年</div>
      <Pagination count={12} />
      <ScheduleCard />
    </>
  );
};

export default index;
