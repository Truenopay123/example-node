var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('../fast-api-dev/routes/index')
var usersRouter = require('../fast-api-dev/routes/users')
var itemsRouter = require('../fast-api-dev/routes/items')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/items', itemsRouter)

module.exports = app
