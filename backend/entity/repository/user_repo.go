package repository

import (
	"backend/entity/model"
)

type UserRepository interface {
	CreateUser(user *model.User) (string, error)
	DeleteUser(id string)
	FindFromName(name string) (*model.User, error)
	ScheduleFromName(name string, year string, month string) ([]*model.Schedule, error)
	UpdateUser(user *model.User) *model.User
}
