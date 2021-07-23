package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"
)

type ScheduleUsecase interface {
	CreateSchedule(schedule *model.Schedule) uint
	DeleteSchedule(id uint)
}

type scheduleUsecase struct {
	scheduleRepo repository.ScheduleRepository
}

func NewScheduleUsecase(scheduleRepo repository.ScheduleRepository) ScheduleUsecase {
	scheduleUsecase := scheduleUsecase{scheduleRepo: scheduleRepo}
	return &scheduleUsecase
}

func (usecase *scheduleUsecase) CreateSchedule(schedule *model.Schedule) uint {
	return usecase.scheduleRepo.CreateSchedule(schedule)
}

func (usecase *scheduleUsecase) DeleteSchedule(id uint) {
	usecase.scheduleRepo.DeleteSchedule(id)
}
