import { useContext } from 'react';
import useSWR from 'swr';
import { Schedule } from '../../../types/model/schedule';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

const useEditSchedule = (schedule_id: string) => {
  const { token } = useContext(AuthContext);
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const fetcher = (url: string) => axiosInstance.get(url, headers).then((res) => res.data);
  const { data, error } = useSWR<Schedule, any>(`schedule/${schedule_id}/edit`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useEditSchedule;
