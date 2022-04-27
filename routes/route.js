//总路由
var test = require('./TestRoute');
var ol = require('./OlRoute');

var route = function(app){

    //拦截器
    app.use((req, res, next)=>{
        console.log('-----------interceptor-------------');
        next();
    })
    app.use('/test', test);
    app.use('/ol', ol);
}

module.exports = route;