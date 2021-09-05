type Schedule = {
  id: string;
  about?: string;
  emoji: string;
  start_time: string;
  end_time?: string;
  place?: string;
  title: string;
  url?: string;
  user_id: string;
};

const TimeFormat = (schedule: Schedule) => {
  const start_time = new Date(schedule.start_time);
  const start_format = `${start_time.getFullYear()}年${
    start_time.getMonth() + 1
  }月${start_time.getDate()}日${start_time.getHours()}:${
    (start_time.getMinutes() < 10 ? '0' : '') + start_time.getMinutes()
  }`;
  const end_time = new Date(schedule?.end_time);
  if (Number.isNaN(end_time.getDate())) {
    return start_format;
  } else {
    const end_format = `${end_time.getHours()}:${(end_time.getMinutes() < 10 ? '0' : '') + end_time.getMinutes()}`;
    return `${start_format}〜${end_format}`;
  }
};

export type { Schedule };
export default TimeFormat;
