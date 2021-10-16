package repository

import "backend/entity/model"

type ScheduleRepository interface {
	CreateSchedule(schedule *model.Schedule) string
	DeleteSchedule(id string)
	FindFromUserID(user_id string, page int) *[]model.Schedule
	GetScheduleInfo(id string) (*model.Schedule, error)
}
