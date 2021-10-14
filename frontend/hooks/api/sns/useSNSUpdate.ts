import { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import { SNS } from '../../../types/model/sns';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

const useSNSUpdate = () => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState<AxiosError>(null);
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const updateSNS = (sns: SNS[]) => {
    axiosInstance.patch('/sns', sns, headers).catch((e: AxiosError) => {
      setError(e);
    });
  };
  return { updateSNS, error };
};

export default useSNSUpdate;
