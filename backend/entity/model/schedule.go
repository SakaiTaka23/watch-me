package model

import "time"

type Schedule struct {
	ID        string    `json:"id"`
	About     string    `json:"about"`
	Emoji     string    `json:"emoji" gorm:"not null"`
	StartDate time.Time `json:"start_time" gorm:"not null"`
	EndDate   time.Time `json:"end_time" gorm:"not null"`
	Place     string    `json:"place"`
	Title     string    `json:"title" gorm:"not null"`
	URL       string    `json:"url"`
	UserID    string    `json:"user_id"`
}
