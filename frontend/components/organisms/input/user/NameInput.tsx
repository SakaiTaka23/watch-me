import { TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, FC } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
};

const NameInput: FC<Props> = ({ name }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  setValue('name', name);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('name', e.target.value);
  };

  return (
    <>
      <TextField
        label='name'
        variant='outlined'
        margin='normal'
        fullWidth
        defaultValue={name}
        {...register('name', { required: true, min: 1, max: 30 })}
        onChange={handleName}
      />
      {errors.name && (
        <Typography color='error' variant='overline'>
          name must be 1 to 30 words
        </Typography>
      )}
    </>
  );
};

export default NameInput;
