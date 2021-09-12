package request

import (
	"backend/entity/model"

	"github.com/go-playground/validator/v10"
)

type UpdateSNS struct {
	SNS []*model.SNS `json:"sns" validate:"required,gt=1,lte=5,dive,url"`
}

func (u *UpdateSNS) Validate() error {
	validate := validator.New()
	if err := validate.Struct(u); err != nil {
		return err
	}
	return nil
}
