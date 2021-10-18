import { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import { Schedule } from '../../../types/model/schedule';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

const useUpdateSchedule = () => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState<AxiosError>(null);
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const updateSchedule = (schedule_id: string, schedule: Schedule) => {
    axiosInstance.patch(`/schedule/${schedule_id}`, schedule, headers).catch((e: AxiosError) => {
      setError(e);
    });
  };
  return { updateSchedule, error };
};

export default useUpdateSchedule;
