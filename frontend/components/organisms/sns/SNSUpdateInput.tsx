import { TextField, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { SNS } from '../../../types/model/sns';

type Props = {
  sns: SNS[];
};

const SNSUpdateInput: FC<Props> = ({ sns }) => {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sns',
  });

  useEffect(() => {
    console.log(sns);
    fields.push(...sns);
    console.log(fields);
  }, []);

  return (
    <>
      <Typography>SNS</Typography>
      <button type='button' onClick={() => append({ url: 'url appended' })}>
        append
      </button>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input placeholder='url' {...register(`sns.${index}.url` as const)} />
          <button type='button' onClick={() => remove(index)}>
            remove
          </button>
        </div>
      ))}
    </>
  );
};

export default SNSUpdateInput;
