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

func (scheduleRepo *ScheduleRepository) FindFromUserID(user_id string, page int) *[]model.Schedule {
	var schedules []model.Schedule
	scheduleRepo.MySQLHandler.Conn.Where("user_id = ?", user_id).Scopes(paginate(page, 20)).Find(&schedules)
	return &schedules
}

func (scheduleRepo *ScheduleRepository) GetScheduleInfo(id string) (*model.Schedule, error) {
	var schedule model.Schedule
	if err := scheduleRepo.MySQLHandler.Conn.Where("id = ?", id).First(&schedule).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	return &schedule, nil
}

func paginate(page int, pageSize int) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		offset := (page - 1) * pageSize
		return db.Offset(offset).Limit(pageSize)
	}
}
