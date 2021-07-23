package server

import (
	"backend/infrastructure/middleware"
	"backend/injector"

	"github.com/gofiber/fiber/v2"
)

func SetRouter(app *fiber.App) *fiber.App {
	middleware.SetAppMiddleware(app)
	userHandler := injector.InjectUserHandler()
	scheduleHandler := injector.InjectScheduleHandler()

	app.Get("/user/:username", userHandler.GetUserSchedule)
	app.Get("/user/:username/info", userHandler.GetUserProfile)
	user := app.Group("/user", middleware.AuthMiddleware)
	user.Post("/", userHandler.CreateUser)
	user.Patch("/", userHandler.UpdateUser)

	app.Get("/schedule/:schedule", scheduleHandler.GetSchedule)
	schedule := app.Group("/schedule", middleware.AuthMiddleware)
	schedule.Post("/", scheduleHandler.CreateSchedule)
	schedule.Delete("/:schedule", scheduleHandler.DeleteSchedule)

	return app
}
