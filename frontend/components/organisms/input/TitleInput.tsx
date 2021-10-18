import { TextField, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
  defaultValue?: string;
};

const TitleInput: FC<Props> = ({ defaultValue = '' }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setValue('title', defaultValue);
  }, [defaultValue]);

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='title'
        rules={{ required: 'title is required', min: 1, max: 100 }}
        render={({ field }) => (
          <TextField {...field} variant='outlined' margin='normal' placeholder='Title *' fullWidth />
        )}
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
