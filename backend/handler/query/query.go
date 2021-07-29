package query

import "github.com/go-playground/validator/v10"

type Period struct {
	Year  string `validate:"required,gte=2021,lte=2025"`
	Month string `validate:"required,gte=1,lte=12"`
}

func (p *Period) Validate() error {
	validate := validator.New()
	if err := validate.Struct(p); err != nil {
		return err
	}
	return nil
}
