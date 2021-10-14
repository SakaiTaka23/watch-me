import { TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const URLInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <TextField
        variant='outlined'
        margin='normal'
        placeholder='URL'
        fullWidth
        {...register('url', {
          pattern: /https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+/,
        })}
      />
      {errors.url && (
        <Typography color='error' variant='overline'>
          must be valid url
        </Typography>
      )}
    </>
  );
};

export default URLInput;
