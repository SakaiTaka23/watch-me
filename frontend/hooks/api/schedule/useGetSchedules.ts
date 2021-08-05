import useSWR from 'swr';
import { Schedule } from '../../../types/model/schedule';
import { fetcher } from '../axios';

const useGetSchedules = (username: string) => {
  const { data, error } = useSWR<Schedule[], any>(`user/${username}?year=2021&month=8`, fetcher);

  return {
    schedules: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetSchedules;
