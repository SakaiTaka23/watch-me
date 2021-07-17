package model

type User struct {
	ID            string `json:"id"`
	Name          string `json:"name" gorm:"unique;not null"`
	ScheduleTitle string `json:"title" gorm:"not null"`
	Email         string `json:"email" gorm:"unique;not null"`
}
