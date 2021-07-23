package repository

import "backend/entity/model"

type ScheduleRepository interface {
	CreateSchedule(schedule *model.Schedule) uint
	DeleteSchedule(id uint)
}
