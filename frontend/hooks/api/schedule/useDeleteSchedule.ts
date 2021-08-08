import { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../firebase/authContext';
import { axiosInstance } from '../axios';

const useDeleteSchedule = () => {
  const [error, setError] = useState<AxiosError>(null);
  const { token } = useContext(AuthContext);
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const deleteSchedule = (id: string) => {
    axiosInstance.delete(`/schedule/${id}`, headers).catch((e: AxiosError) => {
      setError(e);
    });
  };

  return { deleteSchedule, error };
};

export default useDeleteSchedule;
