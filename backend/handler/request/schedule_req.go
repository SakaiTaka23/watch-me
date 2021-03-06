package request

import (
	"backend/entity/model"
	"log"
	"time"

	"github.com/go-playground/validator/v10"
)

type CreateSchedule struct {
	ID        string `json:"id"`
	About     string `json:"about" validate:"omitempty,min=1,max=250"`
	Emoji     string `json:"emoji" validate:"required,min=1,max=20"`
	StartDate string `json:"start_time" validate:"required"`
	EndDate   string `json:"end_time" validate:"omitempty"`
	Place     string `json:"place" validate:"omitempty,min=1,max=50"`
	Title     string `json:"title" validate:"required,min=1,max=100"`
	URL       string `json:"url" validate:"omitempty,url"`
	UserID    string
}

func (s *CreateSchedule) Validate() error {
	validate := validator.New()
	if err := validate.Struct(s); err != nil {
		log.Println(err)
		return err
	}
	return nil
}

func (s *CreateSchedule) ChangeStruct() *model.Schedule {
	var schedule model.Schedule
	schedule.About = s.About
	schedule.Emoji = s.Emoji
	schedule.StartDate, _ = time.Parse("2006-01-02T15:04", s.StartDate)
	schedule.EndDate, _ = time.Parse("2006-01-02T15:04", s.EndDate)
	schedule.Place = s.Place
	schedule.Title = s.Title
	schedule.URL = s.URL
	return &schedule
}
