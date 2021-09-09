import { Box, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import useGetUserInformation from '../../../hooks/api/user/useGetUserInformation';
import SNSList from '../sns/SNSList';

type Props = {
  schedule_title: string;
};

const ProfileCard: FC<Props> = ({ schedule_title }) => {
  const { userInfo, isLoading, isError } = useGetUserInformation(schedule_title);

  if (isLoading) {
    return <div>Loading</div>;
  }

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
