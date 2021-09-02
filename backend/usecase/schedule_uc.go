package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"

	"github.com/google/uuid"
)

type ScheduleUsecase interface {
	CreateSchedule(schedule *model.Schedule) string
	DeleteSchedule(id string)
	FindSchedule(id string, title string) (*model.Schedule, error)
}

type scheduleUsecase struct {
	scheduleRepo repository.ScheduleRepository
	userRepo     repository.UserRepository
}

func NewScheduleUsecase(scheduleRepo repository.ScheduleRepository, userRepo repository.UserRepository) ScheduleUsecase {
	scheduleUsecase := scheduleUsecase{scheduleRepo: scheduleRepo, userRepo: userRepo}
	return &scheduleUsecase
}

func (usecase *scheduleUsecase) CreateSchedule(schedule *model.Schedule) string {
	uuid, _ := uuid.NewUUID()
	schedule.ID = uuid.String()
	return usecase.scheduleRepo.CreateSchedule(schedule)
}

func (usecase *scheduleUsecase) DeleteSchedule(id string) {
	usecase.scheduleRepo.DeleteSchedule(id)
}

func (usecase *scheduleUsecase) FindSchedule(id string, title string) (*model.Schedule, error) {
	userID, err := usecase.userRepo.IDFromTitle(title)
	if err != nil {
		return nil, err
	}
	return usecase.scheduleRepo.GetScheduleInfo(id, userID)
}
