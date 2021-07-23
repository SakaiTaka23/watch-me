package handler

import (
	"backend/entity/model"
	"backend/usecase"
	"log"

	"github.com/gofiber/fiber/v2"
)

type ScheduleHandler struct {
	scheduleUsecase usecase.ScheduleUsecase
}

func NewScheduleHandler(scheduleUsecase usecase.ScheduleUsecase) ScheduleHandler {
	scheduleHandler := ScheduleHandler{scheduleUsecase: scheduleUsecase}
	return scheduleHandler
}

func (handler *ScheduleHandler) CreateSchedule(c *fiber.Ctx) error {
	var schedule model.Schedule
	user := c.Locals("user").(model.User)
	if err := c.BodyParser(schedule); err != nil {
		log.Println("request not valid")
		return c.SendStatus(400)
	}
	schedule.UserID = user.ID

	handler.scheduleUsecase.CreateSchedule(&schedule)
	return c.JSON(schedule.ID)
}

func (handler *ScheduleHandler) DeleteSchedule(c *fiber.Ctx) error {
	id := c.Params("schedule")
	handler.scheduleUsecase.DeleteSchedule(id)
	return c.SendStatus(200)
}

func (handler *ScheduleHandler) GetSchedule(c *fiber.Ctx) error {
	id := c.Params("schedule")
	schedule, err := handler.scheduleUsecase.FindSchedule(id)
	if err != nil {
		return c.SendStatus(404)
	}
	return c.JSON(schedule)
}
