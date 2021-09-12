package model

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type SNS struct {
	ID     string `json:"id"`
	URL    string `json:"url" gorm:"not null"`
	UserID string `json:"user_id"`
}

func (s *SNS) BeforeCreate(tx *gorm.DB) (err error) {
	id, _ := uuid.NewUUID()
	s.ID = id.String()
	return
}
