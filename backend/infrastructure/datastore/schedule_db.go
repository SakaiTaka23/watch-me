package datastore

import (
	"backend/entity/model"
	"backend/entity/repository"
	"backend/infrastructure/datastore/mysql"
	"errors"

	"gorm.io/gorm"
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
	scheduleRepo.MySQLHandler.Conn.Where("id = ?", id).Delete(&model.Schedule{})
}

func (scheduleRepo *ScheduleRepository) GetScheduleInfo(schedule_id string, user_id string) (*model.Schedule, error) {
	var schedule model.Schedule

	if err := scheduleRepo.MySQLHandler.Conn.Where("id = ?", schedule_id).Where("user_id = ?", user_id).First(&schedule).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	return &schedule, nil
}
