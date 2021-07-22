package server

import (
	"backend/infrastructure/middleware"
	"backend/injector"

	"github.com/gofiber/fiber/v2"
)

func SetRouter(app *fiber.App) *fiber.App {
	middleware.SetAppMiddleware(app)
	userHandler := injector.InjectUserHandler()
	// scheduleHandler := injector.InjectScheduleHandler()

	app.Get("/user/:username", userHandler.GetUserSchedule)
	app.Get("/user/:username/info", userHandler.GetUserProfile)
	user := app.Group("/user", middleware.AuthMiddleware)
	user.Post("/", userHandler.CreateUser)
	user.Patch("/:username", userHandler.UpdateUser)

	schedule := app.Group("/schedule", middleware.AuthMiddleware)
	schedule.Post("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "post schedule create",
		})
	})
	schedule.Delete("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "delete schedule",
		})
	})

	return app
}
