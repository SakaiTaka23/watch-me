import { Container, Typography, TextField, Button, MenuItem, Select } from '@material-ui/core';
import { Picker } from 'emoji-mart';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useCreateSchedule from '../../hooks/api/schedule/useCreateSchedule';
import { Schedule } from '../../types/model/schedule';
import 'emoji-mart/css/emoji-mart.css';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const New = () => {
  const { createSchedule, id, error } = useCreateSchedule();
  const { handleSubmit, register } = useForm();
  const [emoji, setEmoji] = useState<string>('');
  const [year, setYear] = useState(2021);
  const [selectedStartingDate, handleStartingDateChange] = useState(new Date());
  const [selectedEndingDate, handleEndingDateChange] = useState(new Date());

  const handleClick = (data: any) => {
    console.log('clicked');
    console.log(data);
    // createSchedule(testAllSchedule);
    // console.log(error);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value as number);
    console.log(year);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container maxWidth='md'>
          <div>
            <Typography component='h1' variant='h5'>
              Create New Schedule
            </Typography>
            <form onSubmit={handleSubmit(handleClick)}>
              <TextField
                variant='outlined'
                margin='normal'
                placeholder='Title *'
                fullWidth
                {...register('title', {
                  required: true,
                })}
              />
              <div suppressHydrationWarning={true}>
                {process.browser && (
                  <Picker
                    onSelect={(e) => {
                      setEmoji(e.id);
                    }}
                  />
                )}
              </div>
              <TextField
                value={emoji}
                variant='outlined'
                margin='normal'
                placeholder='Please Pick An Emoji'
                fullWidth
                {...register('emoji', {
                  required: true,
                })}
              />
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
              <TextField variant='outlined' margin='normal' placeholder='Place' fullWidth {...register('place')} />
              <TextField variant='outlined' margin='normal' placeholder='URL' fullWidth {...register('url')} />
              {/* 2021~2025の間の範囲に収まるべき */}
              <input type='number' value={year} readOnly {...register('year')} />
              {/* <DatePicker
                disableToolbar
                variant='inline'
                label='Only calendar'
                helperText='No year selection'
                value={selectedStartingDate}
                onChange={handleStartingDateChange}
              />

              <DatePicker
                disableToolbar
                variant='inline'
                label='Only calendar'
                helperText='No year selection'
                value={selectedEndingDate}
                onChange={handleEndingDateChange}
              /> */}
              <Button type='submit'>Create</Button>
            </form>
          </div>
        </Container>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default New;
