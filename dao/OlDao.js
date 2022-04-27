var client = require('../conf/RedisConf');
var resResult = require('../common/ResponseResult');

module.exports = {
    add : async function(req, res){
        var ua = req.headers['user-agent'];
        var time =Date.now();

        client.connect();
        // client.set('123','hello world！')
        //set
        // client.sAdd('hw','hello world！');
        //zSet
        // client.ZADD('zdb', [{'score':time , 'value':ua}] , null);
        // client.zAdd('online', {'score':time, 'value': ua}, null);
        await client.zAdd('online', {'score':time, 'value':ua}).then(data=>{
            console.log('------zadd-----');
            console.log(data);
        });
        client.quit;
    },
    query: async function(req, res){
        var min = 60 * 1000;
        var dnow = Date.now();
        var ago = dnow - min;
        client.connect();

        await client.zRangeByScore('online', min, dnow).then(data=>{
            console.log('-----rangeByscore---');
            req.online = data;
            console.log(data);
        });
        client.quit;
    }
};