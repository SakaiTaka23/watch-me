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

func (snsRepo *SNSRepository) FindFromID(id string) ([]*model.SNS, error) {
	var sns []*model.SNS
	if err := snsRepo.MySQLHandler.Conn.Where("user_id = ?", id).Find(&sns).Error; errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}
	return sns, nil
}

func (snsRepo *SNSRepository) UpdateSNS(sns []*model.SNS) ([]*model.SNS, error) {
	if err := snsRepo.MySQLHandler.Conn.Select("url").Updates(&sns).Error; err != nil {
		return nil, errors.New("update failed")
	}
	return sns, nil
}
