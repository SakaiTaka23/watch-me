import { TextField } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
  defaultValue?: string;
};

const PlaceInput: FC<Props> = ({ defaultValue = '' }) => {
  const { control, setValue } = useFormContext();

  useEffect(() => {
    setValue('place', defaultValue);
  }, [defaultValue]);

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='place'
        render={({ field }) => (
          <TextField {...field} variant='outlined' margin='normal' placeholder='Place' fullWidth />
        )}
      />
    </>
  );
};

export default PlaceInput;
