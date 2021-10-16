import { Box, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { User } from '../../../types/model/user';
import SNSList from '../sns/SNSList';

type Props = {
  userInfo: User;
};

const ProfileCard: FC<Props> = ({ userInfo }) => {
  return (
    <Box display='flex' justifyContent='center'>
      <div>
        <Typography variant='h3'>{userInfo.schedule_title}</Typography>
        <Typography variant='h4'>{userInfo.name}</Typography>
        <Box my={3}>
          <SNSList sns={userInfo.sns} />
        </Box>
      </div>
    </Box>
  );
};

export default ProfileCard;
