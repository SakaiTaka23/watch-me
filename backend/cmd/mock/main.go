package main

import (
	"backend/entity/model"
	"backend/injector"
	"time"

	"github.com/google/uuid"
)

var User1 = []model.User{
	{
		ID:            "tf26N4aiyrTDQ1zKbzMPWTArRzo2",
		Name:          "tester",
		ScheduleTitle: "test",
		SNS: []model.SNS{
			{ID: newUID(), URL: "http://example.example.com"},
			{ID: newUID(), URL: "http://test.test.com"},
		},
		Schedule: []model.Schedule{
			{ID: newUID(), About: "about", Emoji: "leg", StartDate: time.Now(), EndDate: time.Now().Add(1 * time.Hour), Place: "YouTube", Title: "オールでねっむいけどなにかしよう", URL: "youtube.com"},
			{ID: newUID(), Emoji: "leg", StartDate: time.Now(), Title: "配信タイトル"},
		},
	},
}

func newUID() string {
	uuid, _ := uuid.NewUUID()
	return uuid.String()
}

func main() {
	db := injector.InjectDB()
	db.Conn.Create(User1)
}
