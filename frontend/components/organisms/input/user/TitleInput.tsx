import { TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, FC } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  schedule_title: string;
};

const TitleInput: FC<Props> = ({ schedule_title }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  setValue('schedule_title', schedule_title);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('schedule_title', e.target.value);
  };

  return (
    <>
      <TextField
        variant='outlined'
        margin='normal'
        defaultValue={schedule_title}
        {...register('schedule_title', { required: true, min: 1, max: 20 })}
        onChange={handleTitle}
      />
      {errors.schedule_title && (
        <Typography color='error' variant='overline'>
          schedule title must be 1 to 20 words
        </Typography>
      )}
    </>
  );
};

export default TitleInput;
