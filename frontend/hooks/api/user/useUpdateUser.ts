import { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

const useUpdateUser = () => {
  const updateUser = (name: string, title: string) => {
    const data = { name, title };
    const [error, setError] = useState<AxiosError>(null);
    const { token } = useContext(AuthContext);
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    axiosInstance.patch('/user', data, headers).catch((e: AxiosError) => {
      setError(e);
    });

    return { updateUser, error };
  };
};

export default useUpdateUser;
