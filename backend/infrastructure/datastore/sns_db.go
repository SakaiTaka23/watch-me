package datastore

import (
	"backend/entity/repository"
	"backend/infrastructure/datastore/mysql"
)

type SNSRepository struct {
	mysql.MySQLHandler
}

func NewSNSRepository(sqlHandler mysql.MySQLHandler) repository.SNSRepository {
	snsRepository := SNSRepository{sqlHandler}
	return &snsRepository
}

// func (snsRepo *SNSRepository) FindFromID(id string) (*model.SNS, error) {
// }

// func (snsRepo *SNSRepository) UpdateSNS(sns *model.SNS) (*model.SNS, error)
