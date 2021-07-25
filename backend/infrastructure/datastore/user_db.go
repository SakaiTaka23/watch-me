package datastore

import (
	"backend/entity/model"
	"backend/entity/repository"
	"backend/infrastructure/datastore/mysql"
	"errors"

	"gorm.io/gorm"
)

type UserRepository struct {
	mysql.MySQLHandler
}

func NewUserRepository(sqlHandler mysql.MySQLHandler) repository.UserRepository {
	userRepository := UserRepository{sqlHandler}
	return &userRepository
}

func (userRepo *UserRepository) CreateUser(user *model.User) string {
	userRepo.MySQLHandler.Conn.Create(&user)
	return user.ID
}

func (userRepo *UserRepository) DeleteUser(id string) {
	userRepo.MySQLHandler.Conn.Delete(&model.User{}, id)
}

func (userRepo *UserRepository) FindFromName(name string) (*model.User, error) {
	var user *model.User
	if err := userRepo.MySQLHandler.Conn.Preload("SNS").Where("name = ?", name).First(&user).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	return user, nil
}

func (userRepo *UserRepository) ScheduleFromName(name string, year string, month string) (*model.Schedule, error) {
	var schedule *model.Schedule
	if err := userRepo.MySQLHandler.Conn.Preload("Schedule").Model(&model.User{}).Where("name = ?", name).Where("year = ?", year).Where("month = ?", month).Take(&schedule).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	return schedule, nil
}

func (userRepo *UserRepository) UpdateUser(user *model.User) *model.User {
	userRepo.MySQLHandler.Conn.Preload("SNS").Select("name", "schedule_title").Where("id = ?", user.ID).Updates(model.User{Name: user.Name, ScheduleTitle: user.ScheduleTitle}).First(&user)
	return user
}
