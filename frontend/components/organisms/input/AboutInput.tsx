import { TextField, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
  defaultValue?: string;
};

const AboutInput: FC<Props> = ({ defaultValue = '' }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [count, setCount] = useState(defaultValue.length);

  useEffect(() => {
    setValue('about', defaultValue);
  }, [defaultValue]);

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='about'
        rules={{ maxLength: 250 }}
        render={({ field }) => (
          <TextField
            {...field}
            variant='outlined'
            margin='normal'
            placeholder='About'
            minRows='5'
            maxRows='5'
            helperText={`${count} / 250`}
            multiline
            fullWidth
            onChange={(e) => field.onChange(setCount(e.target.value.length))}
          />
        )}
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
