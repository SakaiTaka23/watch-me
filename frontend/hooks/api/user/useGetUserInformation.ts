import useSWR from 'swr';
import { User } from '../../../types/model/user';
import { fetcher } from '../axios';

const useGetUserInformation = (username: string) => {
  const { data, error } = useSWR<User, any>(`user/${username}/info`, fetcher);

  return {
    userInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetUserInformation;
