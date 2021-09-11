import { Box, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useGetUserInformation from '../../../hooks/api/user/useGetUserInformation';
import useUpdateUser from '../../../hooks/api/user/useUpdateUser';
import SNSList from '../sns/SNSList';

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

type Props = {
  schedule_title: string;
};

const UpdateForm: FC<Props> = ({ schedule_title }) => {
  const classes = useStyles();
  const methods = useForm();
  const { userInfo, isLoading } = useGetUserInformation(schedule_title);
  const { updateUser } = useUpdateUser();

  const handleClick = (data: any) => {
    updateUser(data.name, data.title);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <div className={classes.paper}>
        <FormProvider {...methods}>
          <form className={classes.form} onSubmit={methods.handleSubmit(handleClick)}>
            <TextField
              variant='outlined'
              margin='normal'
              value={userInfo.schedule_title}
              {...methods.register('schedule_title')}
            />
            <TextField variant='outlined' margin='normal' value={userInfo.name} {...methods.register('name')} />
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};

export default UpdateForm;
