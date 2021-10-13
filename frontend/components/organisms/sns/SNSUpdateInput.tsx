import { Button, TextField, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
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
      <Typography>SNS</Typography>
      <Button type='button' onClick={() => appendForm()}>
        append
      </Button>
      {fields.map((field, index) => (
        <div key={field.id}>
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
          <Typography color='error' variant='overline'>
            {errors?.['sns']?.[index]?.['url']?.['message']}
          </Typography>
          <Button type='button' onClick={() => remove(index)}>
            remove
          </Button>
        </div>
      ))}
    </>
  );
};

export default SNSUpdateInput;
