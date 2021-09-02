package request

import (
	"github.com/go-playground/validator/v10"
)

type CreateUser struct {
	Name string `json:"name"`
}

type UpdateUser struct {
	UserName      string `json:"name" validate:"required,min=1,max=30,alphanum"`
	ScheduleTitle string `json:"title" validate:"required,min=1,max=20"`
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
