package model

type Schedule struct {
	ID        string `json:"id"`
	About     string `json:"about"`
	Emoji     string `json:"emoji" gorm:"not null"`
	Year      uint16 `json:"year" gorm:"not null"`
	Month     uint8  `json:"month" gorm:"not null"`
	Day       uint8  `json:"day" gorm:"not null"`
	StartTime string `json:"start_time" gorm:"not null"`
	EndTime   string `json:"end_time"`
	Place     string `json:"place"`
	Title     string `json:"title" gorm:"not null"`
	URL       string `json:"url"`
	UserID    string `json:"user_id"`
}
