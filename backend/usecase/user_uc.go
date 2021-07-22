package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"
)

type UserUsecase interface {
	CreateUser(user *model.User)
	GetUserInfo(name string) *model.User
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

func (usecase *userUsecase) GetUserInfo(name string) *model.User {
	return usecase.userRepo.FindFromName(name)
}

func (usecase *userUsecase) UpdateUser(user *model.User) *model.User {
	return usecase.userRepo.UpdateUser(user)
}
