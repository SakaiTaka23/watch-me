package model

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Schedule struct {
	ID        string    `json:"id"`
	About     string    `json:"about" gorm:"default:NULL"`
	Emoji     string    `json:"emoji" gorm:"not null"`
	StartDate time.Time `json:"start_time" gorm:"not null"`
	EndDate   time.Time `json:"end_time" gorm:"default:NULL"`
	Place     string    `json:"place" gorm:"default:NULL"`
	Title     string    `json:"title" gorm:"not null"`
	URL       string    `json:"url" gorm:"default:NULL"`
	UserID    string    `json:"user_id"`
}

func (s *Schedule) BeforeCreate(tx *gorm.DB) (err error) {
	id, _ := uuid.NewUUID()
	s.ID = id.String()
	return
}
