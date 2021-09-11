package handler

import "backend/usecase"

type SNSHandler struct {
	snsUsecase usecase.SNSUsecase
}

func NewSNSHandler(snsUsecase usecase.SNSUsecase) SNSHandler {
	snsHandler := SNSHandler{snsUsecase: snsUsecase}
	return snsHandler
}
