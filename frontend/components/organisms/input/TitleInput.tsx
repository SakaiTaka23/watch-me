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
          min: 1,
          max: 100,
        })}
      />
      {errors.title && (
        <Typography color='error' variant='overline'>
          title must be 1 to 100 words
        </Typography>
      )}
    </>
  );
};
export default TitleInput;
