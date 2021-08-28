import { DatePicker, MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import DateFnsUtils from '@date-io/date-fns';
import { TextField, Typography } from '@material-ui/core';

const PeriodInput = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [year, setYear] = useState(2021);
  const dt = new Date();
  const [day, setDay] = useState(dt);

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const y = e.target.value;
    setYear(Number(y));
  };

  const handleDateChange = (date: Date) => {
    setDay(date);
    setValue('month', date.getMonth() + 1);
    setValue('date', date.getDate());
  };

  const handleStartTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('start_time', e.target.value);
  };

  const handleEndTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('end_time', e.target.value);
  };

  useEffect(() => {
    setValue('year', year);
  }, [year]);

  useEffect(() => {
    const date = new Date();
    setValue('month', date.getMonth() + 1);
    setValue('date', date.getDate());
    setValue('start_time', `${date.getHours()}:${date.getMinutes()}`);
    setValue('end_time', `${date.getHours() + 1}:${date.getMinutes()}`);
  }, []);

  return (
    <>
      <TextField
        type='number'
        defaultValue={year}
        {...register('year', {
          max: 2025,
          min: 2021,
        })}
        onChange={handleYearChange}
      />
      {errors.year && (
        <Typography color='error' variant='overline'>
          year must be between 2021 to 2025
        </Typography>
      )}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker disableToolbar variant='inline' format='MM/dd' value={day} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
      <input type='hidden' {...register('month')} />
      <input type='hidden' {...register('date')} />

      <TextField
        type='time'
        defaultValue={`${dt.getHours()}:${dt.getMinutes()}`}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
        {...register('start_time')}
        onChange={handleStartTimeChange}
      />

      <TextField
        type='time'
        defaultValue={`${dt.getHours() + 1}:${dt.getMinutes()}`}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
        {...register('end_time')}
        onChange={handleEndTimeChange}
      />
    </>
  );
};

export default PeriodInput;
