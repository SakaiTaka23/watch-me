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

func (userRepo *UserRepository) CheckUnique(schedule_title string) bool {
	count := int64(0)
	userRepo.MySQLHandler.Conn.Model(&model.User{}).Where("schedule_title = ?", schedule_title).Count(&count)
	return count <= 0
}

func (userRepo *UserRepository) CreateUser(user *model.User) (string, error) {
	if err := userRepo.MySQLHandler.Conn.Create(&user).Error; errors.Is(err, gorm.ErrInvalidTransaction) {
		return "", err
	}
	return user.ID, nil
}

func (userRepo *UserRepository) DeleteUser(id string) {
	userRepo.MySQLHandler.Conn.Delete(&model.User{}, id)
}

func (userRepo *UserRepository) FindFromName(schedule_title string) (*model.User, error) {
	var user *model.User
	if err := userRepo.MySQLHandler.Conn.Preload("SNS").Where("schedule_title = ?", schedule_title).First(&user).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	return user, nil
}

func (userRepo *UserRepository) IDFromTitle(id string) (string, error) {
	var user *model.User
	if err := userRepo.MySQLHandler.Conn.Select("ID").Where("schedule_title = ?", id).First(&user).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return "", err
	}
	return user.ID, nil
}

func (userRepo *UserRepository) ScheduleFromName(title string, period string) ([]*model.Schedule, error) {
	var schedule []*model.Schedule
	uid, err := userRepo.IDFromTitle(title)
	if err != nil {
		return nil, err
	}
	if err := userRepo.MySQLHandler.Conn.Where("user_id = ?", uid).Where("DATE_FORMAT(start_date, '%Y%m') = ?", period).Find(&schedule).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	return schedule, nil
}

func (userRepo *UserRepository) UpdateUser(user *model.User) *model.User {
	userRepo.MySQLHandler.Conn.Preload("SNS").Select("name", "schedule_title").Where("id = ?", user.ID).Updates(model.User{Name: user.Name, ScheduleTitle: user.ScheduleTitle}).First(&user)
	return user
}
