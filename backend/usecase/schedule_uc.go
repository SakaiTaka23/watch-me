package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"
)

type ScheduleUsecase interface {
	CreateSchedule(schedule *model.Schedule) (string, string)
	DeleteSchedule(id string)
	FindSchedule(id string) (*model.Schedule, error)
}

type scheduleUsecase struct {
	scheduleRepo repository.ScheduleRepository
	userRepo     repository.UserRepository
}

func NewScheduleUsecase(scheduleRepo repository.ScheduleRepository, userRepo repository.UserRepository) ScheduleUsecase {
	scheduleUsecase := scheduleUsecase{scheduleRepo: scheduleRepo, userRepo: userRepo}
	return &scheduleUsecase
}

func (usecase *scheduleUsecase) CreateSchedule(schedule *model.Schedule) (string, string) {
	id := usecase.scheduleRepo.CreateSchedule(schedule)
	title, _ := usecase.userRepo.FindFromID(schedule.UserID)
	return id, title.ScheduleTitle
}

func (usecase *scheduleUsecase) DeleteSchedule(id string) {
	usecase.scheduleRepo.DeleteSchedule(id)
}

func (usecase *scheduleUsecase) FindSchedule(id string) (*model.Schedule, error) {
	return usecase.scheduleRepo.GetScheduleInfo(id)
}
