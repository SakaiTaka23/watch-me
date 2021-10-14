package handler

import (
	"backend/entity/model"
	"backend/handler/params"
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

func (handler *UserHandler) CheckUniqueTitle(c *fiber.Ctx) error {
	username := params.User{
		ScheduleTitle: c.Params("schedule_title"),
	}
	if err := username.Validate(); err != nil {
		return c.JSON(fiber.Map{
			"result": false,
		})
	}
	result := handler.userUsecase.CheckUniqueTitle(username.ScheduleTitle)
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

func (handler *UserHandler) EditUser(c *fiber.Ctx) error {
	id := c.Locals("user").(model.User).ID
	var user *model.User
	user, err := handler.userUsecase.EditUser(id)
	if err != nil {
		return c.SendStatus(404)
	}
	return c.JSON(user)
}

func (handler *UserHandler) GetUserProfile(c *fiber.Ctx) error {
	username := params.User{
		ScheduleTitle: c.Params("schedule_title"),
	}
	if err := username.Validate(); err != nil {
		return c.SendStatus(404)
	}
	userInfo, err := handler.userUsecase.GetUserProfile(username.ScheduleTitle)
	if err != nil {
		return c.SendStatus(404)
	}
	return c.JSON(userInfo)
}

func (handler *UserHandler) GetUserSchedule(c *fiber.Ctx) error {
	request := params.UserSchedule{
		Title: c.Params("title"),
		Year:  c.Params("year"),
		Month: c.Params("month"),
	}
	if err := request.Validate(); err != nil {
		log.Println(err)
		return c.SendStatus(400)
	}

	schedule, err := handler.userUsecase.GetUserSchedule(request.Title, request.Year, request.Month)
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
