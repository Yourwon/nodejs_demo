//返回消息

var resSuccess = function(res){
    var result = {"code": 1000, "msg": "请求成功"};
    res.json(result);
}
var resErr = function(res, errMsg){
    var result = {"code":1100, "msg": errMsg};
    res.json(result);
}
var resObj = function(res, data){
    var result = {"code": 1000, "msg": "请求成功", "data":data};
    res.json(result);
}

module.exports = {resSuccess, resErr, resObj};