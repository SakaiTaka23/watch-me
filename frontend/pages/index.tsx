import React, { useContext } from 'react';
import ScheduleList from '../components/organisms/schedules/ScheduleList';
import useGetUserSchedules from '../hooks/api/schedule/useGetUserSchedules';
import { AuthContext } from '../hooks/firebase/authContext';

const Index = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetUserSchedules();

  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      {user ? <ScheduleList schedule_title={data.title} schedules={data.schedules} /> : <h1>ログインしていません</h1>}
    </div>
  );
};

export default Index;
