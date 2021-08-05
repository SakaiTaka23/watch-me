import { SNS } from './sns';

type User = {
  id: string;
  name: string;
  title: string;
  sns: SNS[];
};

export type { User };
