import React, { useContext } from 'react';
import useGetUserSchedule from '../hooks/api/schedule/useGetUserSchedules';
import { AuthContext } from '../hooks/firebase/authContext';
import { useFirebase } from '../hooks/firebase/useFirebase';

const Index = () => {
  const { user } = useContext(AuthContext);
  const { Logout } = useFirebase();
  const { schedules, isLoading, isError } = useGetUserSchedule();

  console.log(schedules);

  return (
    <div>
      <pre>{user ? user.displayName + 'でログインしています' : 'ログインしていません'}</pre>
      <button onClick={() => Logout()}>Logout</button>
    </div>
  );
};

export default Index;
