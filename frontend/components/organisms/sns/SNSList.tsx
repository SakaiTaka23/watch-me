import React, { FC } from 'react';
import { SNS } from '../../../types/model/sns';
import PublicIcon from '@material-ui/icons/Public';
import { Box, Grid, Typography } from '@material-ui/core';

type Props = {
  sns: SNS[];
};

const SNSList: FC<Props> = ({ sns }) => {
  return (
    <Grid container direction='column'>
      {sns.map((s) => {
        return (
          <Box key={s.id} display='flex'>
            <PublicIcon />
            <Typography>{s.url}</Typography>
          </Box>
        );
      })}
    </Grid>
  );
};

export default SNSList;
