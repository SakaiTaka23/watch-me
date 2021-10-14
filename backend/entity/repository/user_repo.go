package repository

import (
	"backend/entity/model"
)

type UserRepository interface {
	CheckUniqueTitle(schedule_title string) bool
	CreateUser(user *model.User) (string, error)
	DeleteUser(id string)
	FindFromID(id string) (*model.User, error)
	FindFromName(schedule_title string) (*model.User, error)
	IDFromTitle(id string) (string, error)
	ScheduleFromName(schedule_title string, period string) ([]*model.Schedule, error)
	UpdateUser(user *model.User) (*model.User, error)
}
