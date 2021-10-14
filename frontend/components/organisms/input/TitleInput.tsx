import { TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const TitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        variant='outlined'
        margin='normal'
        placeholder='Title *'
        fullWidth
        {...register('title', {
          required: 'title is required',
        })}
      />
      {errors.title && (
        <Typography color='error' variant='overline'>
          {errors.title.message}
        </Typography>
      )}
    </>
  );
};
export default TitleInput;
