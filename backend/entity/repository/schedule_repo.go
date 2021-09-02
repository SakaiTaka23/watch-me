package repository

import "backend/entity/model"

type ScheduleRepository interface {
	CreateSchedule(schedule *model.Schedule) string
	DeleteSchedule(id string)
	GetScheduleInfo(schedule_id string, user_id string) (*model.Schedule, error)
}
