package repository

import "backend/entity/model"

type ScheduleRepository interface {
	CreateSchedule(schedule *model.Schedule) string
	DeleteSchedule(id string)
	GetScheduleInfo(id string) (*model.Schedule, error)
}