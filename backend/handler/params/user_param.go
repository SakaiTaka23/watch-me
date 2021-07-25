package params

import "github.com/go-playground/validator/v10"

type User struct {
	UserName string `validate:"required,gte=1,lte=30"`
}

func (u *User) Validate() error {
	validate := validator.New()
	if err := validate.Struct(u); err != nil {
		return err
	}
	return nil
}
