package repository

import (
	"backend/entity/model"
)

type UserRepository interface {
	CheckUnique(name string) bool
	CreateUser(user *model.User) (string, error)
	DeleteUser(id string)
	FindFromName(name string) (*model.User, error)
	IDFromTitle(id string) (string, error)
	ScheduleFromName(name string, year uint16, month uint8) ([]*model.Schedule, error)
	UpdateUser(user *model.User) *model.User
}
