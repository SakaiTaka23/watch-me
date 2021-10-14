import { Box, IconButton, TextField, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { SNS } from '../../../types/model/sns';

type Props = {
  sns: SNS[];
};

const SNSUpdateInput: FC<Props> = ({ sns }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sns',
  });

  useEffect(() => {
    if (sns) {
      fields.push(...sns);
    }
  }, [sns]);

  const appendForm = () => {
    if (fields.length < 5) {
      append({});
    }
  };

  return (
    <>
      <Box display='flex' alignItems='center'>
        <Typography variant='h5'>SNS</Typography>
        <IconButton aria-label='add' type='button' onClick={() => appendForm()}>
          <AddIcon />
        </IconButton>
      </Box>
      {fields.map((field, index) => (
        <div key={field.id}>
          <Box display='flex'>
            <Controller
              name={`sns.${index}.url`}
              control={control}
              defaultValue={field?.['url'] ?? ''}
              rules={{
                required: 'URL must be filled or deleted',
                pattern: { value: /https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+/, message: 'must be valid url' },
              }}
              render={({ field }) => (
                <TextField variant='outlined' margin='normal' placeholder='url' fullWidth {...field} />
              )}
            />
            <IconButton aria-label='delete' type='button' onClick={() => remove(index)}>
              <DeleteIcon />
            </IconButton>
          </Box>
          <Typography color='error' variant='overline'>
            {errors?.['sns']?.[index]?.['url']?.['message']}
          </Typography>
        </div>
      ))}
    </>
  );
};

export default SNSUpdateInput;
