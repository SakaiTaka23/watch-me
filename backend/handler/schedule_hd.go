package handler

import (
	"backend/entity/model"
	"backend/handler/params"
	"backend/handler/request"
	"backend/usecase"
	"strconv"

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
	var request request.CreateSchedule
	var schedule *model.Schedule
	user := c.Locals("user").(model.User)
	if err := c.BodyParser(&request); err != nil {
		return c.SendStatus(400)
	}
	if err := request.Validate(); err != nil {
		return c.SendStatus(400)
	}
	schedule = request.ChangeStruct()
	schedule.UserID = user.ID
	id, title := handler.scheduleUsecase.CreateSchedule(schedule)
	return c.JSON(fiber.Map{
		"id":    id,
		"title": title,
	})
}

func (handler *ScheduleHandler) DeleteSchedule(c *fiber.Ctx) error {
	param := params.Schedule{
		User: c.Params("schedule_title"),
		UID:  c.Params("schedule"),
	}
	if err := param.Validate(); err != nil {
		return c.SendStatus(404)
	}
	handler.scheduleUsecase.DeleteSchedule(param.UID)
	return c.SendStatus(200)
}

func (handler *ScheduleHandler) GetSchedule(c *fiber.Ctx) error {
	param := params.Schedule{
		User: c.Params("schedule_title"),
		UID:  c.Params("schedule"),
	}
	if err := param.Validate(); err != nil {
		return c.SendStatus(404)
	}
	schedule, err := handler.scheduleUsecase.FindSchedule(param.UID)
	if err != nil {
		return c.SendStatus(404)
	}
	return c.JSON(schedule)
}

func (handler *ScheduleHandler) UserSchedule(c *fiber.Ctx) error {
	userID := c.Locals("user").(model.User).ID
	page, err := strconv.Atoi(c.Query("page", "1"))
	if err != nil {
		return c.SendStatus(400)
	}

	schedules := handler.scheduleUsecase.FindFromUserID(userID, page)
	return c.JSON(schedules)
}
