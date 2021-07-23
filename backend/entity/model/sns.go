package model

type SNS struct {
	ID     uint   `json:"id" gorm:"primaryKey"`
	URL    string `json:"url" gorm:"not null"`
	UserID string
}
