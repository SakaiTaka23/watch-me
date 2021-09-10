import useSWR from 'swr';
import { fetcher } from '../axios';

type Response = {
  result: boolean;
};

const useUniqueUser = (schedule_title: string) => {
  const { data, error } = useSWR<Response, any>(`user/${schedule_title}/unique`, fetcher);

  return {
    isUnique: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUniqueUser;
