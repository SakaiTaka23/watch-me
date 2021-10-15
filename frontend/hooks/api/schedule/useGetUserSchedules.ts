import { useContext } from 'react';
import useSWR from 'swr';
import { Schedule } from '../../../types/model/schedule';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

const useGetUserSchedule = () => {
  const { token } = useContext(AuthContext);
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const fetcher = (url: string) => axiosInstance.get(url, headers).then((res) => res.data);
  const { data, error } = useSWR<Schedule[], any>(`/schedule`, fetcher);

  return {
    schedules: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetUserSchedule;
