package repository

import (
	"backend/entity/model"
	"time"
)

type UserRepository interface {
	CreateUser(user *model.User) string
	DeleteUser(id string)
	FindFromName(name string) *model.User
	ScheduleFromName(name string, period time.Time) (*model.Schedule, error)
	UpdateUser(user *model.User) *model.User
}
