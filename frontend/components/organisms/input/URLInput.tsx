import { TextField, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
  defaultValue?: string;
};

const URLInput: FC<Props> = ({ defaultValue = '' }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setValue('url', defaultValue);
  }, [defaultValue]);

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='url'
        rules={{ pattern: /https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+/ }}
        render={({ field }) => <TextField {...field} variant='outlined' margin='normal' placeholder='URL' fullWidth />}
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
