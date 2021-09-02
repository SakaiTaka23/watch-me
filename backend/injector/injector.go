package injector

import (
	"backend/entity/repository"
	"backend/handler"
	"backend/infrastructure/datastore"
	"backend/infrastructure/datastore/mysql"
	"backend/usecase"
)

func InjectDB() mysql.MySQLHandler {
	sqlHandler := mysql.Connect()
	return *sqlHandler
}

func InjectUserRepository() repository.UserRepository {
	sqlHandler := InjectDB()
	return datastore.NewUserRepository(sqlHandler)
}

func InjectScheduleRepository() repository.ScheduleRepository {
	sqlHandler := InjectDB()
	return datastore.NewScheduleRepository(sqlHandler)
}

func InjectUserUsecase() usecase.UserUsecase {
	userRepo := InjectUserRepository()
	return usecase.NewUserUsecase(userRepo)
}

func InjectScheduleUsecase() usecase.ScheduleUsecase {
	scheduleRepo := InjectScheduleRepository()
	return usecase.NewScheduleUsecase(scheduleRepo)
}

func InjectUserHandler() handler.UserHandler {
	userUsecase := InjectUserUsecase()
	return handler.NewUserHandler(userUsecase)
}

func InjectScheduleHandler() handler.ScheduleHandler {
	scheduleUsecase := InjectScheduleUsecase()
	return handler.NewScheduleHandler(scheduleUsecase)
}
