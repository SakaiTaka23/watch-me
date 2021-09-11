package usecase

import "backend/entity/repository"

type SNSUsecase interface {
}

type snsUsecase struct {
	snsRepo repository.SNSRepository
}

func NewSNSUsecase(snsRepo repository.SNSRepository) SNSUsecase {
	snsUsecase := snsUsecase{snsRepo: snsRepo}
	return snsUsecase
}
