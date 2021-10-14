package model

type User struct {
	ID            string     `json:"id"`
	Name          string     `json:"name" gorm:"not null"`
	ScheduleTitle string     `json:"schedule_title" gorm:"unique;not null"`
	SNS           []SNS      `json:"sns"`
	Schedule      []Schedule `json:"schedule"`
}
