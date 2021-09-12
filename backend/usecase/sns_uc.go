package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"
)

type SNSUsecase interface {
	EditSNS(id string) ([]*model.SNS, error)
	UpdateSNS([]*model.SNS) ([]*model.SNS, error)
}

type snsUsecase struct {
	snsRepo repository.SNSRepository
}

func NewSNSUsecase(snsRepo repository.SNSRepository) SNSUsecase {
	snsUsecase := snsUsecase{snsRepo: snsRepo}
	return &snsUsecase
}

func (usecase *snsUsecase) EditSNS(id string) ([]*model.SNS, error) {
	return usecase.snsRepo.FindFromID(id)
}

func (usecase *snsUsecase) UpdateSNS(sns []*model.SNS) ([]*model.SNS, error) {
	var err error
	for _, s := range sns {
		_, err = usecase.snsRepo.UpdateSNS(s)
		if err != nil {
			return nil, err
		}
	}
	return sns, nil
}
