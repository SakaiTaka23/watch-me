package repository

import "backend/entity/model"

type SNSRepository interface {
	FindFromID(id string) ([]*model.SNS, error)
	// UpdateSNS(sns *model.SNS) (*model.SNS, error)
}
