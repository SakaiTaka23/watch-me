package model

type SNS struct {
	ID     string `json:"id"`
	URL    string `json:"url" gorm:"not null"`
	UserID string
}
