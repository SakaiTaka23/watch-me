package request

import (
	"backend/entity/model"
	"log"

	"github.com/go-playground/validator/v10"
)

type UpdateSNS struct {
	SNS []*model.SNS `json:"sns" validate:"required,gte=0,lte=4,dive,url"`
}

func (u *UpdateSNS) Validate() error {
	validate := validator.New()
	if err := validate.Struct(u); err != nil {
		log.Println(err)
		return err
	}
	return nil
}
