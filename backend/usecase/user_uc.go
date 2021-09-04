package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"
	"errors"
)

type UserUsecase interface {
	CheckUnique(name string) bool
	CreateUser(user *model.User) error
	GetUserProfile(name string) (*model.User, error)
	GetUserSchedule(title string, year string, month string) ([]*model.Schedule, error)
	UpdateUser(user *model.User) (*model.User, error)
}

type userUsecase struct {
	userRepo repository.UserRepository
}

func NewUserUsecase(userRepo repository.UserRepository) UserUsecase {
	userUsecase := userUsecase{userRepo: userRepo}
	return &userUsecase
}

func (usecase *userUsecase) CheckUnique(name string) bool {
	return usecase.userRepo.CheckUnique(name)
}

func (usecase *userUsecase) CreateUser(user *model.User) error {
	if user.Name == "" {
		user.Name = "ユーザー" + user.ID
	}
	user.ScheduleTitle = "myschedule" + user.ID
	_, err := usecase.userRepo.CreateUser(user)
	if err != nil {
		return err
	}
	return err
}

func (usecase *userUsecase) GetUserProfile(name string) (*model.User, error) {
	return usecase.userRepo.FindFromName(name)
}

func (usecase *userUsecase) GetUserSchedule(title string, year string, month string) ([]*model.Schedule, error) {
	if len(month) == 1 {
		month = "0" + month
	}
	// フォーマット 202107
	period := year + month
	return usecase.userRepo.ScheduleFromName(title, period)
}

func (usecase *userUsecase) UpdateUser(user *model.User) (*model.User, error) {
	if !usecase.CheckUnique(user.Name) {
		return nil, errors.New("not an unique username")
	}
	return usecase.userRepo.UpdateUser(user), nil
}
