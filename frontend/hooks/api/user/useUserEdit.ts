import { useContext } from 'react';
import useSWR from 'swr';
import { User } from '../../../types/model/user';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

const useUserEdit = () => {
  const { token } = useContext(AuthContext);
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const fetcher = (url: string) => axiosInstance.get(url, headers).then((res) => res.data);
  const { data, error } = useSWR<User, any>(`user`, fetcher);

  return {
    userInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUserEdit;
