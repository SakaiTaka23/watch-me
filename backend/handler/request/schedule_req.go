package request

import (
	"backend/entity/model"
	"regexp"

	"github.com/go-playground/validator/v10"
)

type CreateSchedule struct {
	ID        string `json:"id"`
	About     string `json:"about" validate:"min=1,max=250"`
	Emoji     string `json:"emoji" validate:"required,min=1,max=20"`
	Year      uint16 `json:"year" validate:"required,min=2021,max=2025"`
	Month     uint8  `json:"month" validate:"required,min=1,max=12"`
	Day       uint8  `json:"day" validate:"required,min=1,max=31"`
	StartTime string `json:"start_time" validate:"required,is-time"`
	EndTime   string `json:"end_time" validate:"is-time"`
	Place     string `json:"place" validate:"min=1,max=50"`
	Title     string `json:"title" validate:"required,min=1,max=20"`
	URL       string `json:"url" validate:"url"`
	UserID    string
}

func (s *CreateSchedule) Validate() error {
	validate := validator.New()
	_ = validate.RegisterValidation("is-time", isTime)
	if err := validate.Struct(s); err != nil {
		return err
	}
	return nil
}

func (s *CreateSchedule) ChangeStruct() *model.Schedule {
	schedule := model.Schedule(*s)
	return &schedule
}

func isTime(fl validator.FieldLevel) bool {
	str := fl.Field().String()
	re := regexp.MustCompile(`^([01][0-9]|2[0-3]):[0-5][0-9]$`)
	return re.MatchString(str)
}
