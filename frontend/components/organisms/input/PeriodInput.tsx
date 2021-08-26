import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const PeriodInput = () => {
  const { register } = useFormContext();
  const [year, setYear] = useState(2021);

  return (
    <>
      {/* 2021~2025の間の範囲に収まるべき */}
      <input type='number' value={year} {...register('year')} />
      {/* <DatePicker
                disableToolbar
                variant='inline'
                label='Only calendar'
                helperText='No year selection'
                value={selectedStartingDate}
                onChange={handleStartingDateChange}
              />

              <DatePicker
                disableToolbar
                variant='inline'
                label='Only calendar'
                helperText='No year selection'
                value={selectedEndingDate}
                onChange={handleEndingDateChange}
              /> */}
    </>
  );
};

export default PeriodInput;
