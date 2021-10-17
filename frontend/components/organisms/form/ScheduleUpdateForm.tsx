import { Container, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useEditSchedule from '../../../hooks/api/schedule/useEditSchedule';
import useUpdateSchedule from '../../../hooks/api/schedule/useUpdateSchedule';
import SubmitButton from '../../molecules/SubmitButton';
import AboutInput from '../input/AboutInput';
import EmojiInput from '../input/EmojiInput';
import PeriodInput from '../input/PeriodInput';
import PlaceInput from '../input/PlaceInput';
import TitleInput from '../input/TitleInput';
import URLInput from '../input/URLInput';
import Loading from '../loading/Loading';

type Props = {
  id: string;
};

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

const ScheduleUpdateForm: FC<Props> = ({ id }) => {
  const classes = useStyles();
  const { schedule, isLoading } = useEditSchedule(id);
  const { updateSchedule } = useUpdateSchedule();
  const methods = useForm({ defaultValues: schedule });

  if (isLoading) {
    return <Loading />;
  }

  console.log(schedule);

  const handleClick = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
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

export default ScheduleUpdateForm;
