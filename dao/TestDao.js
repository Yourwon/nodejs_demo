//mysql
var executeSql = require('../conf/MysqlDbConf');
var resResult = require('../common/ResponseResult');

module.exports = {
    add : async function(req, res){
        var params = req.query;
        console.log(params.name);
        if(params.name === null){
            resResult.resErr(res, '用户名不能为空');
            return;
        }
        var insertSql = "insert into test (name) values (?)";
        var sqlParams = [params.name];
        
        await executeSql(insertSql, sqlParams).then(data=>{
            console.log('add----->>>r' + data);
            resResult.resSuccess(res);   
        });
    },
    queryById : async function(req, res, next){
        var params = req.query;

        if(params.id === null){
            resResult.resErr(res, '用户id不能为空');
            return;
        }
        var querySql = "select name from test where id =?";
        var sqlParams = [params.id];
        // var querySql = 'select name from test where id =?;SELECT * FROM ? WHERE ? = ?';
        // var querySql = "select name from test where id =; delete from test";
        // var sqlParams =  ['1; delete from test'];
        await executeSql(querySql, sqlParams).then(data=>{
            console.log('querybyid----->>>r' + data);
            resResult.resObj(res, data);  
        });
    }
};