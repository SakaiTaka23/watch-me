package repository

import (
	"backend/entity/model"
)

type UserRepository interface {
	CheckUniqueTitle(schedule_title string) bool
	CreateUser(user *model.User) (string, error)
	DeleteUser(id string)
<<<<<<< HEAD
	FindFromID(id string) (*model.User, error)
	FindFromName(schedule_title string) (*model.User, error)
	IDFromTitle(id string) (string, error)
	ScheduleFromName(schedule_title string, period string) ([]*model.Schedule, error)
	UpdateUser(user *model.User) (*model.User, error)
=======
	FindFromName(name string) (*model.User, error)
	ScheduleFromName(name string, year uint16, month uint8) ([]*model.Schedule, error)
	UpdateUser(user *model.User) *model.User
>>>>>>> 43da25f451d429c1b0b8bdc52184ac7f820b4b8e
}
