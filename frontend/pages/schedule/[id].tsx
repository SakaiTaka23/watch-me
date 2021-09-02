import { useRouter } from 'next/router';
import React from 'react';
import { Emoji } from 'emoji-mart';
import useGetScheduleInfo from '../../hooks/api/schedule/useGetScheduleInfo';

const GetScheduleInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  if (!id) return null;
  const scheduleID: string = Array.isArray(id) ? id['id'] : id;
  const { info, isLoading, isError } = useGetScheduleInfo(scheduleID);
  console.log(id, info);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>404</h1>;
  }
  return (
    <>
      <h1>schedule id : {id}</h1>
      <>
        <Emoji emoji={info.emoji} size={64} />
        <h1>title {info.title}</h1>
      </>
    </>
  );
};

export default GetScheduleInfo;
