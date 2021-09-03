import { Box, Grid, Typography } from '@material-ui/core';
import { Emoji } from 'emoji-mart';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import useGetScheduleInfo from '../../../hooks/api/schedule/useGetScheduleInfo';

type Props = {
  schedule_title: string;
  id: string;
};

const defaultProps = {
  m: 2,
  p: 5,
  border: 2,
  borderRadius: 16,
};

// const info = {
//   id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
//   about: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quaerat labore
//       veniam molestias distinctio temporibus error blanditiis culpa illum fuga?
//       Exercitationem quidem veniam deleniti consequatur incidunt nobis dolores repellendus debitis!`,
//   emoji: 'leg',
//   start_time: '2021-07-28T15:00',
//   end_time: '2021-07-28T15:00',
//   place: 'YouTube',
//   title: 'title',
//   url: 'http://example.com',
//   user_id: 'a169451c-8525-4352-b8ca-070dd449a1a5',
// };

const info = {
  id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
  about: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quaerat labore
       veniam molestias distinctio temporibus error blanditiis culpa illum fuga?
       Exercitationem quidem veniam deleniti consequatur incidunt nobis dolores repellendus debitis!`,
  emoji: 'leg',
  start_time: '2021-07-28T15:00',
  end_time: null,
  place: null,
  title: 'title',
  url: null,
  user_id: 'a169451c-8525-4352-b8ca-070dd449a1a5',
};

const Index: FC<Props> = ({ schedule_title, id }) => {
  console.log(schedule_title, id);
  // const { info, isLoading, isError } = useGetScheduleInfo(id, schedule_title);

  return (
    <Grid container direction='column' justifyContent='center' alignContent='center' wrap='wrap'>
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
          <Typography variant='h5'>{info.start_time}</Typography>
          <br />
          <Typography variant='h5'>Ends</Typography>
          <hr />
          <Typography variant='h5'>{info?.end_time ?? '未定'}</Typography>
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
    console.log(schedule_title, id);
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
