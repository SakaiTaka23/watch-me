package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"
)

type ScheduleUsecase interface {
	CreateSchedule(schedule *model.Schedule) string
	DeleteSchedule(id string)
}

type scheduleUsecase struct {
	scheduleRepo repository.ScheduleRepository
}

func NewScheduleUsecase(scheduleRepo repository.ScheduleRepository) ScheduleUsecase {
	scheduleUsecase := scheduleUsecase{scheduleRepo: scheduleRepo}
	return &scheduleUsecase
}

func (usecase *scheduleUsecase) CreateSchedule(schedule *model.Schedule) string {
	return "ok"
}

func (usecase *scheduleUsecase) DeleteSchedule(id string) {

}
