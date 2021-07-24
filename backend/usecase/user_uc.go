package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"
	"fmt"
	"strconv"
	"time"
)

type UserUsecase interface {
	CreateUser(user *model.User)
	GetUserProfile(name string) (*model.User, error)
	GetUserSchedule(name string, year string, month string) (*model.Schedule, error)
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
	usecase.userRepo.CreateUser(user)
}

func (usecase *userUsecase) GetUserProfile(name string) (*model.User, error) {
	return usecase.userRepo.FindFromName(name)
}

func (usecase *userUsecase) GetUserSchedule(name string, year string, month string) (*model.Schedule, error) {
	monthInt, _ := strconv.Atoi(month)
	format := year + fmt.Sprintf("%02d", monthInt)
	period, _ := time.Parse(format, "2000-01")
	schedule, err := usecase.userRepo.ScheduleFromName(name, period)
	if err != nil {
		return nil, err
	}
	return schedule, nil
}

func (usecase *userUsecase) UpdateUser(user *model.User) *model.User {
	return usecase.userRepo.UpdateUser(user)
}
