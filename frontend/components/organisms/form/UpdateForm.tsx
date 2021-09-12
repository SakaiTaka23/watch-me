import { Container, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useUserEdit from '../../../hooks/api/user/useUserEdit';
import useUpdateUser from '../../../hooks/api/user/useUpdateUser';
import SubmitButton from '../../molecules/SubmitButton';
import TitleInput from '../input/user/TitleInput';
import NameInput from '../input/user/NameInput';

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

const UpdateForm: FC = () => {
  const classes = useStyles();
  const methods = useForm();
  const { userInfo, isLoading } = useUserEdit();
  const { updateUser } = useUpdateUser();

  const handleClick = (data: any) => {
    updateUser(data.name, data.schedule_title);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }
  methods.setValue('name', userInfo.name);

  return (
    <Container>
      <div className={classes.paper}>
        <FormProvider {...methods}>
          <form className={classes.form} onSubmit={methods.handleSubmit(handleClick)}>
            <TitleInput schedule_title={userInfo.schedule_title} />
            <NameInput name={userInfo.name} />
            <SubmitButton />
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};

export default UpdateForm;
