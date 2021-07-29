package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"
)

type UserUsecase interface {
	CreateUser(user *model.User)
	GetUserProfile(name string) (*model.User, error)
	GetUserSchedule(name string, year string, month string) ([]*model.Schedule, error)
	UpdateUser(user *model.User) *model.User
}

type userUsecase struct {
	userRepo repository.UserRepository
}

func NewUserUsecase(userRepo repository.UserRepository) UserUsecase {
	userUsecase := userUsecase{userRepo: userRepo}
	return &userUsecase
}

func (usecase *userUsecase) CreateUser(user *model.User) {
	user.ScheduleTitle = "マイスケジュール"
	usecase.userRepo.CreateUser(user)
}

func (usecase *userUsecase) GetUserProfile(name string) (*model.User, error) {
	return usecase.userRepo.FindFromName(name)
}

func (usecase *userUsecase) GetUserSchedule(name string, year string, month string) ([]*model.Schedule, error) {
	return usecase.userRepo.ScheduleFromName(name, year, month)
}

func (usecase *userUsecase) UpdateUser(user *model.User) *model.User {
	return usecase.userRepo.UpdateUser(user)
}
