package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"
)

type SNSUsecase interface {
	EditSNS(user_id string) ([]*model.SNS, error)
	UpdateSNS(user_id string, sns []*model.SNS) ([]*model.SNS, error)
}

type snsUsecase struct {
	snsRepo repository.SNSRepository
}

func NewSNSUsecase(snsRepo repository.SNSRepository) SNSUsecase {
	snsUsecase := snsUsecase{snsRepo: snsRepo}
	return &snsUsecase
}

func (usecase *snsUsecase) EditSNS(user_id string) ([]*model.SNS, error) {
	return usecase.snsRepo.FindFromID(user_id)
}

func (usecase *snsUsecase) UpdateSNS(user_id string, sns []*model.SNS) ([]*model.SNS, error) {
	usecase.snsRepo.DeleteALL(user_id)
	usecase.snsRepo.CreateALL(user_id, sns)
	return sns, nil
}
