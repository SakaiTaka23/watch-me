import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useSNSEdit from '../../../hooks/api/sns/useSNSEdit';
import useSNSUpdate from '../../../hooks/api/sns/useSNSUpdate';
import { SNS } from '../../../types/model/sns';
import SubmitButton from '../../molecules/SubmitButton';
import SNSUpdateInput from '../sns/SNSUpdateInput';

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

const userSNS: SNS[] = [
  { id: '1', url: 'https://mui.com/' },
  { id: '2', url: 'https://react-hook-form.com/' },
];

const SNSUpdateForm = () => {
  const classes = useStyles();
  const methods = useForm();
  // const { userSNS, isLoading } = useSNSEdit();
  // const { updateSNS } = useSNSUpdate();

  const handleClick = (data: any) => {
    console.log(data);
    // updateSNS(data)
  };

  return (
    <Container>
      <div className={classes.paper}>
        <FormProvider {...methods}>
          <form className={classes.form} onSubmit={methods.handleSubmit(handleClick)}>
            <SNSUpdateInput sns={userSNS} />
            <SubmitButton />
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};

export default SNSUpdateForm;
