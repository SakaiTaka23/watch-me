package params

import "github.com/go-playground/validator/v10"

type User struct {
	UserName string `validate:"required,gte=1,lte=30"`
}

type UserSchedule struct {
	Title string `validate:"required,gte=1,let=30"`
	Year  string `validate:"required,gte=4,let=4"`
	Month string `validate:"required,gte=1,let=2"`
}

func (u *User) Validate() error {
	validate := validator.New()
	if err := validate.Struct(u); err != nil {
		return err
	}
	return nil
}

func (u *UserSchedule) Validate() error {
	validate := validator.New()
	if err := validate.Struct(u); err != nil {
		return err
	}
	return nil
}
