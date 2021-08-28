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
  const [day, setDay] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const y = e.target.value;
    setYear(Number(y));
  };

  const handleDateChange = (date: Date) => {
    setDay(date);
    setValue('month', date.getMonth() + 1);
    setValue('date', date.getDate());
  };

  useEffect(() => {
    setValue('year', year);
  }, [year]);

  useEffect(() => {
    const date = new Date();
    setValue('month', date.getMonth() + 1);
    setValue('date', date.getDate());
  }, []);

  return (
    <>
      {/* 2021~2025の間の範囲に収まるべき */}
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
        <input type='hidden' {...register('month')} />
        <input type='hidden' {...register('date')} />

        <TimePicker
          showTodayButton
          todayLabel='now'
          ampm={false}
          value={startTime}
          minutesStep={5}
          onChange={setStartTime}
        />

        <TimePicker
          showTodayButton
          todayLabel='now'
          ampm={false}
          value={endTime}
          minutesStep={5}
          onChange={setEndTime}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default PeriodInput;
