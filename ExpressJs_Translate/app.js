var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth')
var homeRouter = require('./routes/home')
var fileRouter = require('./routes/file')
var app = express();


require('./config/database')//config mongodb
//send in tbe DB
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Headers',"*")
    next()
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);



app.use('/home', homeRouter);
app.use('/file', fileRouter);
module.exports = app;
