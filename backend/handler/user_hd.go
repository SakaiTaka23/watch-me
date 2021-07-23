package handler

import (
	"backend/entity/model"
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

func (handler *UserHandler) CreateUser(c *fiber.Ctx) error {
	user := c.Locals("user").(model.User)
	name := new(request.CreateUser)
	if err := c.BodyParser(name); err != nil {
		name.UserName = "user"
	}
	log.Printf("received body: %s", name)
	user.Name = name.UserName
	handler.userUsecase.CreateUser(&user)
	return c.SendStatus(200)
}

func (handler *UserHandler) GetUserProfile(c *fiber.Ctx) error {
	username := c.Params("username")
	userInfo := handler.userUsecase.GetUserProfile(username)
	return c.JSON(userInfo)
}

func (handler *UserHandler) GetUserSchedule(c *fiber.Ctx) error {
	name := c.Params("username")
	year := c.Query("year")
	month := c.Query("month")
	schedule, err := handler.userUsecase.GetUserSchedule(name, year, month)
	if err != nil {
		return c.SendStatus(404)
	}
	return c.JSON(schedule)
}

func (handler *UserHandler) UpdateUser(c *fiber.Ctx) error {
	user := c.Locals("user").(model.User)
	request := new(request.UpdateUser)
	user.Name = request.UserName
	user.ScheduleTitle = request.ScheduleTitle
	handler.userUsecase.UpdateUser(&user)

	return c.JSON(user)
}
