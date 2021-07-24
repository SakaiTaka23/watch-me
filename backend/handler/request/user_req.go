package request

import (
	"github.com/go-playground/validator"
)

type CreateUser struct {
	Name  string `json:"name" validation:"required"`
	Email string `json:"email" validation:"email"`
}

type UpdateUser struct {
	UserName      string `json:"name"`
	ScheduleTitle string `json:"title"`
}

func (c *CreateUser) Validate() error {
	validate := validator.New()
	if err := validate.Struct(c); err != nil {
		return err
	}
	return nil
}
