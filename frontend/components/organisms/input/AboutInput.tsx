import { TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const AboutInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [count, setCount] = useState(0);

  const countWord = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value.length);
  };

  return (
    <>
      <TextField
        variant='outlined'
        margin='normal'
        placeholder='About'
        minRows='5'
        maxRows='5'
        helperText={`${count} / 250`}
        multiline
        fullWidth
        {...register('about', { maxLength: 250 })}
        onChange={countWord}
      />
      {errors.about && (
        <Typography color='error' variant='overline'>
          about must be 250 words or shorter
        </Typography>
      )}
    </>
  );
};

export default AboutInput;
