import { ChangeEvent, useState } from 'react';

const usePeriod = () => {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);

  const NextYear = () => {
    const next = year + 1;
    if (next != 2026) {
      setYear(next);
    }
  };

  const PreYear = () => {
    const pre = year - 1;
    if (pre != 2021) {
      setYear(pre);
    }
  };

  const changeMonth = (e: ChangeEvent<HTMLInputElement>) => {
    setMonth(Number(e.target.value));
  };

  const NextMonth = () => {
    const next = month + 1;
    if (next != 13) {
      setMonth(next);
    } else {
      setMonth(1);
      NextYear();
    }
  };

  const PreMonth = () => {
    const pre = month - 1;
    if (pre != 0) {
      setMonth(pre);
    } else {
      setMonth(12);
      PreYear();
    }
  };

  return {
    year,
    month,
    changeMonth,
    NextMonth,
    PreMonth,
  };
};

export default usePeriod;
