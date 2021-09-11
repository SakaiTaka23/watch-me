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

func InjectSNSRepository() repository.SNSRepository {
	sqlHandler := InjectDB()
	return datastore.NewSNSRepository(sqlHandler)
}

func InjectUserUsecase() usecase.UserUsecase {
	userRepo := InjectUserRepository()
	return usecase.NewUserUsecase(userRepo)
}

func InjectScheduleUsecase() usecase.ScheduleUsecase {
	scheduleRepo := InjectScheduleRepository()
	userRepo := InjectUserRepository()
	return usecase.NewScheduleUsecase(scheduleRepo, userRepo)
}

func InjectSNSUsecase() usecase.SNSUsecase {
	snsRepo := InjectSNSRepository()
	return usecase.NewSNSUsecase(snsRepo)
}

func InjectUserHandler() handler.UserHandler {
	userUsecase := InjectUserUsecase()
	return handler.NewUserHandler(userUsecase)
}

func InjectScheduleHandler() handler.ScheduleHandler {
	scheduleUsecase := InjectScheduleUsecase()
	return handler.NewScheduleHandler(scheduleUsecase)
}

func InjectSNSHandler() handler.SNSHandler {
	snsUsecase := InjectSNSUsecase()
	return handler.NewSNSHandler(snsUsecase)
}
