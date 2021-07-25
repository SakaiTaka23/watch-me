package params

import "github.com/go-playground/validator"

type Schedule struct {
	UID string `validate:"required,uuid5"`
}

func (s *Schedule) Validate() error {
	validate := validator.New()
	if err := validate.Struct(s); err != nil {
		return err
	}
	return nil
}
