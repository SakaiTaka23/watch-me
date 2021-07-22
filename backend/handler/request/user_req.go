package request

type CreateUser struct {
	UserName string `json:"name"`
}

type UpdateUser struct {
	UserName      string `json:"name"`
	ScheduleTitle string `json:"title"`
}
