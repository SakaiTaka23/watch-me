import { Container, Typography } from '@material-ui/core';
import React from 'react';
import NewScheduleForm from '../../components/organisms/form/NewScheduleForm';

const New = () => {
  return (
    <Container maxWidth='md'>
      <div>
        <Typography component='h1' variant='h5'>
          Create New Schedule
        </Typography>
        <NewScheduleForm />
      </div>
    </Container>
  );
};

export default New;
