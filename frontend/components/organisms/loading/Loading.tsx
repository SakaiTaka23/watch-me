import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return <Loader type='Watch' height={100} width={100} timeout={3000} />;
};

export default Loading;
