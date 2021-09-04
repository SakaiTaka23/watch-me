package server

import (
	"backend/infrastructure/middleware"
	"backend/injector"

	"github.com/gofiber/fiber/v2"
)

func SetRouter(app *fiber.App) *fiber.App {
	middleware.SetAppMiddleware(app)
	authMiddleware := middleware.SetAuthMiddleware()

	userHandler := injector.InjectUserHandler()
	scheduleHandler := injector.InjectScheduleHandler()

	app.Get("/user/:title/:year/:month", userHandler.GetUserSchedule)
	app.Get("/user/:username/info", userHandler.GetUserProfile)
	app.Get("/user/:username/unique", userHandler.CheckUnique)
	user := app.Group("/user", authMiddleware)
	user.Post("/", userHandler.CreateUser)
	user.Patch("/", userHandler.UpdateUser)

	app.Get("/schedule/:title/:schedule", scheduleHandler.GetSchedule)
	schedule := app.Group("/schedule", authMiddleware)
	schedule.Post("/", scheduleHandler.CreateSchedule)
	schedule.Delete("/:title/:schedule", scheduleHandler.DeleteSchedule)

	return app
}
