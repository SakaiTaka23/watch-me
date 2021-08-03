import React from 'react';
import useCreateSchedule from '../../hooks/api/schedule/useCreateSchedule';
import { Schedule } from '../../types/model/schedule';

const New = () => {
  const { createSchedule, id, error } = useCreateSchedule();

  const testAllSchedule: Schedule = {
    about: 'string',
    emoji: 'string',
    year: 2021,
    month: 8,
    day: 20,
    start_time: '14:15',
    end_time: '14:15',
    place: 'string',
    title: 'string',
    url: 'http://example.com',
  };

  //   const testSomeSchedule: Schedule = {
  //     emoji: 'string',
  //     year: 2021,
  //     month: 8,
  //     day: 20,
  //     start_time: '14:15',
  //     title: 'string',
  //   };

  //   createSchedule(testSomeSchedule);
  //   console.log(error);

  const handleClick = () => {
    createSchedule(testAllSchedule);
    console.log(error);
  };

  return (
    <>
      <button onClick={handleClick}>submit</button>
      <div>{id ? id : 'no id'}</div>
    </>
  );
};

export default New;
