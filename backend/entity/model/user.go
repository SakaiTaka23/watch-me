package model

type User struct {
	ID            string     `json:"id"`
<<<<<<< HEAD
	Name          string     `json:"name" gorm:"not null"`
	ScheduleTitle string     `json:"schedule_title" gorm:"unique;not null"`
=======
	Name          string     `json:"name" gorm:"unique;not null"`
	ScheduleTitle string     `json:"title" gorm:"not null"`
>>>>>>> 43da25f451d429c1b0b8bdc52184ac7f820b4b8e
	SNS           []SNS      `json:"sns"`
	Schedule      []Schedule `json:"schedule"`
}
