package handler

import (
	"backend/entity/model"
	"backend/handler/request"
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
	sns, err := handler.snsUsecase.EditSNS(id)
	if err != nil {
		return c.SendStatus(404)
	}
	return c.JSON(sns)
}

func (handler *SNSHandler) UpdateSNS(c *fiber.Ctx) error {
	id := c.Locals("user").(model.User).ID
	request := new(request.UpdateSNS)
	if err := c.BodyParser(request); err != nil {
		return c.SendStatus(400)
	}
	if err := request.Validate(); err != nil {
		return c.SendStatus(400)
	}
	sns := request.SNS
	_, err := handler.snsUsecase.UpdateSNS(id, sns)
	if err != nil {
		return c.SendStatus(409)
	}
	return c.JSON(sns)
}
