import React, { useContext } from 'react';
import ScheduleList from '../components/organisms/schedules/ScheduleList';
import useGetUserSchedules from '../hooks/api/schedule/useGetUserSchedules';
import { AuthContext } from '../hooks/firebase/authContext';
import { useFirebase } from '../hooks/firebase/useFirebase';

const Index = () => {
  const { user } = useContext(AuthContext);
  const { Logout } = useFirebase();
  const { data, isLoading } = useGetUserSchedules();

  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <pre>{user ? user.displayName + 'でログインしています' : 'ログインしていません'}</pre>
      <button onClick={() => Logout()}>Logout</button>

      <ScheduleList schedule_title={data.title} schedules={data.schedules} />
    </div>
  );
};

export default Index;
