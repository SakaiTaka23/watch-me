import useSWR from 'swr';
import { Schedule } from '../../../types/model/schedule';
import { fetcher } from '../axios';

const useGetSchedules = (username: string, year: number, month: number) => {
  const { data, error } = useSWR<Schedule[], any>(`user/${username}?year=${year}&month=${month}`, fetcher);

  return {
    schedules: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetSchedules;
