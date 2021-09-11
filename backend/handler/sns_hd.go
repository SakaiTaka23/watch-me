package handler

import (
	"backend/entity/model"
	"backend/usecase"

	"github.com/gofiber/fiber/v2"
)

type SNSHandler struct {
	snsUsecase usecase.SNSUsecase
}

func NewSNSHandler(snsUsecase usecase.SNSUsecase) SNSHandler {
	snsHandler := SNSHandler{snsUsecase: snsUsecase}
	return snsHandler
}

func (handler *SNSHandler) EditSNS(c *fiber.Ctx) error {
	id := c.Locals("user").(model.User).ID
	var sns []*model.SNS
	sns, err := handler.snsUsecase.EditSNS(id)
	if err != nil {
		return c.SendStatus(404)
	}
	return c.JSON(sns)
}
