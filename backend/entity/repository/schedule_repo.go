package repository

import "backend/entity/model"

type ScheduleRepository interface {
	CreateSchedule(schedule *model.Schedule) string
	DeleteSchedule(id string)
	GetScheduleInfo(id string, title string) (*model.Schedule, error)
}
