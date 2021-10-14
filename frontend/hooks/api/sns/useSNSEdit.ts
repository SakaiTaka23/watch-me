import { useContext } from 'react';
import useSWR from 'swr';
import { SNS } from '../../../types/model/sns';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

const useSNSEdit = () => {
  const { token } = useContext(AuthContext);
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const fetcher = (url: string) => axiosInstance.get(url, headers).then((res) => res.data);
  const { data, error } = useSWR<SNS[], any>(`sns`, fetcher);

  return {
    userSNS: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSNSEdit;
