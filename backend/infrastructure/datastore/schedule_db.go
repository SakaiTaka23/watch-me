package datastore

import (
	"backend/entity/model"
	"backend/entity/repository"
	"backend/infrastructure/datastore/mysql"
)

type ScheduleRepository struct {
	mysql.MySQLHandler
}

func NewScheduleRepository(sqlHandler mysql.MySQLHandler) repository.ScheduleRepository {
	scheduleRepository := ScheduleRepository{sqlHandler}
	return &scheduleRepository
}

func (scheduleRepo *ScheduleRepository) CreateSchedule(schedule *model.Schedule) string {
	scheduleRepo.MySQLHandler.Conn.Create(&schedule)
	return schedule.ID
}

func (scheduleRepo *ScheduleRepository) DeleteSchedule(id string) {
	scheduleRepo.MySQLHandler.Conn.Delete(&model.Schedule{}, id)
}
