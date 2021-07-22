package repository

import "backend/entity/model"

type UserRepository interface {
	CreateUser(user *model.User) string
	DeleteUser(id string)
	FindFromName(username string) *model.User
	UpdateUser(user *model.User) *model.User
}
