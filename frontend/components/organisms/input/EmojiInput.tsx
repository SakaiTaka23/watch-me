import { TextField } from '@material-ui/core';
import { Picker } from 'emoji-mart';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import 'emoji-mart/css/emoji-mart.css';

const EmojiInput = () => {
  const { register } = useFormContext();
  const [emoji, setEmoji] = useState<string>('');

  return (
    <>
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
    </>
  );
};

export default EmojiInput;
