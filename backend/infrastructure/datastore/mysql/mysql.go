package mysql

import (
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type MySQLHandler struct {
	Conn *gorm.DB
}

func Connect() *MySQLHandler {
	user := os.Getenv("DB_USERNAME")
	pass := os.Getenv("DB_PASSWORD")
	protocol := "tcp(db:3306)"
	dbname := os.Getenv("DB_DATABASE")

	dsn := user + ":" + pass + "@" + protocol + "/" + dbname + "?charset=utf8&parseTime=true"
	connection, err := gorm.Open(mysql.New(mysql.Config{
		DSN:               dsn,
		DefaultStringSize: 256,
	}), &gorm.Config{})

	if err != nil {
		panic("could not connect to the database")
	}

	MySQLHandler := new(MySQLHandler)
	MySQLHandler.Conn = connection

	return MySQLHandler
}
