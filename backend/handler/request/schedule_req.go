package request

import (
	"backend/entity/model"
	"time"

	"github.com/go-playground/validator/v10"
)

type CreateSchedule struct {
	ID        string    `json:"id"`
	About     string    `json:"about" validate:"omitempty,min=1,max=250"`
	Emoji     string    `json:"emoji" validate:"required,min=1,max=20"`
	StartDate time.Time `json:"start_time" validate:"required,datetime"`
	EndDate   time.Time `json:"end_time" validate:"omitempty,datetime"`
	Place     string    `json:"place" validate:"omitempty,min=1,max=50"`
	Title     string    `json:"title" validate:"required,min=1,max=20"`
	URL       string    `json:"url" validate:"omitempty,url"`
	UserID    string
}

func (s *CreateSchedule) Validate() error {
	validate := validator.New()
	if err := validate.Struct(s); err != nil {
		return err
	}
	return nil
}

func (s *CreateSchedule) ChangeStruct() *model.Schedule {
	schedule := model.Schedule(*s)
	return &schedule
}
