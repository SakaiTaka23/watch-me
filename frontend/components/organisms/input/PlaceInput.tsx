import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const PlaceInput = () => {
  const { register } = useFormContext();
  return <TextField variant='outlined' margin='normal' placeholder='Place' fullWidth {...register('place')} />;
};

export default PlaceInput;
