import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const AboutInput = () => {
  const { register } = useFormContext();

  return (
    <TextField
      variant='outlined'
      margin='normal'
      placeholder='About'
      minRows='5'
      maxRows='10'
      multiline
      fullWidth
      {...register('about')}
    />
  );
};

export default AboutInput;
