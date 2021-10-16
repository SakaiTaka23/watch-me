import { Box } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Loading from '../../components/organisms/loading/Loading';
import SchedulePeriod from '../../components/organisms/schedules/SchedulePeriod';
import ProfileCard from '../../components/organisms/user/ProfileCard';
import useGetUserInformation from '../../hooks/api/user/useGetUserInformation';
import { PeriodProvider } from '../../hooks/assets/usePeriod';

type Props = {
  schedule_title: string;
};

const GetUserSchedule: FC<Props> = ({ schedule_title }) => {
  const router = useRouter();
  const { userInfo, isLoading, isError } = useGetUserInformation(schedule_title);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    router.push('/404');
  }

  return (
    <>
      <Box mt={5} mb={2}>
        <ProfileCard userInfo={userInfo} />
      </Box>
      <PeriodProvider>
        <SchedulePeriod schedule_title={schedule_title} />
      </PeriodProvider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { schedule_title } = context.params;
  if (Array.isArray(schedule_title)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      schedule_title: schedule_title,
    },
  };
};

export default GetUserSchedule;
