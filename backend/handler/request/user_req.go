package request

import (
	"backend/entity/model"

	"github.com/go-playground/validator/v10"
)

type CreateUser struct {
	Name string `json:"name"`
}

type UpdateUser struct {
	UserName      string   `json:"name" validate:"required,min=1,max=30"`
	ScheduleTitle string   `json:"schedule_title" validate:"required,min=1,max=20,alphanum"`
	URL           []string `json:"sns" validate:"gte=0,lte=5,dive,url"`
}

func (c *CreateUser) Validate() error {
	validate := validator.New()
	if err := validate.Struct(c); err != nil {
		return err
	}
	return nil
}

func (u *UpdateUser) Validate() error {
	validate := validator.New()
	if err := validate.Struct(u); err != nil {
		return err
	}
	return nil
}

func (u *UpdateUser) ToSNS() []model.SNS {
	var sns []model.SNS
	for _, s := range u.URL {
		sns = append(sns, model.SNS{URL: s})
	}
	return sns
}
