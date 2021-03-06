import { Container, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useCreateSchedule from '../../../hooks/api/schedule/useCreateSchedule';
import SubmitButton from '../../molecules/SubmitButton';
import AboutInput from '../input/AboutInput';
import EmojiInput from '../input/EmojiInput';
import PeriodInput from '../input/PeriodInput';
import PlaceInput from '../input/PlaceInput';
import TitleInput from '../input/TitleInput';
import URLInput from '../input/URLInput';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const NewScheduleForm = () => {
  const classes = useStyles();
  const methods = useForm();
  const router = useRouter();
  const { createSchedule, created, error } = useCreateSchedule();

  const handleClick = (data: any) => {
    console.log(data);
    createSchedule(data);
    console.log(error);
    if (error === null) {
      router.push(`/schedule/${created.title}/${created.id}`);
    }
  };

  return (
    <Container maxWidth='md'>
      <div className={classes.paper}>
        <FormProvider {...methods}>
          <form className={classes.form} onSubmit={methods.handleSubmit(handleClick)}>
            <TitleInput />
            <EmojiInput />
            <PeriodInput />
            <AboutInput />
            <PlaceInput />
            <URLInput />
            <SubmitButton />
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};

export default NewScheduleForm;
