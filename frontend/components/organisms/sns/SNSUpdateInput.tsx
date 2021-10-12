import { Button, TextField, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { SNS } from '../../../types/model/sns';

type Props = {
  sns: SNS[];
};

const SNSUpdateInput: FC<Props> = ({ sns }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sns',
  });

  useEffect(() => {
    fields.push(...sns);
    console.log(fields);
  }, []);

  return (
    <>
      <Typography>SNS</Typography>
      <Button type='button' onClick={() => append({})}>
        append
      </Button>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            placeholder='url'
            {...register(`sns.${index}.url` as const, {
              required: 'SNS must be filled of deleted',
              pattern: {
                value: /https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+/,
                message: 'must be valid url',
              },
            })}
          />
          <Button type='button' onClick={() => remove(index)}>
            remove
          </Button>
        </div>
      ))}
    </>
  );
};

export default SNSUpdateInput;
