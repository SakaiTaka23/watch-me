import useSWR from 'swr';
import { User } from '../../../types/model/user';
import { fetcher } from '../axios';

const useGetUserInformation = (schedule_title: string) => {
  const { data, error } = useSWR<User, any>(`user/${schedule_title}/info`, fetcher);

  return {
    userInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetUserInformation;
