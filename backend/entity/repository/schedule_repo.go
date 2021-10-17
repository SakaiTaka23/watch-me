package repository

import "backend/entity/model"

type ScheduleRepository interface {
	CreateSchedule(schedule *model.Schedule) string
	DeleteSchedule(id string)
	FindFromUserID(user_id string, page int) *[]model.Schedule
	FindFromUserIDAndScheduleTitle(id string, user_id string) (*model.Schedule, error)
	GetScheduleInfo(id string) (*model.Schedule, error)
	UpdateSchedule(schedule *model.Schedule) error
}
