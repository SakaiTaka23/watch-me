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
	snsHandler := injector.InjectSNSHandler()

	app.Get("/user/:title/:year/:month", userHandler.GetUserSchedule)
	app.Get("/user/:schedule_title/info", userHandler.GetUserProfile)
	app.Get("/user/:schedule_title/unique", userHandler.CheckUniqueTitle)
	user := app.Group("/user", authMiddleware)
	user.Get("/", userHandler.EditUser)
	user.Post("/", userHandler.CreateUser)
	user.Patch("/", userHandler.UpdateUser)

	schedule := app.Group("/schedule", authMiddleware)
	schedule.Get("/", scheduleHandler.UserSchedule)
	schedule.Post("/", scheduleHandler.CreateSchedule)
	schedule.Get("/:schedule/edit", scheduleHandler.EditSchedule)
	schedule.Delete("/:schedule_title/:schedule", scheduleHandler.DeleteSchedule)
	app.Get("/schedule/:schedule_title/:schedule", scheduleHandler.GetSchedule)

	sns := app.Group("/sns", authMiddleware)
	sns.Get("/", snsHandler.EditSNS)
	sns.Patch("/", snsHandler.UpdateSNS)

	return app
}
