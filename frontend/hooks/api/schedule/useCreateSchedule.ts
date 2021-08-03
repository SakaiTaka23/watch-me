import { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import { Schedule } from '../../../types/model/schedule';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

const useCreateSchedule = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState<AxiosError>(null);
  const { token } = useContext(AuthContext);
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const createSchedule = (schedule: Schedule) => {
    axiosInstance
      .post('/schedule', schedule, headers)
      .then((res) => {
        setId(res.data.id);
      })
      .catch((e: AxiosError) => {
        setError(e);
      });
  };

  return { createSchedule, id, error };
};

export default useCreateSchedule;
