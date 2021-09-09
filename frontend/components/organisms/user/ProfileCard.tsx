import { Box, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import useGetUserInformation from '../../../hooks/api/user/useGetUserInformation';
import { User } from '../../../types/model/user';
import SNSList from '../sns/SNSList';

type Props = {
  schedule_title: string;
};

const userInfo: User = {
  id: '123',
  name: 'name',
  schedule_title: 'title',
  sns: [
    {
      id: '123',
      url: 'https://test.test.com',
    },
    {
      id: '124',
      url: 'https://test.test.com',
    },
  ],
};

const ProfileCard: FC<Props> = ({ schedule_title }) => {
  // const { userInfo, isLoading, isError } = useGetUserInformation(schedule_title);

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
