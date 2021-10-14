package request

import (
	"github.com/go-playground/validator/v10"
)

type CreateUser struct {
	Name string `json:"name"`
}

type UpdateUser struct {
<<<<<<< HEAD
	UserName      string `json:"name" validate:"required,min=1,max=30"`
	ScheduleTitle string `json:"schedule_title" validate:"required,min=1,max=20,alphanum"`
=======
	UserName      string `json:"name" validate:"required,min=1,max=30,alphanum"`
	ScheduleTitle string `json:"title" validate:"required,min=1,max=20"`
>>>>>>> 43da25f451d429c1b0b8bdc52184ac7f820b4b8e
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
