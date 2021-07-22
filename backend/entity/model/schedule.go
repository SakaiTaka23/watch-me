package model

import "time"

type Schedule struct {
	ID        string    `json:"id" gorm:"primaryKey"`
	About     string    `json:"about"`
	Emoji     string    `json:"emoji"`
	Date      time.Time `json:"date" gorm:"not null"`
	StartTime time.Time `json:"start_time" gorm:"not null"`
	EndTime   time.Time `json:"end_time"`
	Place     string    `json:"place"`
	Title     string    `json:"title" gorm:"not null"`
	URL       string    `json:"url"`
	UserID    string
}
