import { Box, Grid, Typography } from '@material-ui/core';
import { Emoji } from 'emoji-mart';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import Loading from '../../../../components/organisms/loading/Loading';
import useGetScheduleInfo from '../../../../hooks/api/schedule/useGetScheduleInfo';
import { StartTimeFormat, EndTimeFormat } from '../../../../types/model/schedule';

type Props = {
  schedule_title: string;
  id: string;
};

const defaultProps = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  m: 2,
  p: 5,
  border: 2,
  borderRadius: 16,
};

const Index: FC<Props> = ({ schedule_title, id }) => {
  const router = useRouter();
  const { info, isLoading, isError } = useGetScheduleInfo(id, schedule_title);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    router.push('/404');
    return null;
  }

  const start_time = StartTimeFormat(info);
  const end_time = EndTimeFormat(info);

  return (
    <Grid container direction='column' justifyContent='center' alignContent='center'>
      <Grid item xs={8}>
        <Box display='flex' justifyContent='center'>
          <Emoji emoji={info.emoji} size={128} />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box display='flex' justifyContent='center'>
          <Typography variant='h3'>{info.title}</Typography>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box {...defaultProps}>
          <Typography variant='h5'>Starts</Typography>
          <hr />
          <Typography variant='h5'>{start_time}</Typography>
          <br />
          <Typography variant='h5'>Ends</Typography>
          <hr />
          <Typography variant='h5'>{end_time != '' ? end_time : '未定'}</Typography>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box {...defaultProps}>
          <Typography variant='h5'>Place</Typography>
          <hr />
          <Typography variant='h5'>{info?.place ?? '未記入'}</Typography>
          <br />
          <Typography variant='h5'>URL</Typography>
          <hr />
          <Typography variant='h5'>{info?.url ?? '未記入'}</Typography>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box {...defaultProps}>
          <Typography variant='h5'>About</Typography>
          <hr />
          <Typography variant='h5'>{info?.about ?? '未記入'}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { schedule_title, id } = context.params;
  if (Array.isArray(schedule_title) || Array.isArray(id)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      schedule_title: schedule_title,
      id: id,
    },
  };
};

export default Index;
