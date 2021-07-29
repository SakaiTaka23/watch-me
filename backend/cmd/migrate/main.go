package main

import (
	"backend/entity/model"
	"backend/injector"
	"fmt"
)

func main() {
	db := injector.InjectDB()
	if err := db.Conn.Migrator().DropTable(&model.SNS{}, &model.Schedule{}, &model.User{}); err != nil {
		fmt.Printf("err %s", err)
	}
	if err := db.Conn.AutoMigrate(&model.User{}, &model.SNS{}, &model.Schedule{}); err != nil {
		fmt.Printf("err %s", err)
	}
}
