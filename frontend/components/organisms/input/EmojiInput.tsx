import { Box, IconButton, makeStyles, Modal, TextField, Typography } from '@material-ui/core';
import { Emoji, Picker } from 'emoji-mart';
import React, { FC, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import 'emoji-mart/css/emoji-mart.css';
import { EmojiEmotions } from '@material-ui/icons';

type Props = {
  defaultValue: string;
};

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 3, 3, 3),
  },
}));

const EmojiInput: FC<Props> = ({ defaultValue = '' }) => {
  const classes = useStyles();
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [modalStyle] = useState(getModalStyle);
  const [emoji, setEmoji] = useState<string>(defaultValue);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmojiChange = (e) => {
    setEmoji(e.id);
  };

  useEffect(() => {
    setValue('emoji', emoji);
  }, [emoji]);

  const emojiPicker = (
    <div style={modalStyle} className={classes.paper} suppressHydrationWarning={true}>
      {process.browser && <Picker onSelect={handleEmojiChange} />}
    </div>
  );

  return (
    <>
      <Box display='flex' alignItems='center' flexDirection='row'>
        <Controller
          control={control}
          defaultValue=''
          name='emoji'
          rules={{ required: 'emoji is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              variant='outlined'
              margin='normal'
              placeholder='Pick An Emoji *'
              fullWidth
              InputProps={{ readOnly: true }}
            />
          )}
        />
        <Emoji emoji={emoji} size={30} />
        <IconButton color='primary' onClick={handleOpen}>
          <EmojiEmotions />
        </IconButton>
      </Box>
      <Modal open={open} onClose={handleClose} aria-labelledby='emoji-modal'>
        {emojiPicker}
      </Modal>
      {errors.emoji && (
        <Typography color='error' variant='overline'>
          {errors.emoji.message}
        </Typography>
      )}
    </>
  );
};

export default EmojiInput;
