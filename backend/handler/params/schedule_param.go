package params

import "github.com/go-playground/validator/v10"

type Schedule struct {
	UID string `validate:"required,uuid"`
}

func (s *Schedule) Validate() error {
	validate := validator.New()
	if err := validate.Struct(s); err != nil {
		return err
	}
	return nil
}
