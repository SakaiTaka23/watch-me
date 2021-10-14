import { SNS } from './sns';

type User = {
  id: string;
  name: string;
  schedule_title: string;
  sns: SNS[];
};

export type { User };
