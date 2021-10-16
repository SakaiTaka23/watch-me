import { useContext } from 'react';
import useSWR from 'swr';
import { Schedule } from '../../../types/model/schedule';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

type Response = {
  schedules: Schedule[];
  title: string;
};

const useGetUserSchedules = () => {
  const { token } = useContext(AuthContext);
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const fetcher = (url: string) => axiosInstance.get(url, headers).then((res) => res.data);
  const { data, error } = useSWR<Response, any>(`/schedule`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetUserSchedules;
