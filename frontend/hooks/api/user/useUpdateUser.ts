import { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

const useUpdateUser = () => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState<AxiosError>(null);
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const updateUser = (name: string, schedule_title: string) => {
    const data = { name, schedule_title };
    console.log(data);
    axiosInstance.patch('/user', data, headers).catch((e: AxiosError) => {
      setError(e);
    });
  };
  return { updateUser, error };
};

export default useUpdateUser;
