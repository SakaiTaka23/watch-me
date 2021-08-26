import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const URLInput = () => {
  const { register } = useFormContext();
  return <TextField variant='outlined' margin='normal' placeholder='URL' fullWidth {...register('url')} />;
};

export default URLInput;
