import { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import { Schedule } from '../../../types/model/schedule';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

type Response = {
  id: string;
  title: string;
};

const useCreateSchedule = () => {
  const [created, setCreated] = useState<Response>();
  const [error, setError] = useState<AxiosError>(null);
  const { token } = useContext(AuthContext);
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const createSchedule = (schedule: Schedule) => {
    axiosInstance
      .post('/schedule', schedule, headers)
      .then((res) => {
        setCreated({ id: res.data.id, title: res.data.title });
      })
      .catch((e: AxiosError) => {
        setError(e);
      });
  };

  return { createSchedule, created, error };
};

export default useCreateSchedule;
