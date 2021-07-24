package model

type Schedule struct {
	ID        string `json:"id" gorm:"primaryKey"`
	About     string `json:"about"`
	Emoji     string `json:"emoji" gorm:"not null"`
	Year      string `json:"year" gorm:"not null"`
	Month     string `json:"month" gorm:"not null"`
	Day       string `json:"day" gorm:"not null"`
	StartTime string `json:"start_time" gorm:"not null"`
	EndTime   string `json:"end_time"`
	Place     string `json:"place"`
	Title     string `json:"title" gorm:"not null"`
	URL       string `json:"url"`
	UserID    string
}
