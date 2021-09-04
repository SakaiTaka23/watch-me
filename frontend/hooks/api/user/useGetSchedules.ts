import useSWR from 'swr';
import { Schedule } from '../../../types/model/schedule';
import { fetcher } from '../axios';

const useGetSchedules = (schedule_title: string, year: number, month: number) => {
  const { data, error } = useSWR<Schedule[], any>(`user/${schedule_title}/${year}/${month}`, fetcher);

  return {
    schedules: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetSchedules;
