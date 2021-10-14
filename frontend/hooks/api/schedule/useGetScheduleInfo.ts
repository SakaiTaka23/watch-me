import useSWR from 'swr';
import { Schedule } from '../../../types/model/schedule';
import { fetcher } from '../axios';

const useGetScheduleInfo = (schedule_id: string, schedule_title: string) => {
  const { data, error } = useSWR<Schedule, any>(`/schedule/${schedule_title}/${schedule_id}`, fetcher);

  return {
    info: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetScheduleInfo;
