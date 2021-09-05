import { ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Emoji } from 'emoji-mart';
import React, { FC } from 'react';
import { Schedule } from '../../../types/model/schedule';

const ScheduleCard: FC<Schedule> = (schedule) => {
  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Emoji emoji={schedule.emoji} size={64} />
      </ListItemAvatar>
      <ListItemText
        primary={`${schedule.title}`}
        secondary={<Typography>{`${schedule.start_time}~${schedule?.end_time ?? ''}`}</Typography>}
      />
    </ListItem>
  );
};

export default ScheduleCard;
