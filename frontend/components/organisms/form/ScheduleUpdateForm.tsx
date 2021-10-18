import { Container, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useEditSchedule from '../../../hooks/api/schedule/useEditSchedule';
import useUpdateSchedule from '../../../hooks/api/schedule/useUpdateSchedule';
import { Schedule } from '../../../types/model/schedule';
import SubmitButton from '../../molecules/SubmitButton';
import AboutInput from '../input/AboutInput';
import EmojiInput from '../input/EmojiInput';
import PeriodInput from '../input/PeriodInput';
import PlaceInput from '../input/PlaceInput';
import TitleInput from '../input/TitleInput';
import URLInput from '../input/URLInput';
import Loading from '../loading/Loading';

type Props = {
  schedule_title: string;
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

const ScheduleUpdateForm: FC<Props> = ({ id, schedule_title }) => {
  const classes = useStyles();
  const { schedule, isLoading } = useEditSchedule(id);
  const { updateSchedule, error } = useUpdateSchedule();
  const methods = useForm();
  const router = useRouter();

  if (isLoading) {
    return <Loading />;
  }

  const handleClick = (data: Schedule) => {
    console.log(data);
    updateSchedule(id, data);
    if (error === null) {
      router.push(`/schedule/${schedule_title}/${id}`);
    } else {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className={classes.paper}>
        <FormProvider {...methods}>
          <form className={classes.form} onSubmit={methods.handleSubmit(handleClick)}>
            <TitleInput defaultValue={schedule.title} />
            <EmojiInput defaultValue={schedule.emoji} />
            <PeriodInput startDefaultValue={schedule.start_time} endDefaultValue={schedule.end_time} />
            <AboutInput defaultValue={schedule?.about} />
            <PlaceInput defaultValue={schedule?.place} />
            <URLInput defaultValue={schedule?.url} />
            <SubmitButton />
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};

export default ScheduleUpdateForm;
