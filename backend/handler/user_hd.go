package handler

import (
	"backend/entity/model"
	"backend/handler/params"
	"backend/handler/query"
	"backend/handler/request"
	"backend/usecase"
	"log"

	"github.com/gofiber/fiber/v2"
)

type UserHandler struct {
	userUsecase usecase.UserUsecase
}

func NewUserHandler(userUsecase usecase.UserUsecase) UserHandler {
	userHandler := UserHandler{userUsecase: userUsecase}
	return userHandler
}

func (handler *UserHandler) CheckUnique(c *fiber.Ctx) error {
	username := params.User{
		UserName: c.Params("username"),
	}
	if err := username.Validate(); err != nil {
		return c.SendStatus(400)
	}
	result := handler.userUsecase.CheckUnique(username.UserName)
	return c.JSON(fiber.Map{
		"result": result,
	})
}

func (handler *UserHandler) CreateUser(c *fiber.Ctx) error {
	user := c.Locals("user").(model.User)
	request := new(request.CreateUser)
	if err := c.BodyParser(request); err != nil {
		return c.SendStatus(400)
	}
	if err := request.Validate(); err != nil {
		return c.SendStatus(400)
	}
	user.Name = request.Name
	if err := handler.userUsecase.CreateUser(&user); err != nil {
		return c.SendStatus(409)
	}
	return c.SendStatus(200)
}

func (handler *UserHandler) GetUserProfile(c *fiber.Ctx) error {
	username := params.User{
		UserName: c.Params("username"),
	}
	if err := username.Validate(); err != nil {
		return c.SendStatus(404)
	}
	userInfo, err := handler.userUsecase.GetUserProfile(username.UserName)
	if err != nil {
		return c.SendStatus(404)
	}
	return c.JSON(userInfo)
}

func (handler *UserHandler) GetUserSchedule(c *fiber.Ctx) error {
	username := params.User{
		UserName: c.Params("username"),
	}
	if err := username.Validate(); err != nil {
		log.Println(err)
		return c.SendStatus(404)
	}
	period := new(query.Period)
	if err := c.QueryParser(period); err != nil {
		return c.SendStatus(404)
	}
	if err := period.Validate(); err != nil {
		log.Println(err)
		return c.SendStatus(404)
	}
	schedule, err := handler.userUsecase.GetUserSchedule(username.UserName, period.Year, period.Month)
	if err != nil {
		return c.SendStatus(404)
	}
	return c.JSON(schedule)
}

func (handler *UserHandler) UpdateUser(c *fiber.Ctx) error {
	user := c.Locals("user").(model.User)
	request := new(request.UpdateUser)
	if err := c.BodyParser(request); err != nil {
		return c.SendStatus(400)
	}
	if err := request.Validate(); err != nil {
		return c.SendStatus(400)
	}
	user.Name = request.UserName
	user.ScheduleTitle = request.ScheduleTitle
	_, err := handler.userUsecase.UpdateUser(&user)
	if err != nil {
		return c.SendStatus(409)
	}
	return c.JSON(user)
}
