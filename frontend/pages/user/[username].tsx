import { Emoji } from 'emoji-mart';
import { useRouter } from 'next/router';
import useGetSchedules from '../../hooks/api/schedule/useGetSchedules';

const GetUserSchedule = () => {
  const router = useRouter();
  const { username } = router.query;
  if (!username) return null;
  const user: string = Array.isArray(username) ? username['username'] : username;
  const { schedules, isLoading, isError } = useGetSchedules(user);
  console.log(schedules);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>404</h1>;
  }
  return (
    <>
      <h1>username : {username}</h1>
      {schedules.map((schedule, index) => {
        return (
          <div key={index}>
            <Emoji emoji={schedule.emoji} size={64} />
            <h1>{schedule.title}</h1>
            <h4>{schedule.id}</h4>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default GetUserSchedule;
