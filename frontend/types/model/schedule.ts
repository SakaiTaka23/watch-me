type Schedule = {
  id?: string;
  about?: string;
  emoji: string;
  year: number;
  month: number;
  day: number;
  start_time: string;
  end_time?: string;
  place?: string;
  title: string;
  url?: string;
};

export type { Schedule };
