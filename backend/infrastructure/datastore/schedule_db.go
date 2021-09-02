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

func (scheduleRepo *ScheduleRepository) GetScheduleInfo(id string, title string) (*model.Schedule, error) {
	var schedule model.Schedule
	var user model.User

	if err := scheduleRepo.MySQLHandler.Conn.First(&user, "schedule_title = ?", title).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}

	if err := scheduleRepo.MySQLHandler.Conn.Where("id = ?", id).Where("user_id = ?", user.ID).First(&schedule).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	return &schedule, nil
}
