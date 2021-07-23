package datastore

import (
	"backend/entity/model"
	"backend/entity/repository"
	"backend/infrastructure/datastore/mysql"
	"errors"
	"time"

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

func (userRepo *UserRepository) FindFromName(name string) *model.User {
	var user *model.User
	userRepo.MySQLHandler.Conn.Preload("sns").Where("name = ?", name).First(&user)
	return user
}

func (userRepo *UserRepository) ScheduleFromName(name string, period time.Time) (*model.Schedule, error) {
	var schedule *model.Schedule
	if err := userRepo.MySQLHandler.Conn.Where("name = ?", name).Where("Date = ?", period).Take(&schedule).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	return schedule, nil
}

func (userRepo *UserRepository) UpdateUser(user *model.User) *model.User {
	userRepo.MySQLHandler.Conn.Preload("sns").Model(&user).Where("id = ?", user.ID).First(&user).Update("name", "title")
	return user
}
