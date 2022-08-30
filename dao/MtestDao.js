//mongodb
var mongoose = require('../conf/MongodbConf');

let Schema = mongoose.Schema

var myTest = new Schema({
    'name':String,
    'age':'number'
});

//如果只有两个参数mongoose会把第一个加's',使用第三个参数重命名
let model = mongoose.model('myTest', myTest,'myTest');


module.exports = {
    add : async function(req, res){
        console.log(req);
        //GET 是req.query
        //POST 是req.body 
        // var params = req.query;
        var params = req.body;
        console.log(params);
        console.log('params.name:' + params.name);
        if(params.name === null){
            resResult.resErr(res, '用户名不能为空');
            return;
        }
        if(params.age === null){
            resResult.resErr(res, 'age不能为空');
            return;
        }
        let myTest = new model({
            'name': params.name,
            'age':params.age
        });
        myTest.save(function (err) {
            if (err) {
                console.log('保存失败',err)
            } else {
                console.log('保存成功')
            }
        });
    },
};