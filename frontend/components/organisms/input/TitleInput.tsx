import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const TitleInput = () => {
  const { register } = useFormContext();

  return (
    <TextField
      variant='outlined'
      margin='normal'
      placeholder='Title *'
      fullWidth
      {...register('title,', {
        required: true,
      })}
    />
  );
};
export default TitleInput;
