package datastore

import (
	"backend/entity/model"
	"backend/entity/repository"
	"backend/infrastructure/datastore/mysql"
	"errors"

	"gorm.io/gorm"
)

type SNSRepository struct {
	mysql.MySQLHandler
}

func NewSNSRepository(sqlHandler mysql.MySQLHandler) repository.SNSRepository {
	snsRepository := SNSRepository{sqlHandler}
	return &snsRepository
}

func (snsRepo *SNSRepository) CreateALL(user_id string, sns []*model.SNS) []*model.SNS {
	for _, s := range sns {
		s.UserID = user_id
		snsRepo.MySQLHandler.Conn.Create(&sns)
	}
	return sns
}

func (snsRepo *SNSRepository) DeleteALL(user_id string) {
	snsRepo.MySQLHandler.Conn.Where("user_id = ?", user_id).Delete(model.SNS{})
}

func (snsRepo *SNSRepository) FindFromID(user_id string) ([]*model.SNS, error) {
	var sns []*model.SNS
	if err := snsRepo.MySQLHandler.Conn.Where("user_id = ?", user_id).Find(&sns).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	return sns, nil
}
