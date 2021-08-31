import React, { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const createDate = (dt: Date) => {
  return `${dt.getFullYear()}-${dt.getMonth().toString().padStart(2, '0')}-${dt
    .getDate()
    .toString()
    .padStart(2, '0')}T${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
};

const PeriodInput = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const dt = new Date();
  const today = createDate(dt);
  dt.setHours(dt.getHours() + 1);
  const after = createDate(dt);

  setValue('start_time', after);
  setValue('end_time', today);

  const handleStartTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('start_time', e.target.value);
  };

  const handleEndTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('end_time', e.target.value);
  };

  return (
    <>
      <TextField
        label='start_time'
        type='datetime-local'
        defaultValue={today}
        InputLabelProps={{
          shrink: true,
        }}
        {...register('start_time')}
        onChange={handleStartTimeChange}
      />

      <TextField
        label='end_time'
        type='datetime-local'
        defaultValue={after}
        InputLabelProps={{
          shrink: true,
        }}
        {...register('end_time')}
        onChange={handleEndTimeChange}
      />
    </>
  );
};

export default PeriodInput;
