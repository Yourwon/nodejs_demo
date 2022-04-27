var express = require('express');
var route = require('./routes/route');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var cors = require('cors');

var resResult = require('./common/ResponseResult');


// var client = redis.createClient({url:'redis://127.0.0.1:6379'});
var app = express();

//跨域处理
app.use(cors({
  origin: "*",
  methods:["GET","POST"]
}));
// 日志中间件
// app.use(logger('dev'));
// json解析中间件
app.use(express.json());
// 解析urlencoded请求体的中间件
app.use(express.urlencoded({ extended: false }));
// cookie解析中间件
app.use(cookieParser());
// 把static设置为静态文件夹
app.use(express.static(path.join(__dirname, 'static')));
// 设置路由
// route.use();
route(app);

// 错误处理，位于路由之后
// 捕捉404错误信息并给出404提示
app.use(function(req, res, next) {
  resResult.resErr(res, '404 NOT FOUNT');
});

app.use(function(err, req, res, next) {
  resResult.resErr(res, err.message);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});  