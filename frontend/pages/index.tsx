import React, { useContext } from 'react';
import Landing from '../components/organisms/landing/Landing';
import Loading from '../components/organisms/loading/Loading';
import ScheduleList from '../components/organisms/schedules/ScheduleList';
import useGetUserSchedules from '../hooks/api/schedule/useGetUserSchedules';
import { AuthContext } from '../hooks/firebase/authContext';

const Index = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetUserSchedules();

  if (isLoading) {
    return <Loading />;
  }

  return <div>{user ? <ScheduleList schedule_title={data.title} schedules={data.schedules} /> : <Landing />}</div>;
};

export default Index;
