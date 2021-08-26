import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
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

const handleClick = (data: any) => {
  console.log('clicked');
  console.log(data);
  // createSchedule(testAllSchedule);
  // console.log(error);
};

const NewScheduleForm = () => {
  const classes = useStyles();
  const methods = useForm();
  return (
    <Container maxWidth='md'>
      <div className={classes.paper}>
        <FormProvider {...methods}>
          <form className={classes.form} onSubmit={methods.handleSubmit(handleClick)}>
            <TitleInput />
            <EmojiInput />
            {/* <PeriodInput /> */}
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
