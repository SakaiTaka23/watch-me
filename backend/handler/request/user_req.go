package request

import (
	"github.com/go-playground/validator"
)

type CreateUser struct {
	Name  string `json:"name" validation:"required"`
	Email string `json:"email" validation:"email"`
}

type UpdateUser struct {
	UserName      string `json:"name" validation:"required,min=1,max=30"`
	ScheduleTitle string `json:"title" validation:"required,min=1,max=20"`
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
