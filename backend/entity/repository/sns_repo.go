package repository

import "backend/entity/model"

type SNSRepository interface {
	CreateALL(user_id string, sns []*model.SNS) []*model.SNS
	DeleteALL(user_id string)
	FindFromID(user_id string) ([]*model.SNS, error)
}
