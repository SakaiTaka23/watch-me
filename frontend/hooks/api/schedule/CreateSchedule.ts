import axios from 'axios';
import useSWR from 'swr';
import { Schedule } from '../../../types/model/schedule';

const useCreateSchedule = (schedule: Schedule) => {
  const { data, error } = useSWR('/user', (url: string) => axios.post(url, schedule).then((res) => res.data));

  return {
    id: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCreateSchedule;
