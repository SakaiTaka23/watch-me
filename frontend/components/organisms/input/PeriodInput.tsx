import React, { FC, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@material-ui/core';

type Props = {
  startDefaultValue?: string;
  endDefaultValue?: string;
};

const createDate = (dt: Date) => {
  return `${dt.getFullYear()}-${dt.getMonth().toString().padStart(2, '0')}-${dt
    .getDate()
    .toString()
    .padStart(2, '0')}T${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
};

const PeriodInput: FC<Props> = ({ startDefaultValue = '', endDefaultValue = '' }) => {
  const { control, setValue } = useFormContext();

  useEffect(() => {
    const dt = new Date(startDefaultValue === '' ? '' : startDefaultValue);
    setValue('start_time', createDate(dt));
  }, [startDefaultValue]);

  useEffect(() => {
    setValue('end_time', endDefaultValue === '' ? '' : createDate(new Date(endDefaultValue)));
  }, [endDefaultValue]);

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='start_time'
        render={({ field }) => <TextField {...field} type='datetime-local' InputLabelProps={{ shrink: true }} />}
      />
      <Controller
        control={control}
        defaultValue=''
        name='end_time'
        render={({ field }) => <TextField {...field} type='datetime-local' InputLabelProps={{ shrink: true }} />}
      />
    </>
  );
};

export default PeriodInput;
