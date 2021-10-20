import React, { FC } from 'react';
import { SNS } from '../../../types/model/sns';
import PublicIcon from '@material-ui/icons/Public';
import { Box, Grid, Link, Typography } from '@material-ui/core';

type Props = {
  sns: SNS[];
};

const SNSList: FC<Props> = ({ sns }) => {
  return (
    <Grid container direction='column'>
      {sns.map((s) => {
        return (
          <Box key={s.id} display='flex' my={1}>
            <Box mx={2}>
              <PublicIcon />
            </Box>
            <Typography>
              <Link href={s.url} target='_blank' rel='noopener noreferrer'>
                {s.url}
              </Link>
            </Typography>
          </Box>
        );
      })}
    </Grid>
  );
};

export default SNSList;
