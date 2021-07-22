package server

import (
	"backend/infrastructure/middleware"
	"backend/injector"

	"github.com/gofiber/fiber/v2"
)

func SetRouter(app *fiber.App) *fiber.App {
	middleware.SetAppMiddleware(app)
	userHandler := injector.InjectUserHandler()

	app.Get("/user/:username", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "get user info by user id",
		})
	})
	user := app.Group("/user", middleware.AuthMiddleware)
	user.Post("/", userHandler.CreateUser)
	user.Patch("/:username", userHandler.UpdateUser)

	schedule := app.Group("/schedule", middleware.AuthMiddleware)
	schedule.Post("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "post schedule create",
		})
	})
	schedule.Patch("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "delete schedule",
		})
	})

	return app
}
