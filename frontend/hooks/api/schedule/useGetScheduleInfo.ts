import useSWR from 'swr';
import { Schedule } from '../../../types/model/schedule';
import { fetcher } from '../axios';

const useGetScheduleInfo = (id: string) => {
  const { data, error } = useSWR(`/schedule/${id}`, fetcher);

  return {
    info: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetScheduleInfo;
